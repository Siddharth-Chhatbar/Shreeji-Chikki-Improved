from rest_framework import serializers
from .models import ProductInventory, RawMaterialInventory


class ProductInventorySerializer(serializers.ModelSerializer):
    product_name = serializers.StringRelatedField(source="product", read_only=True)

    class Meta:
        model = ProductInventory
        fields = [
            "id",
            "product",
            "product_name",
            "quantity",
            "location",
            "created_at",
            "updated_at",
        ]

        extra_kwargs = {"product": {"write_only": True}}


class RawMaterialInventorySerializer(serializers.ModelSerializer):
    raw_material_name = serializers.StringRelatedField(
        source="raw_material", read_only=True
    )

    class Meta:
        model = RawMaterialInventory
        fields = [
            "id",
            "raw_material",
            "raw_material_name",
            "quantity",
            "location",
            "created_at",
            "updated_at",
        ]

        extra_kwargs = {"raw_material": {"write_only": True}}
