from django.contrib import admin
from .models import userAcc, university_activities
# Register your models here.
admin.site.register(university_activities)
admin.site.register(userAcc)