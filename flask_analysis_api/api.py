from flask import Flask
from flask_restful import Api, Resource, reqparse
import pandas as pd

print('hello')

app = Flask(__name__)
api = Api(app)

# /users, path that stores the user data
users_path = './'
# /locations

class Users(Resource):
    def get(self):
        return {'data' : 'Hello World'}, 200 
        

class Locations(Resource):
    pass

# e.g. resource located at api.com/users
api.add_resource(Users, '/users')
api.add_resource(Locations, '/locations')

if __name__ == "__main__":
    app.run(debug=True)