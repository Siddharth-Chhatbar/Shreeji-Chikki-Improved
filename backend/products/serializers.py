from rest_framework import serializers
from .models import Products, ProductPhotos


class ProductPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductPhotos
        fields = ["id", "photo_url", "display_order", "created_at", "updated_at"]


class ProductSerializer(serializers.ModelSerializer):
    photos = ProductPhotoSerializer(
        many=True, read_only=True, source="productphotos_set"
    )

    class Meta:
        model = Products
        fields = [
            "id",
            "name",
            "price_per_unit_mrp",
            "price_per_unit_wholesale",
            "weight_in_grams",
            "created_at",
            "updated_at",
            "photos",
        ]
