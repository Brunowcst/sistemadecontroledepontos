from django.urls import path
from . import views

urlpatterns = [
    path('', views.ApiOverView, name="home"),
    path('get_user/<str:cpfId>/', views.get_user, name="get-user"),
    path('create/', views.add_user, name="add-user"),
    path('update/<str:cpf>/', views.update_user, name="update-user"),
    path('delete/<str:cpfId>/', views.delete_user, name="delete-user"),
    path('all/', views.list_users, name='get-all-users'),
    path('get_depto/<str:name>/', views.get_depto, name='get-depto'),
    path('create_depto/', views.create_depto, name='create-depto'),
    path('delete_depto/<str:name>/', views.delete_depto, name='delete-depto'),
    path('update_depto/<str:name>/', views.update_depto, name='update-depto'),
    path('get_all_depto/', views.get_all_depto, name='get_all_depto'),
]