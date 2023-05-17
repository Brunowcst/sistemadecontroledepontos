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
from core.views import FuncionarioViewSet, DepartamentoViewSet, UsuarioViewSet, CargoViewSet, PontoViewSet, TurnoViewSet, HorarioViewSet

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
    path('admin/', admin.site.urls)
]