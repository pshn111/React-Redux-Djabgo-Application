from django.db import models

# Create your models here.
class User(models.Model):
    user_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    create_at = models.DateField(auto_now_add=True)