# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = "auth_group"


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey("AuthPermission", models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "auth_group_permissions"
        unique_together = (("group", "permission"),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey("DjangoContentType", models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = "auth_permission"
        unique_together = (("content_type", "codename"),)


class CustomersCustomers(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=200)
    shop_name = models.CharField(max_length=200)
    address = models.CharField(max_length=300)
    email = models.CharField(max_length=254, blank=True, null=True)
    phone_number = models.CharField(max_length=20)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = "customers_customers"


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey(
        "DjangoContentType", models.DO_NOTHING, blank=True, null=True
    )
    user = models.ForeignKey("UsersUser", models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "django_admin_log"


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = "django_content_type"
        unique_together = (("app_label", "model"),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = "django_migrations"


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = "django_session"


class EmployeesEmployees(models.Model):
    id = models.BigAutoField(primary_key=True)
    hire_date = models.DateTimeField()
    job_title = models.CharField(max_length=100)
    salary_per_hr = models.DecimalField(max_digits=20, decimal_places=2)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    user = models.ForeignKey("UsersUser", models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "employees_employees"


class EmployeesTimeentries(models.Model):
    id = models.BigAutoField(primary_key=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    break_start_time = models.DateTimeField(blank=True, null=True)
    break_end_time = models.DateTimeField(blank=True, null=True)
    notes = models.CharField(max_length=300, blank=True, null=True)
    type = models.CharField(max_length=20)
    employee = models.ForeignKey(EmployeesEmployees, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "employees_timeentries"


class InventoryInventory(models.Model):
    id = models.BigAutoField(primary_key=True)
    quantity = models.IntegerField()
    location = models.CharField(max_length=200)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    polymorphic_ctype = models.ForeignKey(
        DjangoContentType, models.DO_NOTHING, blank=True, null=True
    )

    class Meta:
        managed = False
        db_table = "inventory_inventory"


class InventoryProductinventory(models.Model):
    inventory_ptr = models.OneToOneField(
        InventoryInventory, models.DO_NOTHING, primary_key=True
    )
    product = models.ForeignKey("ProductsProducts", models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "inventory_productinventory"


class InventoryRawmaterialinventory(models.Model):
    inventory_ptr = models.OneToOneField(
        InventoryInventory, models.DO_NOTHING, primary_key=True
    )
    raw_material = models.ForeignKey("RawMaterialsRawmaterials", models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "inventory_rawmaterialinventory"


class OrdersOrderitems(models.Model):
    id = models.BigAutoField(primary_key=True)
    quantity = models.BigIntegerField()
    order_status = models.CharField(max_length=15)
    expected_shipping_date = models.DateTimeField()
    actual_shipping_date = models.DateTimeField(blank=True, null=True)
    product = models.ForeignKey("ProductsProducts", models.DO_NOTHING)
    order = models.ForeignKey("OrdersSalesorders", models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "orders_orderitems"


class OrdersPurchaseorderitems(models.Model):
    id = models.BigAutoField(primary_key=True)
    quantity = models.IntegerField()
    order_status = models.CharField(max_length=15)
    expected_shipping_date = models.DateTimeField()
    actual_shipping_date = models.DateTimeField(blank=True, null=True)
    product = models.ForeignKey("ProductsProducts", models.DO_NOTHING)
    raw_material = models.ForeignKey("RawMaterialsRawmaterials", models.DO_NOTHING)
    order = models.ForeignKey("OrdersPurchaseorders", models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "orders_purchaseorderitems"


class OrdersPurchaseorders(models.Model):
    order_id = models.UUIDField(primary_key=True)
    order_status = models.CharField(max_length=15)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    supplier = models.ForeignKey("SuppliersSuppliers", models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "orders_purchaseorders"


class OrdersSalesorders(models.Model):
    order_id = models.UUIDField(primary_key=True)
    order_status = models.CharField(max_length=15)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    customer = models.ForeignKey(CustomersCustomers, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "orders_salesorders"


class ProductsProductphotos(models.Model):
    id = models.BigAutoField(primary_key=True)
    photo_url = models.CharField(max_length=300)
    display_order = models.SmallIntegerField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    product = models.ForeignKey("ProductsProducts", models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "products_productphotos"


class ProductsProducts(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=200)
    price_per_unit_mrp = models.DecimalField(max_digits=10, decimal_places=2)
    price_per_unit_wholesale = models.DecimalField(max_digits=10, decimal_places=2)
    weight_in_grams = models.IntegerField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = "products_products"


class RawMaterialsBillofmaterials(models.Model):
    id = models.BigAutoField(primary_key=True)
    quantity_required = models.IntegerField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    product = models.ForeignKey(ProductsProducts, models.DO_NOTHING)
    raw_material = models.ForeignKey("RawMaterialsRawmaterials", models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "raw_materials_billofmaterials"


class RawMaterialsRawmaterialpricehistory(models.Model):
    id = models.BigAutoField(primary_key=True)
    price = models.DecimalField(max_digits=20, decimal_places=2)
    effective_date = models.DateTimeField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    raw_material = models.ForeignKey("RawMaterialsRawmaterials", models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "raw_materials_rawmaterialpricehistory"


class RawMaterialsRawmaterials(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    supplier = models.ForeignKey("SuppliersSuppliers", models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "raw_materials_rawmaterials"


class SilkProfile(models.Model):
    name = models.CharField(max_length=300)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField(blank=True, null=True)
    time_taken = models.FloatField(blank=True, null=True)
    file_path = models.CharField(max_length=300)
    line_num = models.IntegerField(blank=True, null=True)
    end_line_num = models.IntegerField(blank=True, null=True)
    func_name = models.CharField(max_length=300)
    exception_raised = models.BooleanField()
    dynamic = models.BooleanField()
    request = models.ForeignKey("SilkRequest", models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = "silk_profile"


class SilkProfileQueries(models.Model):
    id = models.BigAutoField(primary_key=True)
    profile = models.ForeignKey(SilkProfile, models.DO_NOTHING)
    sqlquery = models.ForeignKey("SilkSqlquery", models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "silk_profile_queries"
        unique_together = (("profile", "sqlquery"),)


class SilkRequest(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    path = models.CharField(max_length=190)
    query_params = models.TextField()
    raw_body = models.TextField()
    body = models.TextField()
    method = models.CharField(max_length=10)
    start_time = models.DateTimeField()
    view_name = models.CharField(max_length=190, blank=True, null=True)
    end_time = models.DateTimeField(blank=True, null=True)
    time_taken = models.FloatField(blank=True, null=True)
    encoded_headers = models.TextField()
    meta_time = models.FloatField(blank=True, null=True)
    meta_num_queries = models.IntegerField(blank=True, null=True)
    meta_time_spent_queries = models.FloatField(blank=True, null=True)
    pyprofile = models.TextField()
    num_sql_queries = models.IntegerField()
    prof_file = models.CharField(max_length=300)

    class Meta:
        managed = False
        db_table = "silk_request"


class SilkResponse(models.Model):
    id = models.CharField(primary_key=True, max_length=36)
    status_code = models.IntegerField()
    raw_body = models.TextField()
    body = models.TextField()
    encoded_headers = models.TextField()
    request = models.OneToOneField(SilkRequest, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "silk_response"


class SilkSqlquery(models.Model):
    query = models.TextField()
    start_time = models.DateTimeField(blank=True, null=True)
    end_time = models.DateTimeField(blank=True, null=True)
    time_taken = models.FloatField(blank=True, null=True)
    traceback = models.TextField()
    request = models.ForeignKey(SilkRequest, models.DO_NOTHING, blank=True, null=True)
    identifier = models.IntegerField()
    analysis = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = "silk_sqlquery"


class SuppliersSuppliers(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=300)
    phone_number = models.CharField(max_length=20)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = "suppliers_suppliers"


class TasksTasks(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    due_date_time = models.DateTimeField()
    status = models.CharField(max_length=15)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    assigned_by = models.ForeignKey(EmployeesEmployees, models.DO_NOTHING)
    assigned_to = models.ForeignKey(
        EmployeesEmployees, models.DO_NOTHING, related_name="taskstasks_assigned_to_set"
    )

    class Meta:
        managed = False
        db_table = "tasks_tasks"


class UsersUser(models.Model):
    id = models.BigAutoField(primary_key=True)
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = "users_user"


class UsersUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(UsersUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "users_user_groups"
        unique_together = (("user", "group"),)


class UsersUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(UsersUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = "users_user_user_permissions"
        unique_together = (("user", "permission"),)
