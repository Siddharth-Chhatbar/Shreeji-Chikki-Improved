from django.db import models

from employees.models import Employees


class Tasks(models.Model):
    class StatusChoices(models.TextChoices):
        PENDING = "Pending"
        COMPLETED = "Completed"
        CANCELLED = "Cancelled"

    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    assigend_by = models.ForeignKey(
        Employees, on_delete=models.DO_NOTHING, related_name="task_assigned_by"
    )
    assigend_to = models.ForeignKey(
        Employees, on_delete=models.DO_NOTHING, related_name="task_assigned_to"
    )
    due_date_time = models.DateTimeField()
    status = models.CharField(
        max_length=15, choices=StatusChoices.choices, default=StatusChoices.PENDING
    )
