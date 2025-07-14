from django.db import models


class Products(models.Model):
    name = models.CharField(max_length=200)
    price_per_unit_mrp = models.DecimalField(max_digits=10, decimal_places=2)
    price_per_unit_wholesale = models.DecimalField(max_digits=10, decimal_places=2)
    weight_in_grams = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField()


class ProductPhotos(models.Model):
    product = models.ForeignKey(Products, on_delete=models.DO_NOTHING)
    photo_url = models.URLField()
    display_order = models.PositiveSmallIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField()
