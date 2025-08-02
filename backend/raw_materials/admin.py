from django.contrib import admin
from raw_materials.models import RawMaterials, RawMaterialPriceHistory, BillOfMaterials

admin.site.register(RawMaterials)
admin.site.register(RawMaterialPriceHistory)
admin.site.register(BillOfMaterials)
