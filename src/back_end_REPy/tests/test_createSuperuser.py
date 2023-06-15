from django.contrib.auth import get_user_model
import pytest

User = get_user_model()

@pytest.mark.django_db
def test_create_super_user():
    # Cria um usuário do tipo superuser
    user = User.objects.create_superuser(username='superuser', password='teste123', telefone='9999999')

    # Verifica se os dados estão sendo cadastrados corretamente
    assert user.username == 'superuser'
    assert user.check_password('teste123')
    assert user.telefone == '9999999'
    assert user.is_active == True
    assert user.is_staff == True
    assert user.is_superuser == True
    