from django.db import models
from django.utils import choices

# Create your models here.


class Item(models.Model):
    name = models.CharField(max_length=75)
    price = models.DecimalField(null=False, decimal_places=2, max_digits=15)
    quantity = models.IntegerField(null=False)
    box_per_carton = models.IntegerField(null=False)
    item_per_box = models.IntegerField(null=False)
    item_weight = models.FloatField(null=False)
    box_weight = models.FloatField(null=False)


class Client(models.Model):
    first_name = models.CharField(max_length=50, null=True)
    last_name = models.CharField(max_length=50, null=True)
    shop_name = models.CharField(max_length=75, blank=False, null=False)
    address = models.CharField(max_length=250, null=False)
    contact_number = models.CharField(max_length=15, null=False)
    is_supplier = models.BooleanField(default=False)


class Order(models.Model):
    shop_name = models.ForeignKey(Client, on_delete=models.CASCADE, null=False)
    date = models.DateTimeField(auto_now_add=True)
    STATUS = (
        ("Delayed", "Delayed"),
        ("On the Way", "On the Way"),
        ("Delivered", "Delivered"),
        ("Received", "Received"),
        ("Cancelled", "Cancelled"),
    )
    status = models.CharField(max_length=50, choices=STATUS, default="Received")
    items = models.ManyToManyField(Item, through="OrderItem")


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField(null=False)


class Inventory(models.Model):
    supplier = models.ForeignKey(Client, on_delete=models.CASCADE)
    name = models.CharField(max_length=75, null=False)
    quantity = models.FloatField(null=False)
    date = models.DateTimeField(auto_now_add=True)
    purchase_price = models.DecimalField(null=False, decimal_places=2, max_digits=15)
