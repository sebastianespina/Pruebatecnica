from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        #fields = ('id' 'title', 'content', 'author', 'crated_at')
        fields = '__all__'