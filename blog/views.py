from rest_framework import viewsets
from .serializer import BlogSerializer
from .models import Blog

# Create your views here.
class BlogView(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()
