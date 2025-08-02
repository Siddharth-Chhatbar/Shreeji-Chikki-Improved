from django.urls import path, include
from orders import views
from rest_framework.routers import DefaultRouter

app_name = "orders"

router = DefaultRouter()
router.register(r"sales", views.SalesOrderViewSet, basename="sales-order")
router.register(r"purchase", views.PurchaseOrderViewSet, basename="purchase-order")

urlpatterns = [
    path("", include(router.urls)),
]
