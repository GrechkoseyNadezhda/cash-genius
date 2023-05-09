from django.urls import path
from . import views

urlpatterns = [
    path('', views.main_page, name='main_page'),
    path('about/', views.about, name='about'),
    path('financial_guide/', views.financial_guide, name='fin_guide'),  # усі статті
    path('<slug:category_slug>/', views.category, name='category'),  # статті певної категорії
    path('article/<int:pk>', views.article, name='article'),
]