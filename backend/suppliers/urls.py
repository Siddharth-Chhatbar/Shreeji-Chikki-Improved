from django.urls import path, include
from suppliers import views
from rest_framework.routers import DefaultRouter

app_name = "suppliers"

router = DefaultRouter()
router.register(r"", views.SupplierViewSet, basename="supplier")

urlpatterns = [path(r"", include(router.urls))]
