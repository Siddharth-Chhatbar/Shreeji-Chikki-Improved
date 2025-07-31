from inventory.serializers import (
    InventorySerializer,
    InventoryPolymorphicSerializer,
    ProductInventorySerializer,
    RawMaterialInventorySerializer,
)
from inventory.models import Inventory, ProductInventory, RawMaterialInventory
from rest_framework.viewsets import ModelViewSet


class InventoryViewSet(ModelViewSet):
    queryset = Inventory.objects.all()
    serializer_class = InventoryPolymorphicSerializer
    lookup_field = "id"
    permission_classes = []
