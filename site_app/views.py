from django.shortcuts import get_object_or_404
from rest_framework.views import Response
from rest_framework.decorators import api_view
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.http import HttpResponse
from .serializers import ArticleSerializer
from .models import Article, Category


@api_view(['GET'])
def main_page(request):
    return Response()


@api_view(['GET'])
def about(request):
    return Response()


def create_paginator(query, num_objects):
    """
    Function for making paginator with flexible number of objects per page.
    :param query: query that will be transformed into the page object
    :param num_objects: number of objects per page
    :return: django paginator object
    """

    try:
        paginator = Paginator(query, num_objects)
    except ValueError:  # Результат обробки винятку може бути змінений
        num_objects = 10
        paginator = Paginator(query, num_objects)
    except TypeError:  # Результат обробки винятку може бути змінений
        num_objects = 10
        paginator = Paginator(query, num_objects)

    return paginator


def get_page(paginator_obj, page):

    try:
        data = paginator_obj.page(page)
    except PageNotAnInteger:
        data = paginator_obj.page(1)
    except EmptyPage:
        data = paginator_obj.page(paginator_obj.num_pages)

    return data


@api_view(['GET'])
def financial_guide(request):
    if request.method == 'GET':
        articles = Article.objects.all().order_by('date_added')
        num_articles = request.GET.get('num_articles')
        page = request.GET.get('page')

        paginator = create_paginator(articles, num_articles)
        data = get_page(paginator, page)

        serializer = ArticleSerializer(data, context={'request': request}, many=True)
        nextPage = data.has_next()
        previousPage = data.has_previous()

        return Response({'data': serializer.data,
                         'count': paginator.count,
                         'numpages': paginator.num_pages,
                         'next_page_exists': nextPage,
                         'prev_page_exists': previousPage
                        }
                        )


@api_view(['GET'])
def category(request, category_slug=None):
    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        articles = Article.objects.filter(category=category).order_by('date_added')

        serializer = ArticleSerializer(articles, context={'request': request}, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def article(request, pk):
    if request.method == 'GET':
        article = get_object_or_404(Article, pk=pk)
        serializer = ArticleSerializer(article, context={'request': request})

    return Response(serializer.data)

