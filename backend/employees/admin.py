from django.contrib import admin
from employees.models import Employees, TimeEntries

admin.site.register(Employees)
admin.site.register(TimeEntries)
