from django.db import models

# Create your models here.
class Funcionario(models.Model):
    nome = models.CharField(max_length = 100, null = False, default='nome')
    cpf = models.CharField(max_length = 11, unique = True, null = False,  default='cpf')
    sexo = models.CharField(max_length = 1)
    data_nasc = models.DateField(null = False,  default='2000-01-01')
    cod_gerente = models.ForeignKey( 'self', on_delete = models.CASCADE, default = 0)
    cod_depto = models.ForeignKey('Departamento', on_delete = models.CASCADE, default = 0)
    cod_cargo = models.ForeignKey('Cargo', on_delete = models.CASCADE, default = 0)

    def __str__(self):
        return self.nome

class Usuario(models.Model):
    usuario = models.CharField(max_length = 11, unique = True, null = False,  default='user')
    email = models.CharField(max_length = 30, null = False, unique = True,  default='email')
    senha = models.CharField( max_length = 12, null = False,  default='password' )
    token = models.CharField( max_length = 12, null = False, unique = True,  default='0000' )
    cod_func = models.ForeignKey( Funcionario, on_delete = models.CASCADE, default = 0)

    def __str__(self):
        return self.usuario

class Departamento(models.Model):
    nome = models.CharField(max_length = 50, null = False, default='Depto_nome')
    sigla = models.CharField(max_length = 10, null = False, default='')
    data_criacao = models.DateField( null = False,  default='2000-01-01')
    cod_gerente = models.ForeignKey( Funcionario, on_delete = models.CASCADE)

    def __str__(self):
        return self.nome

class Cargo(models.Model):
    nome = models.CharField(max_length = 30, null = False,  default='Cargo_nome')
    salario = models.FloatField()
    carga_horaria = models.IntegerField()
    
    def __str__(self):
        return self.nome

class Ponto(models.Model):
    descricao = models.CharField(max_length = 255,  default='')
    data = models.DateField( null = False,  default='2000-01-01')
    cod_func = models.ForeignKey( Funcionario, on_delete = models.CASCADE)
    cor_turno = models.ForeignKey('Turno', on_delete = models.CASCADE)

    def __str__(self):
        return 'Ponto'

class Turno(models.Model):
    sigla = models.CharField(max_length = 10, null = False, unique = True,  default='Turno')
    hora_inicio = models.CharField(max_length = 12, null = False,  default='00')
    hora_fim = models.CharField(max_length = 12, null = False,  default='00')

    def __str__(self):
        return "%s, %s-%s" %(self.nome,self.hora_inicio, self.hora_fim)

class Horario(models.Model):
    dia = models.CharField(max_length = 10, null = False,  default='24h')
    hora_entrada = models.CharField(max_length = 12, null = False,  default='0h')
    hora_saida = models.CharField(max_length = 12, null = False,  default='24h')