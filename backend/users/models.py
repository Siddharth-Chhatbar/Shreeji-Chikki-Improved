from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

class User(AbstractUser):
    # Add any custom fields here if you need them in the future
    # For now, we only need to redefine groups and user_permissions
    # to set the related_name.

    groups = models.ManyToManyField(
        Group,  # Refer to the actual Group model
        verbose_name=('groups'),
        blank=True,
        help_text=(
            'The groups this user belongs to. A user will get all permissions '
            'granted to each of their groups.'
        ),
        related_name="custom_user_set",  # Crucial for resolving the clash
        related_query_name="user",
    )
    user_permissions = models.ManyToManyField(
        Permission,  # Refer to the actual Permission model
        verbose_name=('user permissions'),
        blank=True,
        help_text=('Specific permissions for this user.'),
        related_name="custom_user_permissions",  # Crucial for resolving the clash
        related_query_name="user",
    )

    # You can add a __str__ method or other methods if needed
    def __str__(self):
        return self.username
