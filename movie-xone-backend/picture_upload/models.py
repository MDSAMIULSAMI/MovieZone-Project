from django.db import models

class Movie(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    info = models.TextField(default=None)
    quality = models.URLField(default=None)
    Choose_Watch_Type=(
        ("TV Series","TV Series"),
        ("Web Series","Web Series"),
        ("Movie","Movie"),
        ("Animation","Animation"))
    watch_type = models.CharField(max_length=20, choices=Choose_Watch_Type ,default=None)
    content_type = models.URLField(default="")
    country = models.CharField(max_length=100, default=None)
    Status_Option = (
        ("Incomplete","Incomplete"), 
         ("Complete","Complete"))
    status = models.CharField(max_length=50, default=None, choices=Status_Option)
    duration = models.CharField(max_length=20,  default=None)
    date_aired = models.DateField( default=None)
    Choose_Genre = (
        ("Action","Action"),
        ("Romance","Romance"),
        ("Horror","Horror"),
        ("Mystery","Mystery"),
        ("SciFi","SciFi"),
        ("Thriller","Thriller"),
        ("Comedy","Comedy"))
    genres = models.CharField(max_length=100, default=None,  choices=Choose_Genre)
    rating = models.DecimalField(max_digits=4, decimal_places=2, default=None)
    episode = models.IntegerField(default=1)
    studio = models.CharField(max_length=100, default=None)
    producer = models.CharField(max_length=100, default=None)
    actor = models.CharField(max_length=100, default=None)
    thumbnail = models.ImageField(default=None, upload_to="file/thumbnails")

    def __str__(self):
        return self.name

class Episode(models.Model):
    movie = models.ForeignKey(Movie, related_name='episodes', on_delete=models.CASCADE)
    episode_id = models.IntegerField()
    episode_name = models.CharField(max_length=100)
    video_url = models.FileField(upload_to="file/movies")

    def __str__(self):
        return self.episode_name
