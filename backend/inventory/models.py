from django.db import models
from products.models import Products
from raw_materials.models import RawMaterials
from polymorphic.models import PolymorphicModel


class Inventory(PolymorphicModel):
    quantity = models.PositiveIntegerField()
    location = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Inventory Item ({self.quantity} at {self.location})"


class ProductInventory(Inventory):
    product = models.ForeignKey(Products, on_delete=models.DO_NOTHING)

    def __str__(self):
        return f"Product Inventory: {self.product.name} ({self.quantity} at {self.location})"


class RawMaterialInventory(Inventory):
    raw_material = models.ForeignKey(RawMaterials, on_delete=models.DO_NOTHING)

    def __str__(self):
        return f"Raw Material Inventory: {self.raw_material.name} ({self.quantity} at {self.location})"


# Example usage:
# all_inventory = Inventory.objects.all()
# for item in all_inventory:
#     if isinstance(item, ProductInventory):
#         print(f"Product: {item.product.name}")
#     elif isinstance(item, RawMaterialInventory):
#         print(f"Raw Material: {item.raw_material.name}")
