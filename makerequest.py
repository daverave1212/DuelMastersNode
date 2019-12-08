import requests
import json

url = 'http://localhost:5000/'

def print_response(res):
    print(res.status_code)
    print(str(res.text))

def get(link):
    res = requests.get(url + link)
    print_response(res)

def put(link, data):
    res = requests.put(url + link, json=data)
    print_response(res)

def post(link, data):
    res = requests.post(url + link, json=data)
    print_response(res)

def delete(link, data):
    res = requests.delete(url + link, json=data)
    print_response(res)
