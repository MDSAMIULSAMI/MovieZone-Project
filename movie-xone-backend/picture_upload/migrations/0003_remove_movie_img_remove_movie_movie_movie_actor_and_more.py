# Generated by Django 5.0.3 on 2024-04-26 11:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('picture_upload', '0002_movie_movie'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movie',
            name='img',
        ),
        migrations.RemoveField(
            model_name='movie',
            name='movie',
        ),
        migrations.AddField(
            model_name='movie',
            name='actor',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='movie',
            name='content_type',
            field=models.URLField(default=''),
        ),
        migrations.AddField(
            model_name='movie',
            name='country',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='movie',
            name='date_aired',
            field=models.DateField(default=None),
        ),
        migrations.AddField(
            model_name='movie',
            name='duration',
            field=models.CharField(default=None, max_length=20),
        ),
        migrations.AddField(
            model_name='movie',
            name='episode',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='movie',
            name='genres',
            field=models.CharField(choices=[('Action', 'Action'), ('Romance', 'Romance'), ('Horror', 'Horror'), ('Mystery', 'Mystery'), ('SciFi', 'SciFi'), ('Thriller', 'Thriller'), ('Comedy', 'Comedy')], default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='movie',
            name='info',
            field=models.TextField(default=None),
        ),
        migrations.AddField(
            model_name='movie',
            name='producer',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='movie',
            name='quality',
            field=models.URLField(default=None),
        ),
        migrations.AddField(
            model_name='movie',
            name='rating',
            field=models.DecimalField(decimal_places=2, default=None, max_digits=4),
        ),
        migrations.AddField(
            model_name='movie',
            name='status',
            field=models.CharField(choices=[('Incomplete', 'Incomplete'), ('Complete', 'Complete')], default=None, max_length=50),
        ),
        migrations.AddField(
            model_name='movie',
            name='studio',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='movie',
            name='thumbnail',
            field=models.ImageField(default=None, upload_to='file/thumbnails'),
        ),
        migrations.AddField(
            model_name='movie',
            name='watch_type',
            field=models.CharField(choices=[('TV Series', 'TV Series'), ('Web Series', 'Web Series'), ('Movie', 'Movie'), ('Animation', 'Animation')], default=None, max_length=20),
        ),
        migrations.AlterField(
            model_name='movie',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.CreateModel(
            name='Episode',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('episode_id', models.IntegerField()),
                ('episode_name', models.CharField(max_length=100)),
                ('video_url', models.FileField(upload_to='file/movies')),
                ('movie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='episodes', to='picture_upload.movie')),
            ],
        ),
    ]
