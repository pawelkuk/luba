from rest_framework import serializers
from . import models


class ArtworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Artwork
        fields = ["title", "author", "description"]


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Author
        fields = ["name"]


class FormatSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Format
        fields = ["name", "description"]


class TechniqueSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Technique
        fields = ["name", "description"]


class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Material
        fields = ["name", "description"]


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Image
        fields = ["image", "is_main_image"]


class ConcreteArtworkSerializer(serializers.ModelSerializer):
    technique = TechniqueSerializer(read_only=True)
    format = FormatSerializer(read_only=True)
    material = MaterialSerializer(read_only=True)
    artwork = ArtworkSerializer(read_only=True)
    images = ImageSerializer(read_only=True, many=True)
    author = AuthorSerializer(read_only=True)

    class Meta:
        model = models.ConcreteArtwork
        fields = [
            "id",
            "creation_date",
            "price",
            "category",
            "artwork",
            "technique",
            "format",
            "material",
            "images",
            "author",
            "stock",
        ]
