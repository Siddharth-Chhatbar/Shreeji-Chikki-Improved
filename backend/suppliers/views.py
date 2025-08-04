from suppliers.models import Suppliers
from suppliers.serializers import SupplierSerializer
from rest_framework import viewsets


class SupplierViewSet(viewsets.ModelViewSet):
    queryset = Suppliers.objects.all()
    serializer_class = SupplierSerializer
    permission_classes = []
