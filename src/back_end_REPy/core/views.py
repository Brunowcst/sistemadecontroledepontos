from django.shortcuts import render
from django.http import JsonResponse
import json
from django.contrib.auth import authenticate, login


from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


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

class FuncionarioList(APIView):
    """
    List all Funcionarios, or create a new Funcionarios.
    """
    def get(self, request, format=None):
        func = Funcionario.objects.all()
        serializer = FuncionarioSerializer(func, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = FuncionarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FuncionarioDetail(APIView):
    
    def get_object(self, cpf):
        try:
            return Funcionario.objects.get(cpf=cpf)
        except Funcionario.DoesNotExist:
            raise Http404

    def get(self, request, cpf, format=None):
        func = self.get_object(cpf)
        serializer = FuncionarioSerializer(func)
        return Response(serializer.data)

    def put(self, request, cpf, format=None):
        func = self.get_object(cpf)
        serializer = FuncionarioSerializer(func, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, cpf, format=None):
        func = self.get_object(cpf)
        func.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class DepartamentoList(APIView):
    """
    List all Funcionarios, or create a new Funcionarios.
    """
    def get(self, request, format=None):
        depto = Departamento.objects.all()
        serializer = DepartamentoSerializer(depto, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = DepartamentoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DeptoDetail(APIView):
    
    def get_object(self, nome):
        try:
            return Departamento.objects.get(nome=nome)
        except Departamento.DoesNotExist:
            raise Http404

    def get(self, request, nome, format=None):
        depto = self.get_object(nome)
        serializer = DepartamentoSerializer(depto)
        return Response(serializer.data)

    def put(self, request, nome, format=None):
        depto = self.get_object(nome)
        serializer = DepartamentoSerializer(depto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, nome, format=None):
        func = self.get_object(nome)
        func.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
