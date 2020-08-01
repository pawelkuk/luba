from django.db import models


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


class ConcreteArtwork(models.Model):
    creation_date = models.DateField()
    technique = models.ForeignKey(Technique, on_delete=models.SET_NULL, null=True)
    format = models.ForeignKey(Format, on_delete=models.SET_NULL, null=True)
    material = models.ForeignKey(Material, on_delete=models.SET_NULL, null=True)
    concrete_artwork = models.ForeignKey(Artwork, on_delete=models.CASCADE)
    price = models.IntegerField()
    CATEGORIES = [
        ("GRAPHIC", "Graphic"),
        ("POSTCARD", "Postcard"),
        ("POSTER", "Poster"),
        ("ZINE", "Zine"),
        ("OTHER", "Other"),
    ]
    category = models.CharField(max_length=10, choices=CATEGORIES, default="GRAPHIC",)

    def __str__(self):
        return self.concrete_artwork


class Image(models.Model):
    concrete_artwork = models.ForeignKey(
        ConcreteArtwork, on_delete=models.SET_NULL, null=True
    )
    image = models.ImageField(upload_to="images")
    is_main_image = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.concrete_artwork=} {self.is_main_image=}"
