from django.contrib.auth.models import User
from django.db import models

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    hometown = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
