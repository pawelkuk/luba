from rest_framework import viewsets

from . import serializers
from . import models


class ArtworkViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """

    queryset = models.Artwork.objects.all()
    serializer_class = serializers.ArtworkSerializer
