from django.shortcuts import render
from .models import Usuario
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
import json


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
        username = data['username']
        password = data['password']

        user = authenticate(request, username=username, password=password)

        if user is not None:
            return JsonResponse({'sucess': True})
        else:
            return JsonResponse({'sucess': False})
            
    return JsonResponse({'success': False})