from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.response import Response
from .models import Profile
from .serializers import UserSerializer

class UserList(generics.ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        queryset = User.objects.all()

        hometown = self.request.query_params.get('hometown', None)
        age_min = self.request.query_params.get('age_min', None)
        age_max = self.request.query_params.get('age_max', None)
        gender = self.request.query_params.get('gender', None)

        if hometown is not None:
            queryset = queryset.filter(profile__hometown=hometown)
        if age_min is not None and age_max is not None:
            queryset = queryset.filter(profile__age__gte=age_min, profile__age__lte=age_max)
        if gender is not None:
            queryset = queryset.filter(profile__gender=gender)

        return queryset

class UserDetails(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
