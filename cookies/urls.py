from django.urls import path

from cookies.views import LoginView

urlpatterns = [path("login/", LoginView.as_view())]
