from django.http import JsonResponse
from .models import Movie
from .serializers import MovieSerializer #,All_Data
from rest_framework import viewsets

# Create your views here.
# def api_home(request):
#     movies = Movie.objects.all()
#     movie_data = [{'name': movie.name, 'genres': movie.genres} for movie in movies]
#     return JsonResponse({'movies': movie_data})

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer