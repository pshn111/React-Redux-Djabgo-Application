from .models import Users
from rest_framework import viewsets, permissions
from .serializers import UsersSerializer

# user Viewset
class UsersViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = UsersSerializer

    def get_queryset(self):
        return self.request.user.users.all()

   
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
