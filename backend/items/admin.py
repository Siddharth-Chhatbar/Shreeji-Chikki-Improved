from django.contrib import admin
from .models import Item, Client, OrderItem, Order, Inventory

# Register your models here.

admin.site.register(Item)
admin.site.register(Client)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Inventory)
