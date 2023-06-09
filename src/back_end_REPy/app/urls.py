"""
URL configuration for app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers, serializers, viewsets
from core.views import FuncionarioViewSet, DepartamentoViewSet, UsuarioViewSet, CargoViewSet, PontoViewSet, TurnoViewSet, HorarioViewSet, login_view, RoutesToken
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import views as auth_views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = routers.DefaultRouter()
router.register(r'funcionario', FuncionarioViewSet)
router.register(r'departamento', DepartamentoViewSet)
router.register(r'usuario', UsuarioViewSet)
router.register(r'cargo', CargoViewSet)
router.register(r'ponto', PontoViewSet)
router.register(r'turno', TurnoViewSet)
router.register(r'horario', HorarioViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api/login/', csrf_exempt(login_view), name='login'),
    path('tokens/', RoutesToken.as_view(), name='tokens'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


    path('password_reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('reset/complete/', auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),
    # path('get_csrf_token/', get_csrf_token, name='csrf')
]
    # path('password-reset/', PasswordResetView.as_view(), name='passwordReset'),
    # path('password-reset/done/', PasswordResetDoneView.as_view(), name='passwordReset'),
    # path('password-reset-confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='passwordReset'),
    # path('password-reset-complete/', PasswordResetCompleteView.as_view(), name='passwordReset')