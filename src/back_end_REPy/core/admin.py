from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Funcionario, Departamento, Usuario, Ponto, Horario, Cargo, Turno
from .forms import CustomUsuarioChangeForm, CustomUsuarioCreationForm

@admin.register(Usuario)
class CustomUsuarioAdmin(UserAdmin):
    add_form = CustomUsuarioCreationForm
    form = CustomUsuarioChangeForm
    model = Usuario
    list_display = ('telefone', 'username', 'is_staff')
    fieldsets= (
        (None, {'fields': ('username', 'password')}),
        ('Informações Pessoais', {'fields': ('email', 'telefone')}),
        ('Permissões', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Datas', {'fields': ('last_login', 'date_joined')}),
    )


# admin.site.register(Usuario, UserAdmin)
# Register your models here.
admin.site.register(Funcionario) 
admin.site.register(Departamento)
# admin.site.register(Usuario)
admin.site.register(Ponto)
admin.site.register(Horario)
admin.site.register(Cargo)
admin.site.register(Turno)