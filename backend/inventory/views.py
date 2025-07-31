from inventory.serializers import InventoryPolymorphicSerializer
from inventory.models import Inventory
from rest_framework.viewsets import ModelViewSet


class InventoryViewSet(ModelViewSet):
    queryset = Inventory.objects.all()
    serializer_class = InventoryPolymorphicSerializer
    lookup_field = "id"
    permission_classes = []
