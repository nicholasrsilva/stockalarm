import pandas
from alpha_vantage.timeseries import TimeSeries
import sys
import random

from flask import Flask
from flask_restful import Resource, Api, reqparse
# import pandas as pd
import ast
app = Flask(__name__)
api = Api(app)
class Users(Resource):
    def get(self):
        ticker = "aapl"
        lines = open('keys').read().splitlines()
        keys = random.choice(lines)
        time = TimeSeries(key = keys, output_format ='pandas' )
        data = time.get_intraday(symbol=ticker, interval ='1min', outputsize = 'full')

        # data = pd.read_csv('users.csv')  # read CSV
        data = data.to_dict()  # convert dataframe to dictionary
        return {'data': data}, 200  # return data and 200 OK code
    pass

api.add_resource(Users, '/users')  # '/users' is our entry point


# print(ticker)
# print(data)


if __name__ == '__main__':
    app.run()  # run our Flask app