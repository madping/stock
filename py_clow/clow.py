import yfinance as yf
import sys

ticker = sys.argv[1]
data = yf.Ticker(ticker)
history = data.history(period="max")
history.to_csv(f'history/{ticker}.csv', header=False)

"""
코스피 => ^KS11
코스닥 => ^KQ11
"""