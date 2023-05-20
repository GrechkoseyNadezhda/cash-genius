"""
URL configuration for CashGenius project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.conf.urls.i18n import i18n_patterns
from django.conf.urls.static import static
from django.urls import path, include
from django.urls import re_path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic import TemplateView, RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('site_app.urls')),
    re_path(r'^favicon\.ico$', RedirectView.as_view(url='/static/favicon.ico')),
    re_path(r'^manifest\.json$', RedirectView.as_view(url='/static/manifest.json')),
    path("", TemplateView.as_view(template_name="index.html")),   # це додамо після зміни ендпоінтів
    # re_path(r".*", TemplateView.as_view(template_name="index.html")),
]

urlpatterns += staticfiles_urlpatterns()

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += i18n_patterns(
    path("i18n/", include("django.conf.urls.i18n")),
    # re_path(r".*", TemplateView.as_view(template_name="index.html")),
    prefix_default_language=False,
)
