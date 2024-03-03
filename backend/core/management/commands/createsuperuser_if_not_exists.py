from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from decouple import config


class Command(BaseCommand):
    help = 'Create superuser if not exists'

    def handle(self, *args, **options):
        username = config('DJANGO_SUPERUSER_NAME')
        password = config('DJANGO_SUPERUSER_PASSWORD')

        # Check if the user already exists
        if User.objects.filter(username=username).exists():
            self.stdout.write(self.style.SUCCESS('Superuser already exists'))
            return

        try:
            # Validate the password to ensure it meets Django's password requirements
            User._default_manager.db_manager().create_superuser(username, '', password)
            self.stdout.write(self.style.SUCCESS(
                'Superuser created successfully'))
        except ValidationError as e:
            self.stdout.write(self.style.ERROR(
                f'Error creating superuser: {", ".join(e.messages)}'))
        except Exception as e:
            self.stdout.write(self.style.ERROR(
                f'Error creating superuser: {e}'))
