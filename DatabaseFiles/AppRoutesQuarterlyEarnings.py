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
def get_quarterly_earnings_orcl():
    conn = connect_to_db()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT fiscal_date_ending, reported_date, reported_eps, estimated_eps, surprise, surprise_percentage, report_time FROM public.quarterly_earnings_orcl"
    )
    data = cursor.fetchall()
    conn.close()

    quarterly_earnings_orcl = [
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

    return jsonify(quarterly_earnings_orcl)

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

if __name__ == '__main__':
    app.run(debug=True)
