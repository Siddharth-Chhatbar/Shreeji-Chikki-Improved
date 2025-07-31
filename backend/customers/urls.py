from django.urls import include, path
from customers import views
from rest_framework.routers import DefaultRouter

app_name = "customers"

router = DefaultRouter()
router.register(r"", views.CustomerViewSet, basename="customer")

urlpatterns = [path("", include(router.urls))]
