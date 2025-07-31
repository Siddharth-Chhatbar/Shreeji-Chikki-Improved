from orders.serializers import (
    OrderItemSerializer,
    SalesOrderSerializer,
    PurchaseOrderItemSerializer,
    PurchaseOrderSerializer,
)
from orders.models import OrderItems, SalesOrders, PurchaseOrderItems, PurchaseOrders
from rest_framework import viewsets


class SalesOrderViewSet(viewsets.ModelViewSet):
    queryset = SalesOrders.objects.all()
    serializer_class = SalesOrderSerializer
    permission_classes = []


class PurchaseOrderViewSet(viewsets.ModelViewSet):
    queryset = PurchaseOrders.objects.all()
    serializer_class = PurchaseOrderSerializer
    permission_classes = []
