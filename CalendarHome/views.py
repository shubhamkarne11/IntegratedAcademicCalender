from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.contrib import messages
from django.shortcuts import redirect
import re

from CalendarHome.models import university_activities, userAcc

# Create your views here.
def dispSignUp(request):
    if request.method == 'POST':
        email1 = request.POST.get('myEmail')
        pwd1 = request.POST.get('myPwd')
        subscribe = request.POST.get('subscribe')
        
        user = userAcc.objects.filter(u_email=email1).first()
        if user:
            messages.error(request, 'A user with this email already exists.')
        else:
            if not re.match(r"[^@]+@[^@]+\.[^@]+", email1):
                messages.error(request, 'Please enter a valid email address.')
            elif len(pwd1) < 6:
                messages.error(request, 'Password should have at least 6 characters.')
            else:
                last_user = userAcc.objects.last()
                if last_user:
                    user_id = last_user.u_id + 1
                else:
                    user_id = 100

                request.session['user_id'] = user_id
                request.session['user_email'] = email1

                
                info = userAcc(u_email=email1, u_pwd=pwd1, u_id=user_id, u_subscription=bool(subscribe))
                info.save()
                messages.success(request, 'User account created successfully.') 
                # return render(request, "home.html")
    
    return render(request, "signUp.html")

def dispLogin(request):
    if request.method == 'POST':
        email1 = request.POST.get('myEmail')
        pwd1 = request.POST.get('myPwd')
        
        user = userAcc.objects.filter(u_email=email1, u_pwd=pwd1).first()
        if user:
            # Set user authentication state
            request.session['user_id'] = user.u_id
            request.session["user_email"] = user.u_email
            return redirect('home/')  # Redirect to home page
        else:
            messages.error(request, 'Invalid email or password.')
    return render(request, 'login.html')
    
def dispProfile(request):
    # Get the user_id and user_email from the session
    user_id = request.session.get('user_id')
    user_email = request.session.get('user_email')

    # Check if the user is authenticated
    if not user_id:
        return redirect('login')

    # Get the user object from the database using the user_id
    user = userAcc.objects.get(u_email=user_email)

    # Pass the user_id, user_email, and user object to the template context
    profile_data = {'user_id': user_id, 'user_email': user_email, 'user': user}
    return render(request, 'profile.html', profile_data)

def dispLogout(request):
    # Delete the user_id and user_email from the session
    request.session.pop('user_id', None)
    request.session.pop('user_email', None)
    
    # Use Django's logout method to clear the session and log the user out
    logout(request)
    
    # Redirect the user to the login page
    return redirect('login')

def dispHome(request):
    return render(request, "home.html")

def getSessionStatus(request):
    print(request, "dispSession")
    user_id = request.session.get('user_id')
    user_email = request.session.get('user_email')
    print(user_id, user_email)
    if not user_id and not user_email:
        return redirect('login')

def dispAboutUs(request):
    return render(request, "aboutUs.html")

def dispJnu(request):
    return render(request, "jnu.html")

def dispIIS(request):
    # user_id = request.session.get('user_id')
    # user_email = request.session.get('user_email')
    # if not user_id:
    #     return redirect('login')
    return render(request, "IISBangalore.html")

def dispAVV(request):
    return render(request, "AVV.html")
def dispUniversity(request):
    return render(request, "university.html")
def dispJmiu(request):
    return render(request, "jmiu.html")

def dispJadavpur(request):
    return render(request, "jadavpur.html")

def dispVIT(request):
    return render(request, "VIT.html")

def dispBHU(request):
    return render(request, "BHU.html")

def dispDUpost(request):
    return render(request, "DUpost.html")

def dispDUunder(request):
    return render(request, "DUunder.html")

def dispJDPEngTech(request):
    return render(request, "JdpEng&Tech.html")

def dispJDPSci(request):
    return render(request, "JdpSci.html")

def dispJDPISLM(request):
    return render(request, "JdpISLM.html")

def dispUOH(request):
    return render(request, "UOH.html")

def dispAmity(request):
    return render(request, "Amity.html")

def dispBU(request):
    return render(request, "BU.html")

def dispPU(request):
    return render(request, "punjab.html")

def dispMysore(request):
    return render(request, "mysore.html")

def dispCU(request):
    return render(request, "CU.html")

def dispAU(request):
    return render(request, "AU.html")

def dispGNDU(request):
    return render(request, "GNDU.html")

def dispKashmir(request):
    return render(request, "kashmir.html")

def dispJammu(request):
    return render(request, "Jammu.html")

def dispPondicherry(request):
    return render(request, "pondicherry.html")

def dispTezpur(request):
    return render(request, "tezpur.html")

def dispGauhati(request):
    return render(request, "Gauhati.html")
def dispTermsAndConditions(request):
    return render(request, "termsAndConditions.html")

def dispFilter(request):
    user_id = request.session.get('user_id')
    user_email = request.session.get('user_email')
    if not user_id:
        return redirect('login')
    return render(request, "filter.html")


def dispChatbot(request):
    user_id = request.session.get('user_id')
    user_email = request.session.get('user_email')
    if not user_id:
        return redirect('login')
    return render(request, "chatbot.html")

def filter_by_date(request, date):
    user_id = request.session.get('user_id')
    user_email = request.session.get('user_email')
    if not user_id:
        return redirect('login')
    filtered_data = university_activities.objects.filter(date=date)
    data = list(filtered_data.values())
    if not data:
        message = "No Data Available for "+date
        return JsonResponse({"message": message})
    else:
        return JsonResponse(data, safe=False)
        