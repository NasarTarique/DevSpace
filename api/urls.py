from django.urls import path , include
# from .views import index, WorkspaceListViewset
from . import views
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView ,TokenRefreshView

router = DefaultRouter()

router.register(r'workspacelist',views.WorkspaceListViewset)
router.register(r'topics',views.TopicsListViewset)

urlpatterns = [
    path('register/',views.RegisterUser.as_view()),
    path('token/',TokenObtainPairView.as_view()),
    path('token/refresh',TokenRefreshView.as_view()),
    path('test/',views.TestViewset.as_view()),
    path('',include(router.urls))
]
