from django.shortcuts import render
from rest_framework.views import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def main_page(request):
    return Response()
