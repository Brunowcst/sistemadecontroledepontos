import pytest
from datetime import date
from django.db import models
from core.models import Funcionario

@pytest.fixture
def novo_funcionario():
    return Funcionario(
        nome='John Doe',
        cpf='12345678900',
        sexo='M',
        data_nasc=date(1990, 1, 1),
    )

@pytest.mark.django_db
def test_criar_novo_funcionario(novo_funcionario):
    assert novo_funcionario.nome == 'John Doe'
    assert novo_funcionario.cpf == '12345678900'
    assert novo_funcionario.sexo == 'M'
    assert novo_funcionario.data_nasc == date(1990, 1, 1)
    assert Funcionario.objects.get(cpf=12345678900)