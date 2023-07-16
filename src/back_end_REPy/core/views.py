from django.shortcuts import render
import json
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from datetime import datetime

from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly
from rest_framework import status

from rest_framework import mixins
from rest_framework import generics


# Create your views here.

from rest_framework import viewsets
from .models import Funcionario, Usuario, Cargo, Turno, Departamento, Ponto, Horario
from .serializers import FuncionarioSerializer, UsuarioSerializer, CargoSerializer, TurnoSerializer, DepartamentoSerializer, PontoSerializer, HorarioSerializer


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



class RoutesToken(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        routes = [
            'api/token',
            'api/refresh/token',
        ]

        return Response(routes)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class =  MyTokenObtainPairSerializer

# def get_csrf_token(request):
#     csrf_token = csrf.get_token(request)
#     return JsonResponse({'csrfToken': csrf_token})


class FuncionarioList(APIView):
    """
    Liste todos os Funcionarios, ou crie um novo.
    """

    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Funcionario.objects.all()
    serializer_class = FuncionarioSerializer

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
    """
    Recupere, atualize e delete um funcionario
    """
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Funcionario.objects.all()
    serializer_class = FuncionarioSerializer

    def get_object(self, cpf):
        try:
            return Funcionario.objects.get(cpf=cpf)
        except Funcionario.DoesNotExist:
            raise Http404

    # Resgata pelo cpf
    def get(self, request, cpf, format=None):
        func = self.get_object(cpf)
        serializer = FuncionarioSerializer(func)
        return Response(serializer.data)

    # Atualiza todos os dados da tabela
    def put(self, request, cpf, format=None):
        func = self.get_object(cpf)
        serializer = FuncionarioSerializer(func, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # Atualiza apenas uma parte(dado) da tabela
    def patch(self, request, cpf, format=None):
        func = self.get_object(cpf)
        serializer = FuncionarioSerializer(func, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Exclui um elemento do db
    def delete(self, request, cpf, format=None):
        func = self.get_object(cpf)
        func.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class DeptoList(APIView):
    """
    Liste todos os departamentos ou crie um novo.
    """
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Departamento.objects.all()
    serializer_class = DepartamentoSerializer

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
    """
    REcupere, atualize ou delete departamentos
    """
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Departamento.objects.all()
    serializer_class = DepartamentoSerializer
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

    def patch(self, request, nome, format=None):
        depto = self.get_object(nome)
        serializer = DepartamentoSerializer(depto, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)     

    def delete(self, request, nome, format=None):
        func = self.get_object(nome)
        func.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CargoList(APIView):
    """
    Liste todos os cargos ou crie um novo.
    """
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Cargo.objects.all()
    serializer_class = CargoSerializer

    def get(self, request, format = None):
        cargo = Cargo.objects.all()
        serializer = CargoSerializer(cargo, many = True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = CargoSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


class CargoDetail(APIView):
    """
    Recupere, atualize ou delete cargos
    """
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Cargo.objects.all()
    serializer_class = CargoSerializer
    
    def get_object(self, id):
        try:
            return Cargo.objects.get(id=id)
        except Cargo.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):
        cargo = self.get_object(id)
        serializer = CargoSerializer(cargo)
        return Response(serializer.data)

    def put(self, request, id, format=None):
        cargo = self.get_object(id)
        serializer = CargoSerializer(cargo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, id, format=None):
        cargo = self.get_object(id)
        serializer = CargoSerializer(cargo, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        cargo = self.get_object(id)
        cargo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PontoList(APIView):
    """
    Liste todos os cargos ou crie um novo.
    """
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Ponto.objects.all()
    serializer_class = PontoSerializer

    def get(self, request, format = None):
        ponto = Ponto.objects.all()
        serializer = PontoSerializer(ponto, many = True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = CargoSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


class PontoDetail(APIView):
    """
    Recupere, atualize ou delete cargos
    """
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    queryset = Ponto.objects.all()
    serializer_class = PontoSerializer
    
    def get_object(self, id):
        try:
            return Ponto.objects.get(id=id)
        except Ponto.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):
        pt = self.get_object(id)
        serializer = PontoSerializer(pt)
        return Response(serializer.data)

    # Atualiza todos os dados de uma vez
    def put(self, request, id, format=None):
        pt = self.get_object(id)
        serializer = PontoSerializer(pt, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def path(self, request, id):
        pt = self.get_object(id)
        serializer = PontoSerializer(pt, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        pt = self.get_object(id)
        pt.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class BaterPontoView:
    
    def post(request):
        funcionario_id = request.POST.get('funcionario_id')

        try:
            funcionario = Funcionario.objects.get(id=funcionario_id)
        except Funcionario.DoesNotExist:
            return JsonResponse({'error': 'Funcionário não encontrado.'}, status=404)

        data_hora_atual = datetime.now()

        novo_ponto = RegistroPonto(funcionario=funcionario, data_hora=data_hora_atual)
        novo_ponto.save()

        return JsonResponse({'success': 'Ponto batido com sucesso.'})