from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
from datetime import datetime

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
@app.route('/quarterly-earnings-aapl', methods=['GET'])
def get_quarterly_earnings_aapl():
    conn = connect_to_db()
    cursor = conn.cursor()
    
    cursor.execute(
        "SELECT fiscal_date_ending, reported_date, reported_eps, estimated_eps, surprise, surprise_percentage, report_time FROM public.quarterly_earnings_aapl"
    )
    data = cursor.fetchall()
    conn.close()

    quarterly_earnings_aapl = [
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

    return jsonify(quarterly_earnings_aapl)


@app.route('/quarterly-earnings-amzn', methods=['GET'])
def get_quarterly_earnings_amzn():
    conn = connect_to_db()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT fiscal_date_ending, reported_date, reported_eps, estimated_eps, surprise, surprise_percentage, report_time FROM public.quarterly_earnings_amzn"
    )
    data = cursor.fetchall()
    conn.close()

    quarterly_earnings_amzn = [
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

    return jsonify(quarterly_earnings_amzn)

@app.route('/quarterly-earnings-googl', methods=['GET'])
def get_quarterly_earnings_googl():
    conn = connect_to_db()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT fiscal_date_ending, reported_date, reported_eps, estimated_eps, surprise, surprise_percentage, report_time FROM public.quarterly_earnings_googl"
    )
    data = cursor.fetchall()
    conn.close()

    quarterly_earnings_googl = [
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

    return jsonify(quarterly_earnings_googl)

@app.route('/quarterly-earnings-msft', methods=['GET'])
def get_quarterly_earnings_msft():
    conn = connect_to_db()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT fiscal_date_ending, reported_date, reported_eps, estimated_eps, surprise, surprise_percentage, report_time FROM public.quarterly_earnings_msft"
    )
    data = cursor.fetchall()
    conn.close()

    quarterly_earnings_msft = [
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

    return jsonify(quarterly_earnings_msft)

@app.route('/quarterly-earnings-ibm', methods=['GET'])
def get_quarterly_earnings_ibm():
    conn = connect_to_db()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT fiscal_date_ending, reported_date, reported_eps, estimated_eps, surprise, surprise_percentage, report_time FROM public.quarterly_earnings_ibm"
    )
    data = cursor.fetchall()
    conn.close()

    quarterly_earnings_ibm = [
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

    return jsonify(quarterly_earnings_ibm)

@app.route('/quarterly-earnings-nvda', methods=['GET'])
def get_quarterly_earnings_nvda():
    conn = connect_to_db()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT fiscal_date_ending, reported_date, reported_eps, estimated_eps, surprise, surprise_percentage, report_time FROM public.quarterly_earnings_nvda"
    )
    data = cursor.fetchall()
    conn.close()

    quarterly_earnings_nvda = [
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

    return jsonify(quarterly_earnings_nvda)

@app.route('/quarterly-earnings-tsla', methods=['GET'])
def get_quarterly_earnings_tsla():
    conn = connect_to_db()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT fiscal_date_ending, reported_date, reported_eps, estimated_eps, surprise, surprise_percentage, report_time FROM public.quarterly_earnings_tsla"
    )
    data = cursor.fetchall()
    conn.close()

    quarterly_earnings_tsla = [
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

    return jsonify(quarterly_earnings_tsla)

@app.route('/company-overview', methods=['GET'])
def get_company_overview():
    conn = connect_to_db()
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT symbol, asset_type, name, description, cik, exchange, currency, country, sector, industry,
               adress, official_site, fiscal_year_end, latest_quarter, market_capitalization, ebitda, 
               pe_ratio, peg_ratio, book_value, dividend_per_share, dividend_yield, eps, revenue_per_share_ttm, 
               profit_margin, operating_margin_ttm, return_on_assets_ttm, return_on_equity_ttm, revenue_ttm, 
               gross_profit_ttm, diluted_eps_ttm, quarterly_earnings_growth_yoy, quarterly_revenue_growth_yoy,
               analyst_target_price, analyst_rating_strong_buy, analyst_rating_buy, analyst_rating_hold, 
               analyst_rating_sell, analyst_rating_strong_sell, trailing_pe, forward_pe, price_to_sales_ratio_ttm, 
               price_to_book_ratio, ev_to_revenue, ev_to_ebitda, beta, week_52_high, week_52_low, 
               moving_average_50_day, moving_average_200_day, shares_outstanding, dividend_date, ex_dividend_date
        FROM company_overview
        """
    )
    data = cursor.fetchall()
    conn.close()

    company_overview = [
        {
            "symbol": str(row[0]),
            "asset_type": str(row[1]),
            "name": str(row[2]),
            "description": str(row[3]),
            "cik": str(row[4]),
            "exchange": str(row[5]),
            "currency": str(row[6]),
            "country": str(row[7]),
            "sector": str(row[8]),
            "industry": str(row[9]),
            "adress": str(row[10]),
            "official_site": str(row[11]),
            "fiscal_year_end": str(row[12]),
            "latest_quarter": row[13].strftime("%Y-%m-%d") if row[13] else None,  
            "market_capitalization": float(row[14]) if row[14] is not None else None,
            "ebitda": float(row[15]) if row[15] is not None else None,
            "pe_ratio": float(row[16]) if row[16] is not None else None,
            "peg_ratio": float(row[17]) if row[17] is not None else None,
            "book_value": float(row[18]) if row[18] is not None else None,
            "dividend_per_share": float(row[19]) if row[19] is not None else None,
            "dividend_yield": float(row[20]) if row[20] is not None else None,
            "eps": float(row[21]) if row[21] is not None else None,
            "revenue_per_share_ttm": float(row[22]) if row[22] is not None else None,
            "profit_margin": float(row[23]) if row[23] is not None else None,
            "operating_margin_ttm": float(row[24]) if row[24] is not None else None,
            "return_on_assets_ttm": float(row[25]) if row[25] is not None else None,
            "return_on_equity_ttm": float(row[26]) if row[26] is not None else None,
            "revenue_ttm": float(row[27]) if row[27] is not None else None,
            "gross_profit_ttm": float(row[28]) if row[28] is not None else None,
            "diluted_eps_ttm": float(row[29]) if row[29] is not None else None,
            "quarterly_earnings_growth_yoy": float(row[30]) if row[30] is not None else None,
            "quarterly_revenue_growth_yoy": float(row[31]) if row[31] is not None else None,
            "analyst_target_price": float(row[32]) if row[32] is not None else None,
            "analyst_rating_strong_buy": str(row[33]),
            "analyst_rating_buy": str(row[34]),
            "analyst_rating_hold": str(row[35]),
            "analyst_rating_sell": str(row[36]),
            "analyst_rating_strong_sell": str(row[37]),
            "trailing_pe": float(row[38]) if row[38] is not None else None,
            "forward_pe": float(row[39]) if row[39] is not None else None,
            "price_to_sales_ratio_ttm": float(row[40]) if row[40] is not None else None,
            "price_to_book_ratio": float(row[41]) if row[41] is not None else None,
            "ev_to_revenue": float(row[42]) if row[42] is not None else None,
            "ev_to_ebitda": float(row[43]) if row[43] is not None else None,
            "beta": float(row[44]) if row[44] is not None else None,
            "week_52_high": float(row[45]) if row[45] is not None else None,
            "week_52_low": float(row[46]) if row[46] is not None else None,
            "moving_average_50_day": float(row[47]) if row[47] is not None else None,
            "moving_average_200_day": float(row[48]) if row[48] is not None else None,
            "shares_outstanding": float(row[49]) if row[49] is not None else None,
            "dividend_date": str(row[50]) if row[50] else None,
            "ex_dividend_date": str(row[51]) if row[51] else None
        }
        for row in data
    ]

    return jsonify(company_overview)

@app.route('/funds', methods=['GET'])
def get_funds():
    conn = connect_to_db()
    cursor = conn.cursor()
    
    # Main get and joins for funds
    cursor.execute("""
        SELECT 
            f.fund_id,
            f.fund_symbol,
            f.net_assets,
            f.net_expense_ratio,
            f.portfolio_turnover,
            f.dividend_yield,
            f.inception_date,
            f.leveraged,
            f.domestic_equities,
            f.foreign_equities,
            f.bond,
            f.cash,
            f.other,
            s.sector_id,
            s.sector,
            s.weight as sector_weight,
            h.holding_id,
            h.stock_symbol,
            h.stock_name,
            h.weight as holding_weight
        FROM funds f
        LEFT JOIN sectors s ON f.fund_id = s.fund_id
        LEFT JOIN holdings h ON f.fund_id = h.fund_id
        ORDER BY f.fund_id, s.sector_id, h.holding_id
    """)
    
    rows = cursor.fetchall()
    conn.close()
    
    # Structure for nested dictionary
    funds_dict = {}
    
    for row in rows:
        fund_id = row[0]
        
        
        if fund_id not in funds_dict:
            funds_dict[fund_id] = {
                "fund_id": row[0],
                "fund_symbol": row[1],
                "net_assets": row[2],
                "net_expense_ratio": row[3],
                "portfolio_turnover": row[4],
                "dividend_yield": row[5],
                "inception_date": row[6].isoformat() if row[6] else None,  
                "leveraged": row[7],
                "domestic_equities": row[8],
                "foreign_equities": row[9],
                "bond": row[10],
                "cash": row[11],
                "other": row[12],
                "sectors": [],
                "holdings": []
            }
        
        if row[13]:  # sector_id exists
            sector = {
                "sector_id": row[13],
                "sector": row[14],
                "weight": row[15]
            }
            if sector not in funds_dict[fund_id]["sectors"]:
                funds_dict[fund_id]["sectors"].append(sector)
        
        if row[16]:  # holding_id exists
            holding = {
                "holding_id": row[16],
                "stock_symbol": row[17],
                "stock_name": row[18],
                "weight": row[19]
            }
            if holding not in funds_dict[fund_id]["holdings"]:
                funds_dict[fund_id]["holdings"].append(holding)
    
    funds = list(funds_dict.values())
    
    return jsonify(funds)

if __name__ == '__main__':
    app.run(debug=True)




    
   



    
