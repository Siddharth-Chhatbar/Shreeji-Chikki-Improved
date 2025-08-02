from django.urls import include, path
from inventory import views
from rest_framework.routers import DefaultRouter

app_name = "inventory"

router = DefaultRouter()
router.register(
    r"product-inventory", views.ProductInventoryViewSet, basename="product-inventory"
)
router.register(
    r"raw-material-inventory",
    views.RawMaterialInventoryViewSet,
    basename="raw-material-inventory",
)

urlpatterns = [
    path("", include(router.urls)),
]
