from django.urls import path
from . import views

urlspatterns = [
    path('', views.ApiOverView, name="home"),
    path('get_user/<str:cpfId>/', views.get_user, name="get-user"),
    path('create/', views.add_user, name="add-user"),
    path('update/<str:cpfId>/', views.update_user, name="update-user"),
    path('delete/<str:cpfId>/', views.delete_user, name="delete-user"),
    path('all/', views.list_users, name='get-all-users'),   
]