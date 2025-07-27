from django.urls import include, path
from employees import views
from rest_framework.routers import DefaultRouter
from rest_framework_nested import routers

router = DefaultRouter()
router.register(r"employees", views.EmployeeViewSet)

employees_router = routers.NestedSimpleRouter(router, r"employees", lookup="employee")
employees_router.register(
    r"time-entries",
    views.TimeEntryViewSet,
    basename="employee-time-entry",
)

urlpatterns = [
    path("", include(router.urls)),
    path("", include(employees_router.urls)),
]
