from .views import *
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import views as auth_views
from django.urls import path
from . import views

urlpatterns = [
    path('', views.ApiOverView, name="home"),
    # LOGIN
    path('api/login/', csrf_exempt(login_view), name='login'),
    path('password_reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('reset/complete/', auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),
    # USERS
    path('get_user/<str:cpfId>/', views.get_user, name="get-user"),
    path('create_user/', views.add_user, name="add-user"),
    path('update_user/<str:cpf>/', views.update_user, name="update-user"),
    path('delete_user/<str:cpfId>/', views.delete_user, name="delete-user"),
    path('get_all_user/', views.list_users, name='get-all-users'),
    # DEPTOS
    path('get_depto/<str:name>/', views.get_depto, name='get-depto'),
    path('create_depto/', views.create_depto, name='create-depto'),
    path('delete_depto/<str:name>/', views.delete_depto, name='delete-depto'),
    path('update_depto/<str:name>/', views.update_depto, name='update-depto'),
    path('get_all_depto/', views.get_all_depto, name='get_all_depto'),
]