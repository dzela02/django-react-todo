from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes, name='routes'),
    path('todos/', views.getTODOS, name='todos'),
    path('todos/<str:pk>/', views.getTODO, name='todo')
]