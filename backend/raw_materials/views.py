from rest_framework.generics import get_object_or_404
from raw_materials.models import RawMaterials, RawMaterialPriceHistory, BillOfMaterials
from raw_materials.serializers import (
    RawMaterialPriceHistorySerializer,
    RawMaterialSerializer,
    BillOfMaterialSerializer,
)
from rest_framework import viewsets


class RawMaterialViewSet(viewsets.ModelViewSet):
    queryset = RawMaterials.objects.all()
    serializer_class = RawMaterialSerializer
    permission_classes = []


class RawMaterialPriceHistoryViewSet(viewsets.ModelViewSet):
    serializer_class = RawMaterialPriceHistorySerializer
    permission_classes = []

    def get_queryset(self):
        raw_material_id = self.kwargs.get("raw_material_pk")
        return RawMaterialPriceHistory.objects.filter(raw_material_id=raw_material_id)

    def perform_create(self, serializer):
        raw_material = get_object_or_404(
            RawMaterials, pk=self.kwargs.get("raw_material_pk")
        )
        serializer.save(raw_material=raw_material)


class BillOfMaterialViewSet(viewsets.ModelViewSet):
    queryset = BillOfMaterials.objects.all()
    serializer_class = BillOfMaterialSerializer
    permission_classes = []
