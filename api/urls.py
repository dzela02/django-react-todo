from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes, name='routes'),
    path('todos/', views.getTODOS, name='todos'),
    path('todos/create/', views.createTODO, name='createTODO'),
    path('todos/<str:pk>/', views.getTODO, name='todo'),
    path('todos/<str:pk>/delete/', views.deleteTODO, name='deleteTODO'),
]