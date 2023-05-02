from django.urls import path
from . import views

urlpatterns = [
    path('', views.main_page, name='main_page'),
    path('about/', views.main_page, name='about'),
    path('financial_guide/', views.main_page, name='fin_guide'),  # усі статті
    path('<slug:category>', views.main_page, name='category'),  # статті певної категорії
    path('article/<int:pk>', views.main_page, name='article'),
    path('article/', views.main_page, name='article_create'),  # форма щоб запостити статтю
]