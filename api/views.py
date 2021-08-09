from django.shortcuts import render
from rest_framework import permissions, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

from . import models
from .serializer import WorkspaceSerializer , UserSerializer , TopicSerializer, LinksSerializer , NotesSerializer

class WorkspaceListViewset(viewsets.ModelViewSet):
    serializer_class = WorkspaceSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = models.Workspaces.objects.all()
    
class TestViewset(APIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
        user = request.user
        print(user.username)
        print(user.id)
        return Response(f"user  {user.username}")
    
class TopicsListViewset(viewsets.ModelViewSet):
    serializer_class = TopicSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = models.Topics.objects.all()
    def list(self, request):
        wid = int(request.GET.get("workspace", '-1'))
        if wid != -1:
            queryset = models.Topics.objects.get(workspace=wid)
            self.serializer  = TopicSerializer(queryset, many=True)
            return Response(self.serializer.data)


class RegisterUser(APIView):
    serializer_class = UserSerializer
    def post(self, request,format=None):
        username = request.POST["username"]
        password = request.POST["password"]
        firstname = request.POST["firstname"]
        lastname = request.POST["lastname"]
        emailid = request.POST["email"]
        user = User(username=username, password=make_password(password), first_name=firstname, last_name=lastname,email=emailid)
        user.save()
        return Response(f"User {username} Created")
