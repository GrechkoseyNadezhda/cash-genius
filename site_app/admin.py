from django.contrib import admin
from .models import Article, EnglishArticle, Category, Tag


class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}


admin.site.register(Article)
admin.site.register(EnglishArticle)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Tag)
