from django.db import models

from products.models import Products
from suppliers.models import Suppliers


class RawMaterials(models.Model):
    name = models.CharField(max_length=100)
    supplier = models.ForeignKey(Suppliers, on_delete=models.DO_NOTHING)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class RawMaterialPriceHistory(models.Model):
    raw_material = models.ForeignKey(RawMaterials, on_delete=models.DO_NOTHING)
    price = models.DecimalField(max_digits=20, decimal_places=2)
    effective_date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class BillOfMaterials(models.Model):
    product = models.ForeignKey(Products, on_delete=models.DO_NOTHING)
    raw_material = models.ForeignKey(RawMaterials, on_delete=models.DO_NOTHING)
    quantity_required = models.PositiveIntegerField()
