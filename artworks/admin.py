from django.contrib import admin
from . import models


admin.site.register(
    [
        models.ConcreteArtwork,
        models.Artwork,
        models.Author,
        models.Technique,
        models.Image,
        models.Material,
        models.Format,
    ]
)
