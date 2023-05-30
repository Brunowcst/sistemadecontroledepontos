from django.shortcuts import render
from django.http import JsonResponse
import json
from django.contrib.auth import authenticate, login
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers

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
        
        user = authenticate(request, username=username, password=password)

        if user is not None:
            # login(request, user)
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False})
    return JsonResponse({'success': False})

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


@api_view(['GET'])
def ApiOverView(request):
    api_urls = {
        #funcionarios
        'all_user' : '/',
        'search by cpf': '/?cpf=cpf_input',
        'Add' : '/create',
        'Update' : '/cpf/update',
        'Delete' : '/cpf/delete',
        'Get' : '/cpf'
        #departamentos
        ###content here
        #turnos
        ###content here
    }

    return Response(api_urls)

## GET_ALL
@api_view(['GET'])
def list_users( request ):

    #Verificando os parâmetros da url. Se for vazia retorna todos...
    func = Funcionario.objects.all()
    if func:
        serializer = FuncionarioSerializer( func, many = True )
        return Response( serializer.data )
    return Response(status=status.HTTP_404_NOT_FOUND)

## GET_ANY_WITH_DATA
@api_view(['GET'])
def get_user( request, cpfId ):
    
    #Verificando o parâmetro da url.
    if request.query_params:
        func = Funcionario.objects.get(cpf = cpfId)
    
    if func:
        serializer = FuncionarioSerializer(func, many = True )
        return Response( serializer.data )
    return Response(status=status.HTTP_404_NOT_FOUND)

## CREATE
@api_view(['POST'])
def add_user( request ):
    data = FuncionarioSerializer( data = request.data )
    
    if Funcionario.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')

    if data.is_valid():
        data.save()
        return Response(data.data)
    return Response(status=status.HTTP_404_NOT_FOUND)

## UPDATE
@api_view(['POST'])
def update_user(request, cpf):
    func = Funcionario.objects.get(cpf = cpf)
    data = FuncionarioSerializer(instance = func, data = request.data)

    if data.is_valid():
        data.save()
        return Response(data.data)
    return Response(status=status.HTTP_404_NOT_FOUND)

## DELETE
@api_view(['DELETE'])
def delete_user(request, cpfId):
    func = Funcionario.objects.get(cpf = cpfId)
    func.delete()

    return Response(status=status.HTTP_202_ACCEPTED)


# DEPARTAMENTO

## GET ALL DEPTO
@api_view(['GET'])
def get_all_depto(request):
    depto = Departamento.objects.all()
    if depto:
        serializer = DepartamentoSerializer( depto, many = True )
        return Response( serializer.data )
    return Response(status=status.HTTP_404_NOT_FOUND)


## CREATE DEPTO
@api_view(['POST'])
def create_depto(request):
    depto = DepartamentoSerializer(data = request.data)
    
    if Departamento.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This departamento already exists')
    
    if depto.is_valid():
        depto.save()
        return Response(depto.data)
    return Response(status=status.HTTP_404_NOT_FOUND)

## GET DEPTO
@api_view(['GET'])
def get_depto(request, name):
    #Verificando o parâmetro da url.
    if request.query_params:
        depto = Departamento.objects.get(name = name)
    
    if depto:
        serializer = FuncionarioSerializer(depto, many = True )
        return Response( serializer.data )
    return Response(status=status.HTTP_404_NOT_FOUND)

## DELETE DEPTO
@api_view(['POST'])
def delete_depto(request, name):
    depto = Departamento.objects.get(name = name)
    depto.delete()

    return Response(status=status.HTTP_202_ACCEPTED)

## UPDATE DEPTO
@api_view(['POST'])
def update_depto(request, name):
    depto = Departamento.objects.get(name = name)
    depto = DepartamentoSerializer(instance = depto, data = request.data)

    if depto.is_valid():
        depto.save()
        return Response(depto.data)
    return Response(status=status.HTTP_404_NOT_FOUND)