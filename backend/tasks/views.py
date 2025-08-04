from tasks.serializers import TaskSerializer
from tasks.models import Tasks
from rest_framework import viewsets


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Tasks.objects.all()
    serializer_class = TaskSerializer
    permission_classes = []
