from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2

app = Flask(__name__)

CORS(app)

#Connect to database
def connect_to_db():
    return psycopg2.connect(
        host="localhost",
        database="Stock_info",
        user="postgres",
        password="Randombanan2004!!"
    )

#Stock data
@app.route('/stock-data', methods=['GET'])
def get_stock_data():
    tickers = request.args.get('tickers')
    if tickers is None:
        return jsonify({"error": "Missing 'tickers' parameter"}), 400
    
    tickers = tickers.split(',')
    conn = connect_to_db()
    cursor = conn.cursor()
    
    cursor.execute(
        "SELECT open_price, high_price, low_price, close_price, volume, latest_date, ticker FROM public.stock_prices WHERE ticker = ANY(%s)", 
        (tickers,)
    )
    data = cursor.fetchall()
    conn.close()
    
    stock_prices = [
        {
            "open_price": float(row[0]), 
            "high_price": float(row[1]),  
            "low_price": float(row[2]),   
            "close_price": float(row[3]), 
            "volume": float(row[4]),      
            "latest_date": row[5].strftime("%Y-%m-%d"),  
            "ticker": str(row[6])
        }
        for row in data
    ]
 
    return jsonify(stock_prices)

#News Data
@app.route('/news-data', methods=['GET'])
def get_news_data():
    conn = connect_to_db()
    cursor = conn.cursor()
    
    cursor.execute(
        "SELECT title, url, time_published, summary, banner_image, source, category_within_source, source_domain, overall_sentiment_score, overall_sentiment_label FROM public.stock_news"
    )
    data = cursor.fetchall()
    conn.close()

    news_data = [
        {
            "title": str(row[0]),
            "url": str(row[1]),
            "time_published": str(row[2]),
            "summary": str(row[3]),
            "banner_image": str(row[4]),
            "source": str(row[5]),
            "category_within_source": str(row[6]),
            "source_domain": str(row[7]),
            "overall_sentiment_score": float(row[8]),
            "overall_sentiment_label": str(row[9])
        }
        for row in data
    ]

    return jsonify(news_data)

#Annual earnings data
@app.route('/annual-earnings-data', methods=['GET'])
def get_annual_earnings_data():
    conn = connect_to_db()
    cursor = conn.cursor()
    
    cursor.execute(
        "SELECT ticker, fiscal_date_ending, reported_eps FROM public.annual_earnings"
    )
    data = cursor.fetchall()
    conn.close()

    annual_earnings_data = [
        {
            "ticker": str(row[0]),
            "fiscal_date_ending": str(row[1]),
            "reported_eps": float(row[2])
        }
        for row in data
    ]

    return jsonify(annual_earnings_data)

#Quarterly earnings data
@app.route('/quarterly-earnings/<ticker>', methods=['GET'])
def get_quarterly_earnings(ticker):
    # Mappa tickern till motsvarande tabellnamn i din databas
    valid_tickers = {
        "aapl": "quarterly_earnings_aapl",
        "amzn": "quarterly_earnings_amzn",
        "googl": "quarterly_earnings_googl",
        "msft": "quarterly_earnings_msft",
        "ibm": "quarterly_earnings_ibm",
        "nvda": "quarterly_earnings_nvda",
        "tsla": "quarterly_earnings_tsla",
    }

    # Validera tickern
    table_name = valid_tickers.get(ticker.lower())
    if not table_name:
        return jsonify({"error": "Invalid ticker symbol"}), 404

    # Skapa en databasanslutning och hämta data
    conn = connect_to_db()
    cursor = conn.cursor()

    query = f"""
        SELECT fiscal_date_ending, reported_date, reported_eps, 
               estimated_eps, surprise, surprise_percentage, report_time 
        FROM public.{table_name}
    """
    cursor.execute(query)
    data = cursor.fetchall()
    conn.close()

    # Formatera resultatet till JSON
    quarterly_earnings = [
        {
            "fiscal_date_ending": str(row[0]),
            "reported_date": str(row[1]),
            "reported_eps": float(row[2]) if row[2] is not None else None,
            "estimated_eps": float(row[3]) if row[3] is not None else None,
            "surprise": float(row[4]) if row[4] is not None else None,
            "surprise_percentage": float(row[5]) if row[5] is not None else None,
            "report_time": str(row[6]),
        }
        for row in data
    ]

    return jsonify(quarterly_earnings)
if __name__ == '__main__':
    app.run(debug=True)




    
   



    
