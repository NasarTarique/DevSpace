from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Workspaces(models.Model):
    name = models.CharField(max_length=25)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    favourite = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Topics(models.Model):
    name = models.CharField(max_length=25)
    index = models.IntegerField()
    workspace = models.ForeignKey(Workspaces,on_delete=models.CASCADE)

class Links(models.Model):
    name = models.CharField(max_length=25)
    url  = models.CharField(max_length=250)
    workspace = models.ForeignKey(Workspaces,on_delete=models.CASCADE)
    index = models.IntegerField()
    Topic = models.IntegerField(default=0);

class Notes(models.Model):
    heading = models.CharField(max_length=250)
    notes = models.TextField()
    workspace = models.ForeignKey(Workspaces,on_delete=models.CASCADE)
    Topic = models.IntegerField(default=0);
