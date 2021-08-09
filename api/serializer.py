from rest_framework import serializers 
from .models import Workspaces , Topics , Links, Notes
from django.contrib.auth.models import User

class WorkspaceSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Workspaces
        fields = ('name', 'favourite', 'created_at') 

class UserSerializer(serializers.ModelSerializer):
     class Meta:
         model = User
         fields  = ('username', 'password', 'first_name', 'last_name', 'email')

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topics
        fields = ('name', 'index', 'workspace')

class LinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Links
        fields = ('name', 'url')

class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ('heading', 'notes', 'topic')


