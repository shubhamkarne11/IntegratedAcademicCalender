# Generated by Django 4.1.6 on 2023-03-20 10:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('CalendarHome', '0002_login'),
    ]

    operations = [
        migrations.RenameField(
            model_name='login',
            old_name='u_name',
            new_name='u_pwd',
        ),
    ]