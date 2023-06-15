from django.contrib import admin
from django.urls import path, include
from rest_framework import routers, serializers, viewsets
from core.views import FuncionarioViewSet, DepartamentoViewSet, UsuarioViewSet, CargoViewSet, PontoViewSet, TurnoViewSet, HorarioViewSet, login_view, RoutesToken, MyTokenObtainPairView
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import views as auth_views
from rest_framework_simplejwt.views import (
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

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api/login/', csrf_exempt(login_view), name='login'),

    path('tokens/', RoutesToken.as_view(), name='tokens'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('password_reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('reset/complete/', auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),
  
    ## Funcionarios
    path('listar_funcionarios/', FuncionarioList.as_view()),
    path('get_funcionario/<str:cpf>/', FuncionarioDetail.as_view()),
    
    ## Deptos
    path('listar_deptos/', DepartamentoList.as_view()),
    path('get_depto/<str:nome>/',DeptoDetail.as_view()),

    ## Cargos
    path('listar_cargos/', CargoList.as_view()),
    path('get_cargo/<int:id>/',CargoDetail.as_view()),

    ## Horario
    

]
