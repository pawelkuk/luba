from rest_framework import viewsets

from . import serializers
from . import models


class ArtworkViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """

    queryset = models.Artwork.objects.all()
    serializer_class = serializers.ArtworkSerializer


class FormatViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """

    queryset = models.Format.objects.all()
    serializer_class = serializers.FormatSerializer


class TechniqueViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """

    queryset = models.Technique.objects.all()
    serializer_class = serializers.TechniqueSerializer


class MaterialViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """

    queryset = models.Material.objects.all()
    serializer_class = serializers.MaterialSerializer


class AuthorViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """

    queryset = models.Author.objects.all()
    serializer_class = serializers.AuthorSerializer


class ConcreteArtworkViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """

    queryset = models.ConcreteArtwork.objects.all()
    serializer_class = serializers.ConcreteArtworkSerializer


class ImageViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """

    queryset = models.Image.objects.all()
    serializer_class = serializers.ImageSerializer
