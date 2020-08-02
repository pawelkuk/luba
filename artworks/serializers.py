from rest_framework import serializers
from . import models


class ArtworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Artwork
        fields = ["title", "author", "description"]
