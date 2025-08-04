from django.urls import path, include
from raw_materials import views
from rest_framework.routers import DefaultRouter
from rest_framework_nested.routers import NestedSimpleRouter

app_name = "raw_materials"

router = DefaultRouter()
router.register(r"", views.RawMaterialViewSet, basename="raw-material")
router.register(
    r"bill-of-materials", views.BillOfMaterialViewSet, basename="bill-of-materials"
)

materials_router = NestedSimpleRouter(router, r"", lookup="raw_material")
materials_router.register(
    r"price-history", views.RawMaterialPriceHistoryViewSet, basename="price-history"
)

urlpatterns = [
    path("", include(router.urls)),
    path("", include(materials_router.urls)),
]
