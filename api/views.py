from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions

# Create your views here.
class index(APIView):
    permission_classes = [permissions.AllowAny]
    def get(self, request,format=None):
        return Response(["test"])



