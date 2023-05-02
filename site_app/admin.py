from django.contrib import admin
from .models import Article, EnglishArticle, Category, Tag

admin.site.register(Article)
admin.site.register(EnglishArticle)
admin.site.register(Category)
admin.site.register(Tag)
