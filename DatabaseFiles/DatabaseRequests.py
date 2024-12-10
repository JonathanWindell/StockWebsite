import requests
import psycopg2

# List of tickers
tickers = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "IBM"]

# Databasanslutning
conn = psycopg2.connect(
    dbname="Stock_info",
    user="postgres",
    password="Randombanan2004!!",
    host="localhost"
)
cursor = conn.cursor()

#Check for existing tickers
def get_existing_tickers(table_name):
    cursor.execute(f"SELECT DISTINCT ticker FROM {table_name}")
    return {row[0] for row in cursor.fetchall()}

# Kontrollera vilka tickers som behöver hämtas
existing_stock_prices = get_existing_tickers("stock_prices")
tickers_to_fetch = [ticker for ticker in tickers if ticker not in existing_stock_prices]

# Funktion för att hämta data från API
def fetch_data(url):
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Failed to fetch data: {response.status_code}")
        return None

# ---------------------- Fetching Intraday Stock Prices ----------------------

for ticker in tickers:
    url = f"https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={ticker}&interval=5min&apikey=MZ6AITHRCLIGUET4"
    data = fetch_data(url)

    if data and "Time Series (5min)" in data:
        time_series = data["Time Series (5min)"]
        for timestamp, values in time_series.items():
            open_price = values["1. open"]
            high_price = values["2. high"]
            low_price = values["3. low"]
            close_price = values["4. close"]
            volume = values["5. volume"]

            cursor.execute(
                """
                INSERT INTO stock_prices (ticker, open_price, high_price, low_price, close_price, volume, latest_date)
                VALUES (%s, %s, %s, %s, %s, %s, %s)
                """,
                (ticker, open_price, high_price, low_price, close_price, volume, timestamp)
            )
    else:
        print(f"No data found for {ticker}")

# ---------------------- Fetching News Sentiment ----------------------

for ticker in tickers:
    url = f"https://www.alphavantage.co/query?function=NEWS&apikey=MZ6AITHRCLIGUET4"
    data = fetch_data(url)

    if data and "tickers" in data:
        news_info = data["tickers"]
        for news in news_info:
            title = news["title"]
            url = news["url"]
            time_published = news["time_published"]
            summary = news["summary"]
            banner_image = news["banner_image"]
            source = news["source"]
            category_within_source = news["category_within_source"]
            source_domain = news["source_domain"]
            overall_sentiment_score = news["overall_sentiment_score"]
            overall_sentiment_label = news["overall_sentiment_label"]

            cursor.execute(
                """
                INSERT INTO stock_news (ticker, title, url, time_published, summary, banner_image, source, category_within_source, source_domain, overall_sentiment_score, overall_sentiment_label)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                """,
                (ticker, title, url, time_published, summary, banner_image, source, category_within_source, source_domain, overall_sentiment_score, overall_sentiment_label)
            )
    else:
        print(f"No news data found for {ticker}")

# ---------------------- Fetching Annual Earnings ----------------------
for ticker in tickers:
    url = f"https://www.alphavantage.co/query?function=EARNINGS&symbol={ticker}&apikey=MZ6AITHRCLIGUET4"
    data = fetch_data(url)

    if data and "annualEarnings" in data:
        annual_earnings = data["annualEarnings"]
        for earnings in annual_earnings:
            fiscal_date_ending = earnings["fiscalDateEnding"]
            reported_eps = earnings["reportedEPS"]

            cursor.execute(
                """
                INSERT INTO annual_earnings (ticker, fiscal_date_ending, reported_eps)
                VALUES (%s, %s, %s)
                """,
                (ticker, fiscal_date_ending, reported_eps)
            )
    else:
        print(f"No annual earnings data found for {ticker}")



# ---------------------- Fetching Quarterly Earnings ----------------------

for ticker in tickers:
    url = f"https://www.alphavantage.co/query?function=EARNINGS&symbol={ticker}&apikey=MZ6AITHRCLIGUET4"
    data = fetch_data(url)

    if data and "quarterlyEarnings" in data:
        quarterly_earnings = data["quarterlyEarnings"]
        for earnings in quarterly_earnings:
            fiscal_date_ending = earnings["fiscalDateEnding"]
            reported_date = earnings["reportedDate"]
            reported_eps = earnings["reportedEPS"]
            estimated_eps = earnings["estimatedEPS"]
            surprise = earnings["surprise"]
            surprise_percentage = earnings["surprisePercentage"]
            report_time = earnings["reportTime"]
            ticker = earnings["ticker"]

            cursor.execute(
                """
                INSERT INTO quarterly_earnings (ticker, fiscal_date_ending, reported_date, reported_eps, estimated_eps, surprise, surprise_percentage, report_time)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
                """,
                (ticker, fiscal_date_ending, reported_date, reported_eps, estimated_eps, surprise, surprise_percentage, report_time)
            )

        else:
            print(f"No quarterly earnings data found for {ticker}")

# Commit all changes to the database
conn.commit()
cursor.close()
conn.close()

print("All stock data, news data, and earnings data inserted successfully.")



 


