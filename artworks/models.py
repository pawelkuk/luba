from django.db import models
import uuid


class Format(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.name


class Technique(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.name


class Material(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.name


class Author(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Artwork(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.SET_NULL, null=True)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.title


class Image(models.Model):
    image = models.ImageField(upload_to="images")
    is_main_image = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.pk} {self.image.name} {self.is_main_image}"


class ConcreteArtwork(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    creation_date = models.DateField()
    technique = models.ForeignKey(Technique, on_delete=models.SET_NULL, null=True)
    format = models.ForeignKey(Format, on_delete=models.SET_NULL, null=True)
    material = models.ForeignKey(Material, on_delete=models.SET_NULL, null=True)
    concrete_artwork = models.ForeignKey(Artwork, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    CATEGORIES = [
        ("GRAPHIC", "Graphic"),
        ("POSTCARD", "Postcard"),
        ("POSTER", "Poster"),
        ("ZINE", "Zine"),
        ("OTHER", "Other"),
    ]
    category = models.CharField(max_length=10, choices=CATEGORIES, default="GRAPHIC")
    images = models.ManyToManyField(Image, related_name="image_list", blank=True)
    author = models.ForeignKey(Author, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.concrete_artwork.title
