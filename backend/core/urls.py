from django.contrib import admin
from django.urls import path, include
from .views import WeatherAPIView, NewsAPIView, TaskManagerView, AccountsCreateView, UserLogin
urlpatterns = [
    path("weather", WeatherAPIView.as_view(), name="Weather API"),
    path("news", NewsAPIView.as_view(), name="News API"),
    path("task_manager/projects", TaskManagerView.as_view(),
         name="Task-Manager View"),
    path("task_manager/projects/<str:task_id>/",
         TaskManagerView.as_view(), name="Delete Task"),
    path("accounts/create", AccountsCreateView.as_view(),
         name="Create new Account"),
    path("accounts/login", UserLogin.as_view(), name="login view"),
]
