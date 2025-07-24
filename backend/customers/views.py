from customers.serializers import CustomerSerializer
from rest_framework import viewsets
from customers.models import Customers


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customers.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = []
