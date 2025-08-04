from django.contrib import admin
from orders.models import OrderItems, SalesOrders, PurchaseOrderItems, PurchaseOrders

admin.site.register(OrderItems)
admin.site.register(SalesOrders)
admin.site.register(PurchaseOrderItems)
admin.site.register(PurchaseOrders)
