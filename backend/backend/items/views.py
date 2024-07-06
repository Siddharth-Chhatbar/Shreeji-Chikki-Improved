from os import walk
from django.shortcuts import render
from rest_framework import viewsets, permissions

from items import serializers
from items.models import Client, Inventory, Item, Order


# Create your views here.


class ItemViewSet(viewsets.ModelViewSet):
    """
    API endpoit for Items
    """

    queryset = Item.objects.all().order_by("name")
    serializer_class = serializers.ItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)


class ClientViewSet(viewsets.ModelViewSet):
    """
    API endpoint for Clients
    """

    queryset = Client.objects.all().order_by("shop_name")
    serializer_class = serializers.ClientSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        queryset = super().get_queryset()
        is_supplier = (
            self.request.query_params.get("is_supplier", "false").lower() == "true"
        )
        return queryset.filter(is_supplier=is_supplier)

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all().order_by("-date")
    serializer_class = serializers.OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    # To be editeed to reflect logic between the Models: Clients, Items, Orders and OrderItems
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)

    # To be editeed to reflect logic between the Models: Clients, Items, Orders and OrderItems
    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)


class InventoryViewSet(viewsets.ModelViewSet):
    queryset = Inventory.objects.all().order_by("name")
    serializer_class = serializers.InventorySerializer
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
