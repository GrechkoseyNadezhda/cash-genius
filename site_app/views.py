from django.shortcuts import render
from rest_framework.views import Response
from rest_framework.decorators import api_view

from .serializers import ArticleSerializer
from .models import Article


@api_view(['GET'])
def main_page(request):
    return Response()


@api_view(['GET'])
def about(request):
    return Response()


@api_view(['GET'])
def financial_guide(request):
    if request.method == 'GET':
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, context={'request': request}, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def category(request):
    return Response()


@api_view(['GET'])
def article(request, pk):
    return Response()


@api_view(['GET', 'POST'])
def article_create(request):
    return Response()

