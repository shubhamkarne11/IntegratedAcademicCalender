"""MajorProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from CalendarHome import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("CalendarHome.urls")),
    path('home/', include("CalendarHome.urls")),
    path('university/', include("CalendarHome.urls")),
    path('Universities/IIS-Bangalore/', include("CalendarHome.urls")),
    path('Universities/Jawaharlal-Nehru-University/', include("CalendarHome.urls")),
    path('Universities/Jamia-Millia-Islamia-University/', include("CalendarHome.urls")),
    path('Universities/Jadavpur-University/', include("CalendarHome.urls")),
    path('Universities/Jadavpur-University/Engineering-&-Technology/', include("CalendarHome.urls")),
    path('Universities/Jadavpur-University/Science/', include("CalendarHome.urls")),
    path('Universities/Jadavpur-University/ISLM/', include("CalendarHome.urls")),
    path('Universities/VIT/', include("CalendarHome.urls")),
    path('Universities/BHU/', include("CalendarHome.urls")),
    path('Universities/BHU/', include("CalendarHome.urls")),
    path('Universities/DUpost/', include("CalendarHome.urls")),
    path('Universities/DUunder/', include("CalendarHome.urls")),
    path('Universities/University-Of-Hyderabad/', include("CalendarHome.urls")),
    path('Universities/Amity/', include("CalendarHome.urls")),
    path('Universities/Bharathiar-University/', include("CalendarHome.urls")),
    path('Universities/Panjab-University/', include("CalendarHome.urls")),
    path('Universities/Mysore-University/', include("CalendarHome.urls")),
    path('Universities/Chandigarh-University/', include("CalendarHome.urls")),
    path('Universities/Andhra-University/', include("CalendarHome.urls")),
    path('Universities/Guru-Nanak-Dev-University/', include("CalendarHome.urls")),
    path('Universities/University-Of-Kashmir/', include("CalendarHome.urls")),
    path('Universities/University-Of-Jammu/', include("CalendarHome.urls")),
    path('Universities/Pondicherry-University/', include("CalendarHome.urls")),
    path('Universities/Tezpur-University/', include("CalendarHome.urls")),
    path('Universities/Gauhati-University/', include("CalendarHome.urls")),
    path('http://127.0.0.1:8000/filter-by-date', include("CalendarHome.urls")),
    path('aboutUs/', include("CalendarHome.urls")),
    path('termsAndConditions/', include("CalendarHome.urls")),
    path('chatbot/', include("CalendarHome.urls")),
    path('profile/', include('CalendarHome.urls')),
    path('logout/', include("CalendarHome.urls")),
    path('login/', include('CalendarHome.urls')),
    path('', include('CalendarHome.urls')),
]
