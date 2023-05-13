from django.db import models

# Create your models here.
class Funcionario(models.Model):
    nome = models.CharField(max_length = 100, null = False)
    cpf = models.CharField(max_length = 11, unique = True, null = False)
    sexo = models.CharField(max_length = 1)
    data_nasc = models.DateField(null = False)
    cod_gerente = models.ForeignKey()
    cod_depto = models.ForeignKey()
    cod_cargo = models.ForeignKey()

    def __str__(self):
        return self.nome

class Usuario(models.Model):
    usuario = models.CharField(max_length = 11, unique = True, null = False)
    email = models.CharField(max_length = 30, null = False, unique = True)
    senha = models.CharField( null = False)
    token = models.CharField( null = False, unique = True )
    cod_func = models.ForeignKey()

    def __str__(self):
        return self.usuario

class Departamento(models.Model):
    nome = models.CharField(max_length = 50, null = False)
    sigla = models.CharField(max_length = 10, null = False)
    data_criacao = models.DateField( null = False)
    cod_gerente = models.ForeignKey()

    def __str__(self):
        return self.nome