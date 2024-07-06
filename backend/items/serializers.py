from rest_framework import serializers
from . import models


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Item
        fields = [
            "id",
            "name",
            "price",
            "quantity",
            "box_per_carton",
            "item_per_box",
            "item_weight",
            "box_weight",
        ]


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Client
        fields = [
            "id",
            "first_name",
            "last_name",
            "shop_name",
            "address",
            "contact_number",
            "is_supplier",
        ]


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields = ["id", "shop_name", "date", "status", "items"]


class OrderItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItem
        fields = ["id", "order", "item", "quantity"]


class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Inventory
        fields = ["id", "supplier", "name", "quantity", "date", "purchase_price"]
