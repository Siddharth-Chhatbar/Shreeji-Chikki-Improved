from django.urls import include, path
from products import views
from rest_framework.routers import DefaultRouter

app_name = "products"

router = DefaultRouter()
router.register(r"", views.ProductViewSet, basename="product")

urlpatterns = [
    path("", include(router.urls)),
]
