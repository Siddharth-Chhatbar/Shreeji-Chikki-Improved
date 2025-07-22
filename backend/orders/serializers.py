from rest_framework import serializers
from .models import OrderItems, PurchaseOrderItems, PurchaseOrders, SalesOrders


class OrderItemSerializer(serializers.ModelSerializer):
    # TODO: add model properties if required
    class Meta:
        model = OrderItems
        fields = (
            "id" "product",
            "quantity",
            "order_status",
            "expected_shipping_date",
            "actual_shipping_date",
            "item_subtotal",
        )


class SalesOrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    order_amount = serializers.SerializerMethodField()

    def get_order_amount(self, obj):
        order_items = obj.items.all()
        return sum(order_item.item_subtotal for order_item in order_items)

    class Meta:
        model = SalesOrders
        fields = (
            "id",
            "customer",
            "order_amount",
            "order_status",
            "created_at",
            "items",
        )


class PurchaseOrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseOrderItems
        fields = (
            "id",
            "product",
            "raw_materials",
            "quantity",
            "order_status",
            "expected_shipping_date",
            "actual_shipping_date",
            "item_subtotal",
        )


class PurchaseOrderSerializer(serializers.ModelSerializer):
    items = PurchaseOrderItemSerializer(many=True, read_only=True)
    order_amount = serializers.SerializerMethodField()

    def get_order_amount(self, obj):
        order_items = obj.items.all()
        return sum(order_item.item_subtotal for order_item in order_items)

    class Meta:
        model = PurchaseOrders
        fields = (
            "id",
            "supplier",
            "order_amount",
            "order_status",
            "created_at",
            "items",
        )
