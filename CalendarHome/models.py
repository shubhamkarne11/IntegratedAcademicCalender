from django.db import models

# Create your models here.
class university_activities(models.Model):
    date = models.DateField( max_length=20)
    end_date = models.DateField(max_length=20)
    university_name = models.CharField(max_length=200)
    university_activity = models.CharField(max_length=200)

    def _str_(self):
        return self.university_name

class userAcc(models.Model):
    u_email = models.EmailField(max_length=20)
    u_pwd = models.CharField(max_length=20)
    u_id = models.IntegerField(default=100)
    u_subscription = models.BooleanField(default=False)

    def __str__(self):
        return f"User ID:{self.u_id}"