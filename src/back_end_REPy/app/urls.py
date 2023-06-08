from django.contrib import admin
from django.urls import path, include
from rest_framework import routers, serializers, viewsets
from core.views import FuncionarioViewSet, FuncionarioList, FuncionarioDetail, DepartamentoViewSet, DepartamentoList, DeptoDetail, UsuarioViewSet, CargoViewSet, PontoViewSet, TurnoViewSet, HorarioViewSet, login_view
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import views as auth_views

router = routers.DefaultRouter()
router.register(r'funcionario', FuncionarioViewSet)
router.register(r'departamento', DepartamentoViewSet)
router.register(r'usuario', UsuarioViewSet)
router.register(r'cargo', CargoViewSet)
router.register(r'ponto', PontoViewSet)
router.register(r'turno', TurnoViewSet)
router.register(r'horario', HorarioViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api/login/', csrf_exempt(login_view), name='login'),
    path('password_reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('reset/complete/', auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),
    path('funcionarios/', FuncionarioList.as_view()),
    path('funcionarios/cpf=<str:cpf>/', FuncionarioDetail.as_view()),
    path('deptos/', DepartamentoList.as_view()),
    path('depto/nome=<str:nome>/',DeptoDetail.as_view()),
]
