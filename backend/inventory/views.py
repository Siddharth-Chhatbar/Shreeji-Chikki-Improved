from rest_framework import viewsets
from .models import ProductInventory, RawMaterialInventory
from .serializers import ProductInventorySerializer, RawMaterialInventorySerializer


class ProductInventoryViewSet(viewsets.ModelViewSet):
    queryset = ProductInventory.objects.all()
    serializer_class = ProductInventorySerializer
    permission_classes = []


class RawMaterialInventoryViewSet(viewsets.ModelViewSet):
    queryset = RawMaterialInventory.objects.all()
    serializer_class = RawMaterialInventorySerializer
    permission_classes = []
