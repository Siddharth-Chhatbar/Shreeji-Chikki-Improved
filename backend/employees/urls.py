from django.urls import include, path
from employees import views
from rest_framework.routers import DefaultRouter
from rest_framework_nested import routers

app_name = "employees"

router = DefaultRouter()
router.register(r"", views.EmployeeViewSet)

employees_router = routers.NestedSimpleRouter(router, r"", lookup="employee")
employees_router.register(
    r"time-entries",
    views.TimeEntryViewSet,
    basename="time-entries",
)

urlpatterns = [
    path("", include(router.urls)),
    path("", include(employees_router.urls)),
]
