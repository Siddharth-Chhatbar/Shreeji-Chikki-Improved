from rest_framework import serializers
from customers.models import Customers

class CustomerSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Customers
        fields = (
            "name",
            "shop_name",
            "address",
            "email",
            "phone_number"
        )
