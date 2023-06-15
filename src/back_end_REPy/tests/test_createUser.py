import pytest
from django.contrib.auth import get_user_model

User = get_user_model()

@pytest.mark.django_db
def test_create_custom_user():
    # Cria um usuário personalizado
    user = User.objects.create_user(username='testuser', password='testpassword', telefone="99999999")

    # Verifica se o usuário foi criado corretamente
    assert user.username == 'testuser'
    assert user.check_password('testpassword')
    assert user.telefone == "99999999"
    assert user.is_active
    assert user.is_staff
    assert not user.is_superuser