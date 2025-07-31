from rest_framework import serializers
from suppliers.models import Suppliers


class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suppliers
        fields = ["id", "name", "address", "phone_number", "created_at", "updated_at"]
