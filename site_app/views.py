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
        paginator = Paginator(articles, 10)
        page = request.GET.get('page')

        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = ArticleSerializer(data, context={'request': request}, many=True)
        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()

        return Response({'data': serializer.data,
                         'count': paginator.count,
                         'numpages': paginator.num_pages,
                         'nextlink': f'/posts/?page={nextPage}',
                         'prevlink': f'/posts/?page={previousPage}'}
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

