import json
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from django.test import RequestFactory
from django.urls import reverse
from core.views import login_view
from django.contrib.auth import get_user_model
import pytest

User = get_user_model()

def login_view(request): 
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        user = authenticate(request, username=username, password=password)

        if user is not None:
            # login(request, user)
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False})


@pytest.mark.django_db
def test_login_view_succes():
    # Cria uma instância de RequestFactory()
    factory = RequestFactory()

    # Cria um usuário aleatório
    user = User.objects.create_user(username='testuser', password='testpassword')

    # Request post com dados de acesso
    data = {
        'username': 'testuser',
        'password': 'testpassword'
    }
    request = factory.post(reverse('login'), json.dumps(data), content_type='application/json')
    # reverse() é usada para obter a URL reversa com base no nome da visualização no Django.

    # Chama a view
    response = login_view(request)

    # Checka se o retorno é true(dados são válidos)
    assert response.status_code == 200
    assert json.loads(response.content) == {'success': True}

@pytest.mark.django_db
def test_login_view_fail():
    # Cria uma instância de RequestFactory()
    factory = RequestFactory()

    # Cria um usuário aleatório
    user = User.objects.create_user(username='testuser', password='testpassword')

    # passo a senha incorreta para ser enviada como "request"
    data = {
        'username': 'testuser',
        'testpassword': 'testpassworderror'
    }

    # Modifica a senha para um valor incorreto do que foi salvo
    request = factory.post(reverse('login'), json.dumps(data), content_type='application/json')

    # Chama a view
    response = login_view(request)

    # Checka se o retorno é false(dados não são encontrados)
    assert response.status_code == 200
    assert json.loads(response.content) == {'success': False}


    # @pytest.mark.django_db
# def test_login_view():
#     # Cria uma instância de RequestFactory()
#     factory = RequestFactory()

#     # Cria um usuário aleatório
#     user = User.objects.create_user(username='testuser', password='testpassword')

#     # Request post com dados de acesso
#     data = {
#         'username': 'testuser',
#         'password': 'testpassword'
#     }
#     request = factory.post(reverse('login'), json.dumps(data), content_type='application/json')

#     # Chama a view
#     response = login_view(request)

#     # Checka se o retorno é true(dados são válidos)
#     assert response.status_code == 200
#     assert json.loads(response.content) == {'success': True}

#     # Modifica a senha para um valor incorreto do que foi salvo
#     data['password'] = 'incorrectpassword'
#     request = factory.post(reverse('login'), json.dumps(data), content_type='application/json')

#     # Chama a view novamente
#     response = login_view(request)

#     # Checka se o retorno é false(dados não são válidos)
#     assert response.status_code == 200
#     assert json.loads(response.content) == {'success': False}