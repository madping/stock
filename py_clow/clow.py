import yfinance as yf
import sys
from datetime import datetime
from pandas_datareader import data as pdr

ticker = sys.argv[1]
tdata = yf.Ticker(ticker)
#history = tdata.history(period="max")
history = tdata.history(start='2020-11-01', end='2020-12-01')
history.to_csv(f'history/{ticker}.csv', header=True)
"""
start_date = datetime(2020, 11, 1)
end_date = datetime(2020, 11, 30)
df = pdr.get_data_yahoo(ticker, start_date, end_date)
df.to_csv(f'history/{ticker}.csv', header=False)

"""
"""
코스피 => ^KS11
코스닥 => ^KQ11
"""