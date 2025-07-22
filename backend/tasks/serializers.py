from rest_framework import serializers
from tasks.models import Tasks


class TaskSerializer(serializers.ModelSerializer):
    assigned_to_name = serializers.SerializerMethodField()
    assigned_by_name = serializers.SerializerMethodField()

    class Meta:
        model = Tasks
        fields = [
            "id",
            "name",
            "description",
            "assigned_to",
            "assigned_to_name",
            "assigned_by",
            "assigned_by_name",
            "due_date",
            "status",
            "created_at",
            "updated_at",
        ]

    def get_assigned_to_name(self, obj):
        return obj.assigned_to.user.get_full_name() if obj.assigned_to else None

    def get_assigned_by_name(self, obj):
        return obj.assigned_by.user.get_full_name() if obj.assigned_by else None
