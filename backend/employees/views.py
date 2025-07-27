from rest_framework.exceptions import NotFound
from employees.serializers import EmployeeSerializer, TimeEntrySerializer
from rest_framework import viewsets
from employees.models import Employees, TimeEntries


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employees.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = []


# Todo: For time entries time-entries/:id/ here id should be employee id
class TimeEntryViewSet(viewsets.ModelViewSet):
    serializer_class = TimeEntrySerializer
    permission_classes = []

    def get_queryset(self):
        employee_id = self.kwargs.get("employee_pk")

        if employee_id is not None:
            try:
                employee = Employees.objects.get(id=employee_id)
                return TimeEntries.objects.filter(employee=employee)
            except Employees.DoesNotExist:
                raise NotFound(detail="Employee not found.")

        return TimeEntries.objects.none()
