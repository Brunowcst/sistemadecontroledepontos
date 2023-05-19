# Generated by Django 4.2.1 on 2023-05-18 16:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_alter_horario_dia'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cargo',
            name='carga_horaria',
            field=models.IntegerField(choices=[(20, '20h'), (40, '40h')], default=40),
        ),
        migrations.AlterField(
            model_name='departamento',
            name='cod_gerente',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='core.funcionario'),
        ),
        migrations.AlterField(
            model_name='funcionario',
            name='cod_cargo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='core.cargo'),
        ),
        migrations.AlterField(
            model_name='funcionario',
            name='cod_depto',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='core.departamento'),
        ),
        migrations.AlterField(
            model_name='funcionario',
            name='cod_gerente',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='core.funcionario'),
        ),
        migrations.AlterField(
            model_name='horario',
            name='dia',
            field=models.CharField(choices=[('Seg', 'Segunda-Feira'), ('Ter', 'Terça-Feira'), ('Qua', 'Quarta-Feira'), ('Qui', 'Quinta-Feira'), ('Sex', 'Sexta-Feira'), ('Sab', 'Sábado'), ('Dom', 'Domingo')], default='Seg', max_length=10),
        ),
        migrations.AlterField(
            model_name='ponto',
            name='cod_func',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='core.funcionario'),
        ),
        migrations.AlterField(
            model_name='ponto',
            name='cor_turno',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='core.turno'),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='cod_func',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='core.funcionario'),
        ),
    ]