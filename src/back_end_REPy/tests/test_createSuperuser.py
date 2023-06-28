from django.test import TestCase
from django.contrib.auth import get_user_model

User = get_user_model()

class SuperUserCreationTest(TestCase):
    def test_create_super_user(self):
        # Cria um usuário do tipo superuser
        user = User.objects.create_superuser(username='superuser', password='teste123', telefone='9999999')

        # Verifica se os dados estão sendo cadastrados corretamente
        self.assertEqual(user.username, 'superuser')
        self.assertTrue(user.check_password('teste123'))
        self.assertEqual(user.telefone, '9999999')
        self.assertTrue(user.is_active)
        self.assertTrue(user.is_staff)
        self.assertTrue(user.is_superuser)