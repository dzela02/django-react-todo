from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

@api_view(['GET'])

def getRoutes(request):
    routes = [{
        'Endpoints': '/todo/',
        'method': 'GET',
        'body': 'none',
        'description': 'Returns an array of TODOs'
    }, {
        'Endpoints': '/todo/id',
        'method': 'GET',
        'body': 'none',
        'description': 'Returns single TODO object'
    },{'Endpoints': '/todo/create',
        'method': 'POST',
        'body': {'body': ''},
        'description': 'Creates new TODO with data sent in post method'
    },{
       'Endpoints': '/todo/id/update',
        'method': 'PUT',
        'body': {'body': ''},
        'description': 'Updates existing todo with update field'
    },{
        'Endpoints': '/todo/id/delete',
        'method': 'DELETE',
        'body': 'none',
        'description': 'Delete existing TODO'
    }]
    return Response(routes)