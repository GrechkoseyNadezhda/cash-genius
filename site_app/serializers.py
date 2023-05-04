from rest_framework import serializers
from .models import Article


class ArticleSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    author = serializers.StringRelatedField()
    english_version = serializers.StringRelatedField()
    tags = serializers.StringRelatedField(many=True)

    class Meta:
        model = Article
        fields = ['pk', 'title', 'image', 'content', 'date_added', 'category',
                  'author', 'english_version', 'tags']
