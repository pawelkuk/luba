from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"concrete-artwork", views.ConcreteArtworkViewSet)
router.register(r"artwork", views.ArtworkViewSet)
router.register(r"author", views.AuthorViewSet)
router.register(r"material", views.MaterialViewSet)
router.register(r"format", views.FormatViewSet)
router.register(r"image", views.ImageViewSet)
router.register(r"technique", views.TechniqueViewSet)


urlpatterns = [path("", include(router.urls))]
