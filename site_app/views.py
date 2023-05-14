from django.shortcuts import get_object_or_404
from rest_framework.views import Response
from rest_framework.decorators import api_view
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from .serializers import ArticleSerializer
from .models import Article, Category


@api_view(['GET'])
def main_page(request):
    return Response()


@api_view(['GET'])
def about(request):
    return Response()


@api_view(['GET'])
def financial_guide(request):
    if request.method == 'GET':

        data = []
        nextPage = 1
        previousPage = 1
        articles = Article.objects.all()
        num_articles = str(request.GET.get('num_articles'))
        paginator = Paginator(articles, num_articles)
        page = request.GET.get('page')

        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = ArticleSerializer(data, context={'request': request}, many=True)
        nextPage = data.has_next()
        previousPage = data.has_previous()

        return Response({'data': serializer.data,
                         'count': paginator.count,
                         'numpages': paginator.num_pages,
                         'next_page_exists': nextPage,
                         'prev_page_exists': previousPage}
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

