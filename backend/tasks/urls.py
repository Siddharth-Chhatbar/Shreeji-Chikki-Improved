from django.urls import include, path
from rest_framework.routers import DefaultRouter
from tasks import views

app_name = "tasks"

router = DefaultRouter()
router.register(r"", views.TaskViewSet, basename="task")

urlpatterns = [path("", include(router.urls))]
