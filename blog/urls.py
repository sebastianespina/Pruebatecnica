from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from blog import views


router = routers.DefaultRouter()
router.register(r'blog', views.BlogView, 'blog')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="Blog API"))
]