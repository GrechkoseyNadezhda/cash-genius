from rest_framework import serializers
from .models import Article, EnglishArticle


class EnglishArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnglishArticle
        fields = ['title', 'content']


class ArticleSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    author = serializers.StringRelatedField()
    english_version = EnglishArticleSerializer(read_only=True)
    tags = serializers.StringRelatedField(many=True)

    class Meta:
        model = Article
        fields = ['pk', 'title', 'image', 'content', 'date_added', 'category',
                  'author', 'english_version', 'tags']
