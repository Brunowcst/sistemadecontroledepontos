from datetime import timezone
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

# Create your models here.

class UsuarioManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, username, password, ** extra_fields):
        if not username:
            raise ValueError('o nome de usuário é obrigatório')
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(username, password, **extra_fields)

    def create_superuser(self, username, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('O superuser necessita de is_superuser=true.')
        if extra_fields.get('is_staff') is not True:
            raise ValueError('O superuser necessita de is_staffr=true.')
        return self._create_user(username, password, **extra_fields)

class Usuario(AbstractUser):
    username = models.CharField(max_length = 20, null = False, verbose_name="Nome de usuário", unique= True)
    # email = models.EmailField('E-mail', unique=True)
    telefone = models.CharField('Telefone', max_length=12)
    is_staff = models.BooleanField('Funcionário', default=True)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['telefone']

    def __str__(self):
        return self.username
    objects = UsuarioManager()


class Funcionario(models.Model):
    nome = models.CharField(max_length = 100, null = False, verbose_name="Nome")
    cpf = models.CharField(max_length = 11, unique = True, null = False,  default='00000000000')
    sexo = models.CharField(max_length = 1)
    data_nasc = models.DateField(null = False,  default= 'YYYY-DD-MM')
    cod_gerente = models.ForeignKey(to='self', on_delete = models.PROTECT, null = True, blank= True)
    cod_depto = models.ForeignKey(to='Departamento', on_delete = models.PROTECT, null = True, blank= True)
    cod_cargo = models.ForeignKey(to='Cargo', on_delete = models.PROTECT)
    cod_turno = models.ManyToManyField(to='Turno')
    cod_horario = models.ManyToManyField(to='Horario')
    cod_func = models.ForeignKey(to = Usuario, on_delete = models.PROTECT, null= True, blank= True)

    def __str__(self):
        return self.nome


class Departamento(models.Model):
    nome = models.CharField(max_length = 50, null = False, default='Depto_nome')
    sigla = models.CharField(max_length = 10, null = False, default='')
    data_criacao = models.DateField( null = False,  default='2000-01-01')
    cod_gerente = models.ForeignKey( to = Funcionario, on_delete = models.PROTECT)

    def __str__(self):
        return self.nome

class Cargo(models.Model):
    nome = models.CharField(max_length = 30, null = False,  default='Cargo_nome')
    salario = models.FloatField(null= False)
    class turno_horario(models.IntegerChoices):
        meio_turno = 20,('20h')
        turno = 40, ('40h')

    carga_horaria = models.IntegerField(choices=turno_horario.choices, default=turno_horario.turno, null = False, blank= False)

    def __str__(self):
        return self.nome

class Ponto(models.Model):
    descricao = models.CharField(max_length = 255,  default='')
    data_marcacao = models.DateTimeField(editable = False, auto_now_add= True)
    cod_func = models.ForeignKey( to = Funcionario, on_delete = models.PROTECT)
    cor_turno = models.ForeignKey(to = 'Turno', on_delete = models.PROTECT)

    def __str__(self):
        return 'Ponto'

    def save(self, *args, **kwargs):
        '''Salvar marcacao'''
        self.data_marcacao = timezone
        return super(Ponto, self).save(*args, **kwargs)

class Turno(models.Model):
    sigla = models.CharField(max_length = 10, null = False, unique = True,  default='Turno')
    hora_inicio = models.CharField(max_length = 12, null = False,  default='00')
    hora_fim = models.CharField(max_length = 12, null = False,  default='00')

    def __str__(self):
        return "%s | %s - %s" %(self.sigla, self.hora_inicio, self.hora_fim)
        
class Horario(models.Model):
    class Dia_semana(models.TextChoices):
        Segunda = 'Seg',('Segunda-Feira')
        Terca = 'Ter', ('Terça-Feira')
        Quarta = 'Qua', ('Quarta-Feira')
        Quinta = 'Qui', ('Quinta-Feira')
        Sexta = 'Sex', ('Sexta-Feira')
        Sabado = 'Sab', ('Sábado')
        Domingo = 'Dom', ('Domingo')
    
    dia = models.CharField(max_length = 10, null = False, blank = False, choices=Dia_semana.choices, default=Dia_semana.Segunda)
    hora_entrada = models.CharField(max_length = 12, null = False,  default='0h')
    hora_saida = models.CharField(max_length = 12, null = False,  default='24h')
    def __str__(self):
        return "%s, %s - %s" %(self.dia, self.hora_entrada, self.hora_saida)