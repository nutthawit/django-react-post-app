from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField(max_length=1000)
    author = models.ForeignKey('Author', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.title


class Author(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)

    def __str__(self):
        return '{0} {1}'.format(self.first_name, self.last_name)
