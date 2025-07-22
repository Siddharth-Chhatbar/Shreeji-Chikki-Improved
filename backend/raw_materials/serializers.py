from rest_framework import serializers
from raw_materials.models import RawMaterials, RawMaterialPriceHistory, BillOfMaterials


class RawMaterialPriceHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = RawMaterialPriceHistory
        fields = ["id", "price", "effective_date", "created_at", "updated_at"]


class RawMaterialSerializer(serializers.ModelSerializer):
    supplier_name = serializers.CharField(source="supplier.name", read_only=True)
    price_history = RawMaterialPriceHistorySerializer(many=True, read_only=True)

    class Meta:
        model = RawMaterials
        fields = ["id", "name", "supplier_name", "created_at", "updated_at"]


class BillOfMaterialSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source="product.name", read_only=True)
    raw_material_name = RawMaterialSerializer(
        source="raw_material.name", read_only=True
    )

    class Meta:
        model = BillOfMaterials
        fields = [
            "id",
            "product_name",
            "raw_material",
            "raw_material_name",
            "quantity_required",
            "created_at",
            "updated_at",
        ]
