from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from .models import TODO

class TODOSerializer(ModelSerializer):
    class Meta:
        model = TODO
        fields = '__all__'