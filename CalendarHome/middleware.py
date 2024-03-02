from django.shortcuts import redirect
from django.urls import reverse

class LoginMiddleware:
    def __init__(self):
        pass
    def process_request(self, request):
        if not request.user.is_authenticated and request.path != reverse('login'):
            return redirect('login')
