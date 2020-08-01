from django.urls import path
from . import views

urlpatterns = [
    path("", view=views.ArtworkListView.as_view()),
    path("<int:pk>/", view=views.ArtworkDetailView.as_view()),
]
