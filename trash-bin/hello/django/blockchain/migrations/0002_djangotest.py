# Generated by Django 3.2.9 on 2022-07-18 02:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blockchain', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DjangoTest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('binary', models.BinaryField(blank=True, null=True)),
                ('boolean', models.BooleanField(null=True)),
                ('char', models.CharField(blank=True, max_length=100, null=True)),
                ('date', models.DateField(blank=True, null=True)),
                ('dateTime', models.DateTimeField(blank=True, null=True)),
                ('decimal', models.DecimalField(blank=True, decimal_places=10, max_digits=50, null=True)),
                ('duration', models.DurationField(blank=True, null=True)),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('file', models.FileField(blank=True, null=True, upload_to='files/% Y/% m/% d/')),
                ('float', models.FloatField(blank=True, null=True)),
                ('integer', models.IntegerField(blank=True, null=True)),
                ('genericIPAddress', models.GenericIPAddressField(blank=True, null=True)),
                ('positiveInteger', models.PositiveIntegerField(blank=True, null=True)),
                ('positiveSmallInteger', models.PositiveSmallIntegerField(blank=True, null=True)),
                ('slug', models.SlugField(blank=True, null=True)),
                ('smallInteger', models.SmallIntegerField(blank=True, null=True)),
                ('text', models.TextField(blank=True, null=True)),
                ('time', models.TimeField(blank=True, null=True)),
                ('uRL', models.URLField(blank=True, null=True)),
                ('uUID', models.UUIDField(blank=True, null=True)),
            ],
        ),
    ]