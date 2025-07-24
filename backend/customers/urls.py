from django.urls import include, path
from customers import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"customers", views.CustomerViewSet, basename="customer")

urlpatterns = [path("", include(router.urls))]
