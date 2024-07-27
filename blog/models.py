from django.db import models

from django.utils.timezone import now

class Blog(models.Model):
    title = models.CharField (max_length=200)
    content = models.TextField(blank=True)
    author = models.CharField (max_length=100)
    created_at = models.DateTimeField(default=now )

    def __str__(self):
        return self.title
    