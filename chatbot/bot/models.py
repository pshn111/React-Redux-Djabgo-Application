from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Users(models.Model):
    user_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    create_at = models.DateField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name="user_names", on_delete=models.CASCADE, null=True)