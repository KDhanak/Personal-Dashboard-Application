from rest_framework import serializers
from .models import Account

# Serializer for the Account model


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'  # Serialize all fields in the Account model

# Serializer for the Todoist Project model


class ProjectSerializer(serializers.Serializer):
    # Define fields for the Project serializer
    id = serializers.CharField()
    name = serializers.CharField()
    comment_count = serializers.IntegerField()
    order = serializers.IntegerField()
    color = serializers.CharField()
    is_shared = serializers.BooleanField()
    is_favorite = serializers.BooleanField()
    is_inbox_project = serializers.BooleanField()
    is_team_inbox = serializers.BooleanField()
    view_style = serializers.CharField()
    url = serializers.URLField()
    # Allow null values for the parent_id
    parent_id = serializers.CharField(allow_null=True, required=False)

    class Meta:
        fields = '__all__'  # Serialize all defined fields in the Project serializer

# Serializer for the Todoist Task model


class TaskSerializer(serializers.Serializer):
    # Define fields for the Task serializer
    id = serializers.CharField()
    content = serializers.CharField()
    comment_count = serializers.IntegerField()
    is_completed = serializers.BooleanField()
    created_at = serializers.DateTimeField()
    creator_id = serializers.CharField()
    description = serializers.CharField()
    # Allow null values for the due date
    due = serializers.DateTimeField(allow_null=True)
    labels = serializers.ListField()
    order = serializers.IntegerField()
    # Allow null values for the parent_id
    parent_id = serializers.CharField(allow_null=True)
    priority = serializers.IntegerField()
    project_id = serializers.CharField()
    section_id = serializers.CharField()
    url = serializers.URLField()
    # Allow null values for the sync_id
    sync_id = serializers.CharField(allow_null=True)
