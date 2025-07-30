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

    def get_serializer_class(self):
        instance = self.get_object()

        if isinstance(instance, ProductInventory):
            return ProductInventorySerializer
        elif isinstance(instance, RawMaterialInventory):
            return RawMaterialInventorySerializer
        return InventorySerializer
