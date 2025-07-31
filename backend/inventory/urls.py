from django.urls import include, path
from inventory import views
from rest_framework.routers import DefaultRouter

app_name = "inventory"

router = DefaultRouter()
router.register(r"", views.InventoryViewSet, basename="inventory")

urlpatterns = [
    path("", include(router.urls)),
]
