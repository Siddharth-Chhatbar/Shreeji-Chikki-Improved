from django.db import models


class Customers(models.Model):
    name = models.CharField(max_length=200)
    shop_name = models.CharField(max_length=200)
    address = models.CharField(max_length=300)
    email = models.EmailField(null=True)
    phone_number = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
