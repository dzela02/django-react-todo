from django.db import models
from django.db.models.fields import CharField

# Create your models here.


class TODO(models.Model):
    body = models.TextField(CharField,max_length=50)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.body[0:50]

