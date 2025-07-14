from rest_framework import fields, serializers

class OrderItemSerializer(serializers.ModelSerializer): 
    class Meta: 
        fields = (
            'product',
            'quantity',
            'order_status',
            'expected_shipping_date',
            'actual_shipping_date',
            'item_subtotal'
        )

class SalesOrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True) 

    class Meta: 
        fields = (
            'customer',
            'order_amount',
            'order_status',
            'created_at'
            'items'
        )

class PurchaseOrderItemSerializer(serializers.ModelSerializer): 
    class Meta: 
        fields = (
            'product',
            'raw_materials',
            'quantity',
            'order_status',
            'expected_shipping_date',
            'actual_shipping_date',
            'item_subtotal'
        )

class PurchaseOrderSerializer(serializers.ModelSerializer):
    items = PurchaseOrderItemSerializer(many=True, read_only=True) 

    class Meta: 
        fields = (
            'supplier',
            'order_amount',
            'order_status',
            'created_at'
            'items'
        )
