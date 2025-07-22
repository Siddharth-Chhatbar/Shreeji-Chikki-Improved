from rest_framework import serializers
from employees.models import Employees, TimeEntries


class EmployeeSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source="user.get_full_name", read_only=True)

    class Meta:
        model = Employees
        fields = ("id", "name", "hire_date", "job_title", "salary_per_hr")


class TimeEntrySerializer(serializers.ModelSerializer):
    name = serializers.CharField(source="employee.user.get_full_name")

    class Meta:
        model = TimeEntries
        fields = (
            "name",
            "start_time",
            "end_time",
            "break_start_time",
            "break_end_time",
            "type",
            "total_hours",
            "notes",
        )
