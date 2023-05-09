from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=100)
    english_name = models.CharField(max_length=100)
    slug = models.SlugField()

    def __str__(self):
        return self.name


class EnglishArticle(models.Model):
    title = models.CharField(max_length=120, null=True, blank=True)
    content = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title


class Tag(models.Model):
    name = models.CharField(max_length=20)
    english_name = models.CharField(max_length=25)

    def __str__(self):
        return self.name


class Article(models.Model):
    title = models.CharField(max_length=120)
    image = models.ImageField(upload_to='images')
    content = models.TextField()
    date_added = models.DateField(auto_now_add=True)
    date_updated = models.DateField(auto_now=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    author = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    english_version = models.ForeignKey(EnglishArticle, on_delete=models.SET_NULL, null=True, blank=True)
    tags = models.ManyToManyField(Tag, blank=True)

    def __str__(self):
        return self.title
