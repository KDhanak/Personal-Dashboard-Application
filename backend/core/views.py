# Import necessary modules and libraries
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from django.http import JsonResponse
from .serializers import AccountSerializer, ProjectSerializer, TaskSerializer
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password
from .models import Account
import requests
from decouple import config
from django.core.mail import send_mail
from django.conf import settings
import logging
from todoist_api_python.api import TodoistAPI

# Set up logging
logger = logging.getLogger(__name__)

# Create your views here.

# Class-based view to consume the OpenWeatherMap API


class WeatherAPIView(APIView):
    def post(self, request, *args, **kwargs):
        # Get the API key for OpenWeatherMap from environment variables
        apiKey = config("WEATHER_API_KEY")

        # Extract latitude and longitude from the request data
        if request.data.get("latitude") and request.data.get("longitude"):
            lat = request.data.get("latitude")
            lon = request.data.get("longitude")

            # Make a request to the OpenWeatherMap API
            response = requests.get(
                f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}&units=metric"
            )

            # Parse the JSON response and return it
            weather_data = response.json()
            return JsonResponse(weather_data, safe=False)

# Class-based view to consume the NewsAPI


class NewsAPIView(APIView):
    def post(self, request, *args, **kwargs):
        # Get the API key for NewsAPI from environment variables
        apiKey = config("NEWS_API_KEY")
        query = request.data.get("search")

        # Make a request to the NewsAPI
        response = requests.get(
            f"https://newsapi.org/v2/everything?q={query}&apiKey={apiKey}")
        news_data = response.json()

        # Return the JSON response
        if news_data:
            return JsonResponse(news_data, status=status.HTTP_200_OK)

    def get(self, *args, **kwargs):
        # Get the API key for NewsAPI from environment variables
        apiKey = config("NEWS_API_KEY")

        # Make a request to get top headlines from NewsAPI
        response = requests.get(
            f"https://newsapi.org/v2/top-headlines?country=au&apiKey={apiKey}"
        )
        news_data = response.json()

        # Return the JSON response
        if news_data:
            return JsonResponse(news_data, status=status.HTTP_200_OK, safe=False)

# Class-based view for managing tasks using Todoist API


class TaskManagerView(APIView):
    def get(self, request, *args, **kwargs):
        # Get the API token for Todoist from environment variables
        apiToken = config("TODOIST_API_TOKEN")
        api = TodoistAPI(apiToken)

        # Get projects from Todoist and serialize the data
        projects = api.get_projects()
        serializer = ProjectSerializer(projects, many=True)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)

    def post(self, request, *args, **kwargs):
        # Get the API token for Todoist from environment variables
        apiToken = config("TODOIST_API_TOKEN")
        api = TodoistAPI(apiToken)
        project_id = request.data.get("project_id")
        project_name = request.data.get("project_name")
        task_content = request.data.get("task_content")

        # Handle different cases for POST requests
        if project_id and not task_content:
            try:
                # Get tasks for a specific project and serialize the data
                tasks = api.get_tasks(project_id=project_id)
                serialized_tasks = TaskSerializer(data=tasks, many=True)
                serialized_tasks.is_valid()
                tasks_data = serialized_tasks.data
                return JsonResponse(tasks_data, status=status.HTTP_200_OK, safe=False)

            except Exception as error:
                return JsonResponse({'error': str(error)}, status=status.HTTP_400_BAD_REQUEST, safe=False)

        elif project_name:
            try:
                # Add a new project to Todoist
                project = api.add_project(name=project_name)
                return JsonResponse(project, status=status.HTTP_201_CREATED, safe=False)
            except Exception as error:
                return JsonResponse({'error': str(error)}, status=status.HTTP_400_BAD_REQUEST, safe=False)

        elif project_id and task_content:
            try:
                # Add a new task to a specific project in Todoist
                task = api.add_task(content=task_content,
                                    project_id=project_id)
                serializer = TaskSerializer(task)
                return JsonResponse(serializer.data, status=status.HTTP_201_CREATED, safe=False)
            except Exception as error:
                return JsonResponse({'error': str(error)}, status=status.HTTP_400_BAD_REQUEST, safe=False)

    def delete(self, request, task_id, *args, **kwargs):
        # Get the API token for Todoist from environment variables
        apiToken = config("TODOIST_API_TOKEN")
        api = TodoistAPI(apiToken)
        try:
            # Delete a task in Todoist
            is_success = api.delete_task(task_id=task_id)
            return Response(is_success, status=status.HTTP_200_OK, safe=False)
        except Exception as error:
            return Response({'error': str(error)}, status=status.HTTP_400_BAD_REQUEST, safe=False)

    def put(self, request, *args, **kwargs):
        # Get the API token for Todoist from environment variables
        apiToken = config("TODOIST_API_TOKEN")
        api = TodoistAPI(apiToken)
        is_completed = request.data.get("is_completed")
        task_id = request.data.get("task_id")

        try:
            # Mark a task as completed in Todoist
            is_success = api.close_task(task_id=task_id)
            return JsonResponse(is_success, status=status.HTTP_201_CREATED, safe=False)
        except Exception as error:
            return JsonResponse({'error': str(error)}, status=status.HTTP_400_BAD_REQUEST, safe=False)

# Class-based view for creating new user accounts
# The account creation and login are not being used anywhere in the project. I have added them for future implementations.


class AccountsCreateView(APIView):
    def post(self, request, *args, **kwargs):
        # Validate and save the account using the serializer
        serializer = AccountSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            # Send a welcome email to the user
            subject = "Thank you for creating an account with us."
            message = f"Hi {serializer.validated_data['first_name']}, thank you for creating an account with us. We hope you enjoy the dashboard. If you have any issues, do not hesitate to contact us via this email."
            email_from = settings.EMAIL_HOST_USER
            recipient_list = [serializer.validated_data["email"]]
            send_mail(subject, message, email_from, recipient_list)

            return Response(serializer.data, status=status.HTTP_201_CREATED)

# Class-based view for user login


class UserLogin(APIView):
    def post(self, request, *args, **kwargs):
        # Get user email and password from the request data
        user_email = request.data.get('email')
        password = request.data.get('password')

        # Retrieve the user instance from the database
        user_instance = Account.objects.get(email=user_email)

        # Check if the provided password is valid
        password_is_valid = check_password(password, user_instance.password)

        # Return the appropriate response based on password validation
        if password_is_valid:
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
