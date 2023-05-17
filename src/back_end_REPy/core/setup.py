from .models import Funcionario

gerente = Funcionario.objects.create(nome='Nome do Gerente', cpf='12345678901', sexo='M', data_nasc='1990-01-01')