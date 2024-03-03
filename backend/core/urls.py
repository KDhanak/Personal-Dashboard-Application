from django.contrib import admin
from django.urls import path, include
from .views import WeatherAPIView, NewsAPIView, AccountsCreateView, UserLogin
urlpatterns = [
    path("weather", WeatherAPIView.as_view(), name="Weather API"),
    path("news", NewsAPIView.as_view(), name="News API"),
    path("accounts/create", AccountsCreateView.as_view(),
         name="Create new Account"),
    path("accounts/login", UserLogin.as_view(), name="login view")
]
