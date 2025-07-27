from django.db import models
from users.models import User
from datetime import timedelta


class Employees(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name="users")
    hire_date = models.DateTimeField()
    job_title = models.CharField(max_length=100)
    salary_per_hr = models.DecimalField(max_digits=20, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class TimeEntries(models.Model):
    class TypeChoices(models.TextChoices):
        REGULAR = "Regular"
        OVERTIME = "Overtime"
        SICK = "Sick"
        PAID_LEAVE = "Paid Leave"
        UNPAID_LEAVE = "Unpaid Leave"

    employee = models.ForeignKey(Employees, on_delete=models.DO_NOTHING)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    break_start_time = models.DateTimeField(null=True, blank=True)
    break_end_time = models.DateTimeField(null=True, blank=True)
    notes = models.CharField(max_length=300, null=True, blank=True)
    type = models.CharField(
        max_length=20, choices=TypeChoices.choices, default=TypeChoices.REGULAR
    )

    @property
    def total_hours(self):
        if self.start_time and self.end_time:
            work_duration = self.end_time - self.start_time
        else:
            return 0.0

        break_duration = timedelta(0)
        if self.break_start_time and self.break_end_time:
            break_duration = self.break_end_time - self.break_start_time

        actual_work_duration = work_duration - break_duration

        return actual_work_duration.total_seconds() / 3600

    def __str__(self):
        return f"Time Entry for {self.employee.user.get_full_name()} from {self.start_time.strftime('%Y-%m-%d %H:%M')}"
