from cProfile import label
from dataclasses import field
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import Usuario


class CustomUsuarioCreationForm(UserCreationForm):
    class Meta:
        model = Usuario
        fields =  ('telefone',)
        labels = {'username': 'Username'}

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password1'])
        user.username = self.cleaned_data['username']
        if commit:
            user.save()
        return user

class CustomUsuarioChangeForm(UserChangeForm):
    class Meta:
        model = Usuario
        fields = ('telefone',)