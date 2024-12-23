// --- Fetching stock data ---
async function quarterlyEarningsAAPL() {
    try {
        const response = await fetch('http://127.0.0.1:5000/quarterly-earnings-aapl');
        const quarterlyEarningsAAPL = await response.json();
        console.log('Fetched data:', quarterlyEarningsAAPL);
        if (quarterlyEarningsAAPL && quarterlyEarningsAAPL.length > 0) {
            displayQuarterlyEarningsAAPL(quarterlyEarningsAAPL);
        } else {
            console.error('No quarterly earnings data found.');
        }
    } catch (error) {
        console.error('Could not fetch quarterly earnings:', error);
    }
}

async function quarterlyEarningsGOOGL() {
    try {
        const response = await fetch('http://127.0.0.1:5000/quarterly-earnings-googl');
        const quarterlyEarningsGOOGL = await response.json();
        console.log('Fetched data:', quarterlyEarningsGOOGL);
        if (quarterlyEarningsGOOGL && quarterlyEarningsGOOGL.length > 0) {
            displayQuarterlyEarningsGOOGL(quarterlyEarningsGOOGL);
        } else {
            console.error('No quarterly earnings data found.');
        }
    } catch (error) {
        console.error('Could not fetch quarterly earnings:', error);
    }
}

async function quarterlyEarningsMSFT() {
    try {
        const response = await fetch('http://127.0.0.1:5000/quarterly-earnings-msft');
        const quarterlyEarningsMSFT = await response.json();
        console.log('Fetched data:', quarterlyEarningsMSFT);
        if (quarterlyEarningsMSFT && quarterlyEarningsMSFT.length > 0) {
            displayQuarterlyEarningsMSFT(quarterlyEarningsMSFT);
        } else {
            console.error('No quarterly earnings data found.');
        }
    } catch (error) {
        console.error('Could not fetch quarterly earnings:', error);
    } 
}

async function quarterlyEarningsNVDA() {
    try {
        const response = await fetch('http://127.0.0.1:5000/quarterly-earnings-nvda');
        const quarterlyEarningsNVDA = await response.json();
        console.log('Fetched data:', quarterlyEarningsNVDA);
        if (quarterlyEarningsNVDA && quarterlyEarningsNVDA.length > 0) {
            displayQuarterlyEarningsNVDA(quarterlyEarningsNVDA);
        } else {
            console.error('No quarterly earnings data found.');
        }
    } catch (error) {
        console.error('Could not fetch quarterly earnings:', error);
    }
}

async function quarterlyEarningsTSLA() {
    try {
        const response = await fetch('http://127.0.0.1:5000/quarterly-earnings-tsla');
        const quarterlyEarningsTSLA = await response.json();
        console.log('Fetched data:', quarterlyEarningsTSLA);
        if (quarterlyEarningsTSLA && quarterlyEarningsTSLA.length > 0) {
            displayQuarterlyEarningsTSLA(quarterlyEarningsTSLA);
        } else {
            console.error('No quarterly earnings data found.');
        }
    } catch (error) {
        console.error('Could not fetch quarterly earnings:', error);
    }
}

async function quarterlyEarningsIBM() {
    try {
        const response = await fetch('http://127.0.0.1:5000/quarterly-earnings-ibm');
        const quarterlyEarningsIBM = await response.json();
        console.log('Fetched data:', quarterlyEarningsIBM);
        if (quarterlyEarningsIBM && quarterlyEarningsIBM.length > 0) {
            displayQuarterlyEarningsIBM(quarterlyEarningsIBM);
        } else {
            console.error('No quarterly earnings data found.');
        }
    } catch (error) {
        console.error('Could not fetch quarterly earnings:', error);
    }
}

async function quarterlyEarningsAMZN() {
    try {
        const response = await fetch('http://127.0.0.1:5000/quarterly-earnings-amzn');
        const quarterlyEarningsAMZN = await response.json();
        console.log('Fetched data:', quarterlyEarningsAMZN);
        if (quarterlyEarningsAMZN && quarterlyEarningsAMZN.length > 0) {
            displayQuarterlyEarningsAMZN(quarterlyEarningsAMZN);
        } else {
            console.error('No quarterly earnings data found.');
        }
    } catch (error) {
        console.error('Could not fetch quarterly earnings:', error);
    }
}

<p>${overview.symbol}</p>
            <p>${overview.asset_type}</p>
            <p>${overview.name}</p>
            <p>${overview.description}</p>
            <p>${overview.cik}</p>
            <p>${overview.exchange}</p>
            <p>${overview.currency}</p>
            <p>${overview.country}</p>
            <p>${overview.sector}</p>
            <p>${overview.industry}</p>
            <p>${overview.address}</p>
            <p>${overview.offical_site}</p>
            <p>${overview.fiscal_year_end}</p>
            <p>${overview.latest_quarter}</p>
            <p>${overview.market_capitalization}</p>
            <p>${overview.ebitda}</p>
            <p>${overview.pe_ratio}</p>
            <p>${overview.peg_ratio}</p>
            <P>${overview.book_value}</p>
            <p>${overview.dividend_per_share}</p>
            <p>${overview.dividend_yield}</p>
            <p>${overview.eps}</p>
            <p>${overview.revenue}</p>
            <p>${overview.revenue_per_share_ttm}</p>
            <p>${overview.profit_margin}</p>
            <p>${overview.operating_margin_ttm}</p>
            <p>${overview.return_on_assets_ttm}</p>
            <p>${overview.return_on_equity_ttm}</p>
            <p>${overview.revenue_ttm}</p>
            <p>${overview.gross_profit_ttm}</p>
            <p>${overview.diluted_eps_ttm}</p>
            <p>${overview.quarterly_earnings_growth_yoy}</p>
            <p>${overview.quarterly_revenue_growth_yoy}</p>
            <p>${overview.analyst_target_price}</p>
            <p>${overview.analyst_rating_strong_buy}</p>
            <p>${overview.analyst_rating_buy}</p>
            <p>${overview.analyst_rating_hold}</p>
            <p>${overview.analyst_rating_sell}</p>
            <p>${overview.analyst_rating_strong_sell}</p>
            <p>${overview.trailing_pe}</p>
            <p>${overview.forward_pe}</p>
            <p>${overview.price_to_sales_ratio_ttm}</p>
            <p>${overview.price_to_book_ratio}</p>
            <p>${overview.ev_to_revenue}</p>
            <p>${overview.ev_to_ebitda}</p>
            <p>${overview.beta}</p>
            <p>${overview.week_52_high}</p>
            <p>${overview.week_52_low}</p>
            <p>${overview.moving_average_50_day}</p>
            <p>${overview.moving_average_200_day}</p>
            <p>${overview.shares_outstanding}</p>
            <p>${overview.divident_date}</p>
            <p>${overview.ex_dividend_date}</p>