from django.contrib import admin
from django.urls import path, include
from core.views import *
from rest_framework import routers


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
    path('core/', include('core.urls')),
]
    # path('password-reset/', PasswordResetView.as_view(), name='passwordReset'),
    # path('password-reset/done/', PasswordResetDoneView.as_view(), name='passwordReset'),
    # path('password-reset-confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='passwordReset'),
    # path('password-reset-complete/', PasswordResetCompleteView.as_view(), name='passwordReset')