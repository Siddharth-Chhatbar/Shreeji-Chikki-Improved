from products.serializers import ProductSerializer, ProductPhotoSerializer
from products.models import Products, ProductPhotos
from rest_framework import viewsets


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer
    permission_classes = []
