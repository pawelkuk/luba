from artworks import models
import datetime
import random

author = models.Author()
author.name = "Karolina Lubaszko"
author.save()

images = []
for i in range(1, 15):
    img = models.Image()
    img.is_main_image = i % 2 == 0
    img.save("/Users/pawkuk/Pictures/test{i}.jpg")
    images.append(img)

techniques = [
    "oil pait",
    "sitodruk",
    "wycinanka",
    "spray",
    "kolarz",
    "druk cyfrowyyyyyy",
]
for t in techniques:
    tech = models.Technique()
    tech.name = t
    tech.description = "some description"
    tech.save()

materials = ["paper", "canvas", "photographic paper", "moleskine"]
for m in materials:
    material = models.Material()
    material.name = m
    material.description = "some description"
    material.save()

formats = ["A1", "A2", "A3", "A4", "A5", "A6"]
for f in formats:
    format_ = models.Format()
    format_.name = f
    format_.description = "some description"
    format_.save()

artworks = []
for i in range(1, 15):
    artwork = models.Artwork()
    artwork.title = f"Artwork Title {i}"
    artwork.author = author
    artwork.description = "some description"
    artwork.save()
    artworks.append(artwork)

for img, artwork in zip(images, artworks):
    ca = models.ConcreteArtwork()
    ca.creation_date = datetime.datetime.now()
    ca.concrete_artwork = artwork
    ca.material = material
    ca.format = format_
    ca.price = random.randint(100, 500)
    ca.technique = tech
    ca.save()
    ca.images.add(img)
    ca.save()
