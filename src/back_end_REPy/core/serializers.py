from rest_framework import serializers
from .models import Funcionario, Usuario, Cargo, Turno, Departamento, Ponto, Horario

class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = '__all__'

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('first_name', 'last_name', 'email', 'username', 'password', 'telefone', 'is_superuser', 'is_active', 'is_staff')

class CargoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cargo
        fields = '__all__'

class TurnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turno
        fields = '__all__'

class DepartamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departamento
        fields = '__all__'

class PontoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ponto
        fields = ('descricao', 'cod_func', 'cor_turno')

class HorarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Horario
        fields = '__all__'