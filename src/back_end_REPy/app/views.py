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
        'all_user' : 'user/',
        'search by cpf': 'user/?cpf=cpf_input',
        'Add' : 'user/create',
        'Update' : 'user/cpf/update',
        'Delete' : 'user/cpf/delete',
        'Get' : 'user/cpf'
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
def update_user(request, cpfId):
    func = Funcionario.objects.get(cpf = cpfId)
    data = FuncionarioSerializer(instance=func, data = request.data)

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