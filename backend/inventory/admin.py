from django.contrib import admin
from polymorphic.admin import (
    PolymorphicParentModelAdmin,
    PolymorphicChildModelAdmin,
    PolymorphicChildModelFilter,
)
from .models import Inventory, ProductInventory, RawMaterialInventory

# --- Child admin classes (do NOT use @admin.register) ---


class ProductInventoryAdmin(PolymorphicChildModelAdmin):
    base_model = Inventory
    list_display = ("__str__", "product", "quantity", "location")


class RawMaterialInventoryAdmin(PolymorphicChildModelAdmin):
    base_model = Inventory
    list_display = ("__str__", "raw_material", "quantity", "location")


# --- Parent admin class ---


class InventoryAdmin(PolymorphicParentModelAdmin):
    base_model = Inventory
    list_display = ("__str__", "quantity", "location", "created_at", "updated_at")
    list_filter = (PolymorphicChildModelFilter,)
    child_models = [ProductInventory, RawMaterialInventory]


# --- Register all admins explicitly ---

admin.site.register(ProductInventory, ProductInventoryAdmin)
admin.site.register(RawMaterialInventory, RawMaterialInventoryAdmin)
admin.site.register(Inventory, InventoryAdmin)
