import yfinance as yf

def get_stock_data(ticker):
    stock = yf.Ticker(ticker)
    hist = stock.history(period="6mo")
    return hist.reset_index()[['Date', 'Close']].to_dict(orient='records')