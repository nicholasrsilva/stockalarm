#!/usr/bin/python3
import pandas
from alpha_vantage.timeseries import TimeSeries
import sys
import random

ticker = str(sys.argv[1])

lines = open('keys').read().splitlines()
keys = random.choice(lines)
time = TimeSeries(key = keys, output_format ='pandas' )
data = time.get_intraday(symbol=ticker, interval ='1min', outputsize = 'full')

print(ticker)
print(data)