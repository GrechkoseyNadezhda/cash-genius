from django.urls import path
from . import views

urlpatterns = [
    path('', views.main_page, name='main_page'),
    path('financial_guide', views.financial_guide, name='fin_guide'),  # усі статті
    path('category/<slug:category_slug>', views.category, name='category'),  # статті певної категорії
    path('article/<int:pk>', views.article, name='article'),
]

