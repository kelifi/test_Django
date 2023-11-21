from django.urls import path

from .views import UserList, UserDetails

urlpatterns = [
    path('users/', UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetails.as_view(), name='user-details'),
]
<<<<<<< HEAD


def afif(name):
    return name


def somme(a, b):
    return a + b

=======
>>>>>>> parent of 854dbba (add affiche function)
