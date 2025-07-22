from rest_framework import serializers
from drf_polymorphic.serializers import PolymorphicSerializer
from inventory.models import Inventory, RawMaterialInventory, ProductInventory


class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = ["id", "quantity", "location", "created_at", "updated_at"]


class ProductInventorySerializer(InventorySerializer):
    product_name = serializers.CharField(source="product.name", read_only=True)

    class Meta(InventorySerializer.Meta):
        model = ProductInventory
        fields = InventorySerializer.Meta.fields + ["product_name"]


class RawMaterialInventorySerializer(InventorySerializer):
    raw_material_name = serializers.CharField(
        source="raw_material.name", read_only=True
    )

    class Meta(InventorySerializer.Meta):
        model = ProductInventory
        fields = InventorySerializer.Meta.fields + ["raw_material_name"]


class InventoryPolymorphicSerializer(PolymorphicSerializer):
    model_serilizer_mapping = {
        Inventory: InventorySerializer,
        ProductInventory: ProductInventorySerializer,
        RawMaterialInventory: RawMaterialInventorySerializer,
    }
