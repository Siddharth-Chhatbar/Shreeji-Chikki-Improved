from django.db import models


class Suppliers(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=300)
    phone_number = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField()
