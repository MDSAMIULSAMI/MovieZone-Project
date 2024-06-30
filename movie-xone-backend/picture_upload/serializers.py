from rest_framework import serializers
from .models import Movie, Episode

class EpisodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Episode
        fields =  '__all__'#('episode_id', 'episode_name', 'video_url')

class MovieSerializer(serializers.ModelSerializer):
    episodes = EpisodeSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = '__all__'

# class All_Data(serializers.Serializer):
#     episodes = EpisodeSerializer(many=True, read_only=True)

#     def to_representation(self, instance):
#         movies = Movie.objects.all()  # Retrieve all movies
#         movie_serializer = MovieSerializer(movies, many=True)  # Serialize movies
#         return {
#             'movies': movie_serializer.data,
#             'episodes': self.fields['episodes'].to_representation(Episode.objects.all())
#         }
