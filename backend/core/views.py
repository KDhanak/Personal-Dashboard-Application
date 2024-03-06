from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from django.http import JsonResponse
from .serializers import AccountSerializer
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password
from .models import Account
import requests
from decouple import config
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.

# The class-based view to consume the weatherAPI(OpenWeatherMap)


class WeatherAPIView(APIView):
    def post(self, request, *args, **kwargs):

        apiKey = config("WEATHER_API_KEY")
        if request.data.get("latitude") and request.data.get("longitude"):
            lat = request.data.get("latitude")
            lon = request.data.get("longitude")
            response = requests.get(
                f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}&units=metric"
            )
            weather_data = response.json()
            return JsonResponse(weather_data, safe=False)


# The class-based view to consume the newsAPI(NewsAPI)


class NewsAPIView(APIView):
    def get(self, request, *args, **kwargs):
        apiKey = config("NEWS_API_KEY")

        # Fetch Data from the newsAPI
        response = requests.get(
            f"https://newsapi.org/v2/everything?q=bitcoin&apiKey={apiKey}")
        news_data = response.json()
        return JsonResponse(news_data, safe=False)


# The class-based view to create new accounts


class AccountsCreateView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = AccountSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            subject = "Thank you for creating an account with us."
            message = f"Hi {serializer.validated_data['first_name']}, thank you for creating an account with us. We hope you enjoy the dashboard. If you have any issues, do not hesitate to contact us via this email."
            email_from = settings.EMAIL_HOST_USER
            recipient_list = [serializer.validated_data["email"]]
            send_mail(subject, message, email_from, recipient_list)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

# The class-based view for user to login.


class UserLogin(APIView):
    def post(self, request, *args, **kwargs):
        user_email = request.data.get('email')
        password = request.data.get('password')

        user_instance = Account.objects.get(email=user_email)

        password_is_valid = check_password(password, user_instance.password)

        if password_is_valid:
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
