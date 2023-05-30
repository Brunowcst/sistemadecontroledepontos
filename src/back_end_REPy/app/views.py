from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework import serializers
#models
from .models import Funcionario, Usuario, Cargo, Turno, Departamento, Ponto, Horario
#serializers
from .serializers import FuncionarioSerializer, UsuarioSerializer, CargoSerializer, TurnoSerializer, DepartamentoSerializer, PontoSerializer, HorarioSerializer


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
