from django.shortcuts import render
import json
from django.contrib.auth import authenticate, login
from django.middleware.csrf import get_token
from django.middleware import csrf
from django.http import JsonResponse

# Create your views here.

from rest_framework import viewsets
from .models import Funcionario, Usuario, Cargo, Turno, Departamento, Ponto, Horario
from .serializers import FuncionarioSerializer, UsuarioSerializer, CargoSerializer, TurnoSerializer, DepartamentoSerializer, PontoSerializer, HorarioSerializer

class FuncionarioViewSet(viewsets.ModelViewSet):
    queryset = Funcionario.objects.all()
    serializer_class = FuncionarioSerializer

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class CargoViewSet(viewsets.ModelViewSet):
    queryset = Cargo.objects.all()
    serializer_class = CargoSerializer

class TurnoViewSet(viewsets.ModelViewSet):
    queryset = Turno.objects.all()
    serializer_class = TurnoSerializer

class DepartamentoViewSet(viewsets.ModelViewSet):
    queryset = Departamento.objects.all()
    serializer_class = DepartamentoSerializer

class PontoViewSet(viewsets.ModelViewSet):
    queryset = Ponto.objects.all()
    serializer_class = PontoSerializer

class HorarioViewSet(viewsets.ModelViewSet):
    queryset = Horario.objects.all()
    serializer_class = HorarioSerializer


def login_view(request): 
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        print('Username:', username)
        print('Password:', password)
        user = authenticate(request, username=username, password=password)
        print(user)

        if user is not None:
            # login(request, user)
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False})
    return JsonResponse({'success': False})


def get_csrf_token(request):
    csrf_token = csrf.get_token(request)
    return JsonResponse({'csrfToken': csrf_token})


# acesso = Usuario.objects.filter(usuario=username).values('usuario').first()
# senhaAcesso = Usuario.objects.filter(senha=password).values('senha').first()
# print('Acesso.usuario:', acesso)
# print('Acesso.Senha:', senhaAcesso)
# print('Username:', username)
# print('Password:', password)

# def login_view(request): 
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         username = data.get('username')
#         password = data.get('password')

#         try:
#             if Usuario.objects.filter(usuario=username, senha=password).exists():
#                 return JsonResponse({'success': True})
#             else:
#                 return JsonResponse({'success': False}) 
#         except Usuario.DoesNotExist:
#             return JsonResponse({'success': False, 'error': 'Usuário não encontrado'})
#     return JsonResponse({'success': False})