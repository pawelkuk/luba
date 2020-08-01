from django.views.generic import ListView, DetailView
from . import models


class ArtworkDetailView(DetailView):
    model = models.Artwork


class ArtworkListView(ListView):
    model = models.Artwork
