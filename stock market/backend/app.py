from flask import Flask, jsonify
from stock_data import get_stock_data

app = Flask(__name__)

@app.route('/companies')
def companies():
    return jsonify(["RELIANCE.NS", "TCS.NS", "INFY.NS", "ICICIBANK.NS", "HDFCBANK.NS"])

@app.route('/stock/<ticker>')
def stock(ticker):
    return jsonify(get_stock_data(ticker))

if __name__ == '__main__':
    app.run(debug=True)