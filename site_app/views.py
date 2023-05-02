from django.shortcuts import render
from rest_framework.views import Response
from rest_framework.decorators import api_view


@api_view(['GET'])
def main_page(request):
    return Response()


@api_view(['GET'])
def about(request):
    return Response()


@api_view(['GET'])
def financial_guide(request):
    return Response()


@api_view(['GET'])
def category(request):
    return Response()


@api_view(['GET'])
def article(request, pk):
    return Response()


@api_view(['GET', 'POST'])
def article_create(request):
    return Response()

