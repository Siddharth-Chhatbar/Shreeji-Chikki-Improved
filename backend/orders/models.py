import uuid
from django.db import models
from customers.models import Customers
from raw_materials.models import RawMaterials
from suppliers.models import Suppliers
from products.models import Products


class SalesOrders(models.Model):
    class StatusChoices(models.TextChoices):
        PENDING = "Pending"
        SCHEDULED = "Scheduled"
        DELIEVERED = "Delievered"
        CANCELLED = "Cancelled"

    order_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    customer = models.ForeignKey(
        to=Customers, on_delete=models.DO_NOTHING, related_name="customer"
    )
    # order_amount = models.DecimalField(max_digits=20, decimal_places=2)
    order_status = models.CharField(
        max_length=15, choices=StatusChoices.choices, default=StatusChoices.PENDING
    )
    # products = models.ManyToManyField(Products, through="OrderItems", related_name="orders")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Order {self.order_id} by {self.customer.name}"


class OrderItems(models.Model):
    class StatusChoices(models.TextChoices):
        PENDING = "Pending"
        SCHEDULED = "Scheduled"
        DELIEVERED = "Delivered"
        CANCELLED = "Cancelled"

    order = models.ForeignKey(
        SalesOrders, on_delete=models.DO_NOTHING, related_name="items"
    )
    product = models.ForeignKey(
        Products, on_delete=models.DO_NOTHING, related_name="product"
    )
    quantity = models.PositiveBigIntegerField()
    order_status = models.CharField(
        max_length=15, choices=StatusChoices.choices, default=StatusChoices.PENDING
    )
    expected_shipping_date = models.DateTimeField()
    actual_shipping_date = models.DateTimeField()

    @property
    def item_subtotal(self):
        if self.product is not None:
            return self.product.price_per_unit_mrp * self.quantity
        return 0


class PurchaseOrders(models.Model):
    class StatusChoices(models.TextChoices):
        PENDING = "Pending"
        SCHEDULED = "Scheduled"
        DELIEVERED = "Delievered"
        CANCELLED = "Cancelled"

    order_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    supplier = models.ForeignKey(Suppliers, on_delete=models.DO_NOTHING)
    # order_amount = models.DecimalField(max_digits=20, decimal_places=2)
    order_status = models.CharField(
        max_length=15, choices=StatusChoices.choices, default=StatusChoices.PENDING
    )
    # products = models.ManyToManyField(Products, through="OrderItems", related_name="orders")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class PurchaseOrderItems(models.Model):
    class StatusChoices(models.TextChoices):
        PENDING = "Pending"
        SCHEDULED = "Scheduled"
        DELIEVERED = "Delievered"
        CANCELLED = "Cancelled"

    order = models.ForeignKey(
        PurchaseOrders, on_delete=models.DO_NOTHING, related_name="items"
    )
    raw_material = models.ForeignKey(
        RawMaterials, on_delete=models.DO_NOTHING, related_name="raw_materials"
    )
    product = models.ForeignKey(Products, on_delete=models.DO_NOTHING)
    quantity = models.PositiveIntegerField()
    order_status = models.CharField(
        max_length=15, choices=StatusChoices.choices, default=StatusChoices.PENDING
    )
    expexted_shipping_date = models.DateTimeField()
    actual_shipping_date = models.DateTimeField()

    @property
    def item_subtotal(self):
        pass
        return self.product.price_per_unit_wholesale * self.quantity
