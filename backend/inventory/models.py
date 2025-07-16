from django.db import models

from products.models import Products
from raw_materials.models import RawMaterials


class Inventory(models.Model):
    class TypeChoice(models.TextChoices):
        PRODUCTS = "Products"
        RAW_MATERIALS = "Raw Materials"

    product = models.ForeignKey(Products, on_delete=models.DO_NOTHING)
    raw_material = models.ForeignKey(RawMaterials, on_delete=models.DO_NOTHING)
    type = models.CharField(
        max_length=15, choices=TypeChoice.choices, default=TypeChoice.PRODUCTS
    )
    quantity = models.PositiveIntegerField()
    location = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
