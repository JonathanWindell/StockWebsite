//Show stock prices

async function fetchStockPrices() {
    try {
        const response = await fetch('http://127.0.0.1:5000/stock-data?tickers=AAPL,GOOGL,MSFT,NVDA,TSLA,AMZN');
        const stockPrices = await response.json();
        console.log('Fetched data:', stockPrices); 
        if (stockPrices && stockPrices.length > 0) {
            displayStockPrices(stockPrices);
            showStockData(stockPrices);
        } else {
            console.error('No stock data found.');
        }
    } catch (error) {
        console.error('Could not fetch stock data:', error);
    }
    (async function fetchAnnualEarnings() {
        try {
            const response = await fetch('http://127.0.0.1:5000/annual-earnings-data?tickers=AAPL,MSFT,GOOGL,AMZN,NVDA,IBM,TSLA');
            const annualEarningsData = await response.json();
            console.log('Fetched data:', annualEarningsData);
            if (annualEarningsData && annualEarningsData.length > 0) {
                displayEarningsData(annualEarningsData);
                showEarningsData(annualEarningsData);
            } else {
                console.error('No annual earnings data found.');
            }
        } catch (error) {
            console.error('Could not fetch annual earnings:', error);
        }
    })();
}

function displayStockPrices(stockPrices) {
    const stockTableBody = document.getElementById('stockTableBody');
    stockTableBody.innerHTML = ''; 

    stockPrices.forEach(stock => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${stock.ticker}</td>
            <td>${stock.open_price}</td>
            <td>${stock.high_price}</td>
            <td>${stock.low_price}</td>
            <td>${stock.close_price}</td>
            <td>${stock.volume}</td>
            <td>${stock.latest_date}</td>
        `;
        stockTableBody.appendChild(row);
    });
}

function displayEarningsData(annualEarningsData) {
    const earningsTableBody = document.getElementById('earningsTableBody');
    earningsTableBody.innerHTML = '';

    annualEarningsData.forEach(annualEarnings => {  
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${annualEarnings.ticker}</td>
            <td>${annualEarnings.fiscal_date_ending}</td>
            <td>${annualEarnings.reported_eps}</td>
        `;
        earningsTableBody.appendChild(row);
    });
}

async function quarterlyEarningsAAPL() {
    try {
        const response = await fetch('http://127.0.0.1:5000/quarterly-earnings-aapl');
        const quarterlyEarningsAAPL = await response.json();
        console.log('Fetched data:', quarterlyEarningsAAPL);
        if (quarterlyEarningsAAPL && quarterlyEarningsAAPL.length > 0) {
            displayQuarterlyEarningsDataAAPL(quarterlyEarningsAAPL);
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

document.addEventListener('DOMContentLoaded', function() {
    companyOverview();
});

async function fundsOverview() {
    try {
        const response = await fetch('http://127.0.0.1:5000/funds');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const fundsOverview = await response.json();
        console.log('Fetched data:', fundsOverview);
        
        if (fundsOverview && fundsOverview.length > 0) {
            displayFundsOverview(fundsOverview);  // Använder vår display-funktion
        } else {
            console.error('No funds overview data found.');
            // Uppdatera alla containers för att visa felmeddelandet
            document.getElementById('fundsTableBody').innerHTML = '<p>No information found.</p>';
            document.getElementById('sectorTableBody').innerHTML = '<p>No information found.</p>';
            document.getElementById('holdingTableBody').innerHTML = '<p>No information found.</p>';
        }
    } catch (error) {
        console.error('Could not fetch funds overview:', error);
        // Uppdatera alla containers för att visa felmeddelandet
        const errorMessage = `<p>Just some small technical issues. Hold on!: ${error.message}</p>`;
        document.getElementById('fundsTableBody').innerHTML = errorMessage;
        document.getElementById('sectorTableBody').innerHTML = errorMessage;
        document.getElementById('holdingTableBody').innerHTML = errorMessage;
    }
}

document.addEventListener('DOMContentLoaded', fundsOverview);

function showStockData(stockPrices) {
    const buttons = document.querySelectorAll("#StockMenu button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const ticker = button.dataset.ticker; 
            console.log('Vald ticker:', ticker); 
            const stockTableBody = document.getElementById('stockTableBody');
            stockTableBody.innerHTML = ''; 

            const filteredStock = stockPrices.filter(stock => stock.ticker === ticker);
            console.log('Filtrerad data:', filteredStock); 

            if (filteredStock.length > 0) {
                filteredStock.forEach(stock => { 
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${stock.ticker}</td>
                        <td>${stock.open_price}</td>
                        <td>${stock.high_price}</td>
                        <td>${stock.low_price}</td>
                        <td>${stock.close_price}</td>
                        <td>${stock.volume}</td>
                        <td>${stock.latest_date}</td>
                    `;
                    stockTableBody.appendChild(row);
                });
            } else {
                const row = document.createElement('tr');
                row.innerHTML = `<td colspan="7">Ingen data hittades för ${ticker}</td>`;
                stockTableBody.appendChild(row);
            }
        });
    });
}

function showEarningsData(annualEarningsData) {
    const buttons = document.querySelectorAll("#AnnualEarningsMenu button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const ticker = button.dataset.ticker;
            console.log('Vald ticker:', ticker);
            const earningsTableBody = document.getElementById('earningsTableBody');
            earningsTableBody.innerHTML = '';

            const filteredEarnings = annualEarningsData.filter(earnings => earnings.ticker === ticker); 
            console.log('Filtered data:', filteredEarnings);

            if (filteredEarnings.length > 0) {
                filteredEarnings.forEach(earnings => { 
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${earnings.ticker}</td>
                        <td>${earnings.fiscal_date_ending}</td>
                        <td>${earnings.reported_eps}</td>
                    `;
                    earningsTableBody.appendChild(row);
                });
            } else {
                const row = document.createElement('tr');
                row.innerHTML = `<td colspan="3">Ingen data hittades för ${ticker}</td>`;
                earningsTableBody.appendChild(row);
            }
        });
    });
}

function displayFundsOverview(fundsOverview) {
    const fundsTableBody = document.getElementById('fundsTableBody');
    const sectorTableBody = document.getElementById('sectorTableBody');
    const holdingTableBody = document.getElementById('holdingTableBody');
    
    let fundsContent = '';
    let sectorContent = '';
    let holdingContent = '';

    fundsOverview.forEach(fund => {
        // Fund information
        fundsContent += `
        <dl class="fund-list">
            <dt>Fund ID:</dt>
            <dd>${fund.fund_id}</dd>
            <dt>Symbol:</dt>
            <dd>${fund.fund_symbol}</dd>
            <dt>Net Assets:</dt>
            <dd>${formatNumber(fund.net_assets)}</dd>
            <dt>Expense Ratio:</dt>
            <dd>${(fund.net_expense_ratio * 100).toFixed(2)}%</dd>
            <dt>Turnover:</dt>
            <dd>${(fund.portfolio_turnover * 100).toFixed(2)}%</dd>
            <dt>Dividend Yield:</dt>
            <dd>${(fund.dividend_yield * 100).toFixed(2)}%</dd>
            <dt>Inception Date:</dt>
            <dd>${formatDate(fund.inception_date)}</dd>
            <dt>Leveraged:</dt>
            <dd>${fund.leveraged ? 'Yes' : 'No'}</dd>
            <dt>Domestic Equities:</dt>
            <dd>${(fund.domestic_equities * 100).toFixed(2)}%</dd>
            <dt>Foreign Equities:</dt>
            <dd>${(fund.foreign_equities * 100).toFixed(2)}%</dd>
            <dt>Bond:</dt>
            <dd>${(fund.bond * 100).toFixed(2)}%</dd>
            <dt>Cash:</dt>
            <dd>${(fund.cash * 100).toFixed(2)}%</dd>
            <dt>Other:</dt>
            <dd>${(fund.other * 100).toFixed(2)}%</dd>
        </dl>`;

        // Sector Information
        fund.sectors.forEach(sector => {
            sectorContent += `
            <dl class="sector-list">
                <dt>Sector:</dt>
                <dd>${sector.sector}</dd>
                <dt>Weight:</dt>
                <dd>${(sector.weight * 100).toFixed(2)}%</dd>
            </dl>`;
        });

        // Holding Information
        fund.holdings.forEach(holding => {
            holdingContent += `
            <dl class="holding-list">
                <dt>Symbol:</dt>
                <dd>${holding.stock_symbol}</dd>
                <dt>Name:</dt>
                <dd>${holding.stock_name}</dd>
                <dt>Weight:</dt>
                <dd>${(holding.weight * 100).toFixed(2)}%</dd>
            </dl>`;
        });
    });

    // Uppdate DOM
    fundsTableBody.innerHTML = fundsContent;
    sectorTableBody.innerHTML = sectorContent;
    holdingTableBody.innerHTML = holdingContent;
}

function formatNumber(number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(number);
}

function formatDate(dateString) {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString();
}

function displayQuarterlyEarningsDataAAPL(quarterlyEarningsAAPL) {
    const quarterlyEarningsTableBody = document.getElementById('quarterlyEarningsTableAAPL');
    quarterlyEarningsTableBody.innerHTML = ''; 

    quarterlyEarningsAAPL.forEach(earnings => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${earnings.fiscal_date_ending}</td>
            <td>${earnings.reported_date}</td>
            <td>${earnings.reported_eps}</td>
            <td>${earnings.estimated_eps}</td>
            <td>${earnings.surprise}</td>
            <td>${earnings.surprise_percentage}</td>
            <td>${earnings.report_time}</td>
        `;
        quarterlyEarningsTableBody.appendChild(row);
    });
}

function displayQuarterlyEarningsGOOGL(quarterlyEarningsGOOGL) {
    const quarterlyEarningsTableBody = document.getElementById('quarterlyEarningsTableGOOGL');
    quarterlyEarningsTableBody.innerHTML = ''; 

    quarterlyEarningsGOOGL.forEach(earnings => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${earnings.fiscal_date_ending}</td>
            <td>${earnings.reported_date}</td>
            <td>${earnings.reported_eps}</td>
            <td>${earnings.estimated_eps}</td>
            <td>${earnings.surprise}</td>
            <td>${earnings.surprise_percentage}</td>
            <td>${earnings.report_time}</td>
        `;
        quarterlyEarningsTableBody.appendChild(row);
    });
}
function displayQuarterlyEarningsMSFT(quarterlyEarningsMSFT) {
    const quarterlyEarningsTableBody = document.getElementById('quarterlyEarningsTableMSFT');
    quarterlyEarningsTableBody.innerHTML = '';

    quarterlyEarningsMSFT.forEach(earnings => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${earnings.fiscal_date_ending}</td>
            <td>${earnings.reported_date}</td>
            <td>${earnings.reported_eps}</td>
            <td>${earnings.estimated_eps}</td>
            <td>${earnings.surprise}</td>
            <td>${earnings.surprise_percentage}</td>
            <td>${earnings.report_time}</td>
        `;
        quarterlyEarningsTableBody.appendChild(row);
    });
}

function displayQuarterlyEarningsTSLA(quarterlyEarningsTSLA) {
    const quarterlyEarningsTableBody = document.getElementById('quarterlyEarningsTableTSLA');
    quarterlyEarningsTableBody.innerHTML = '';

    quarterlyEarningsTSLA.forEach(earnings => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${earnings.fiscal_date_ending}</td>
            <td>${earnings.reported_date}</td>
            <td>${earnings.reported_eps}</td>
            <td>${earnings.estimated_eps}</td>
            <td>${earnings.surprise}</td>
            <td>${earnings.surprise_percentage}</td>
            <td>${earnings.report_time}</td>
        `;
        quarterlyEarningsTableBody.appendChild(row);
    });
}

function displayQuarterlyEarningsAMZN(quarterlyEarningsAMZN) {
    const quarterlyEarningsTableBody = document.getElementById('quarterlyEarningsTableAMZN');
    quarterlyEarningsTableBody.innerHTML = '';

    quarterlyEarningsAMZN.forEach(earnings => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${earnings.fiscal_date_ending}</td>
            <td>${earnings.reported_date}</td>
            <td>${earnings.reported_eps}</td>
            <td>${earnings.estimated_eps}</td>
            <td>${earnings.surprise}</td>
            <td>${earnings.surprise_percentage}</td>
            <td>${earnings.report_time}</td>
        `;
        quarterlyEarningsTableBody.appendChild(row);
    });
}

function displayQuarterlyEarningsNVDA(quarterlyEarningsNVDA) {
    const quarterlyEarningsTableBody = document.getElementById('quarterlyEarningsTableNVDA');
    quarterlyEarningsTableBody.innerHTML = '';

    quarterlyEarningsNVDA.forEach(earnings => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${earnings.fiscal_date_ending}</td>
            <td>${earnings.reported_date}</td>
            <td>${earnings.reported_eps}</td>
            <td>${earnings.estimated_eps}</td>
            <td>${earnings.surprise}</td>
            <td>${earnings.surprise_percentage}</td>
            <td>${earnings.report_time}</td>
        `;
        quarterlyEarningsTableBody.appendChild(row);
    });
}

function displayQuarterlyEarningsIBM(quarterlyEarningsIBM) {
    const quarterlyEarningsTableBody = document.getElementById('quarterlyEarningsTableIBM');
    quarterlyEarningsTableBody.innerHTML = '';

    quarterlyEarningsIBM.forEach(earnings => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${earnings.fiscal_date_ending}</td>
            <td>${earnings.reported_date}</td>
            <td>${earnings.reported_eps}</td>
            <td>${earnings.estimated_eps}</td>
            <td>${earnings.surprise}</td>
            <td>${earnings.surprise_percentage}</td>
            <td>${earnings.report_time}</td>
        `;
        quarterlyEarningsTableBody.appendChild(row);
    });
}

function setupMenuListeners(companyOverview) {
    const buttons = document.querySelectorAll("#AnnualEarningsMenu button");
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const ticker = button.dataset.ticker;
            console.log('Selected ticker:', ticker);
            showCompanyOverview(companyOverview, ticker);
        });
    });
}

function showCompanyOverview(companyOverview, ticker) {
    const filteredCompany = companyOverview.filter(company => company.symbol === ticker);
    console.log('Filtered data:', filteredCompany);

    const basicSection = document.getElementById('company-overview-basic');
    const analystSection = document.getElementById('company-overview-analyst');
    const advancedSection = document.getElementById('company-overview-advanced');

    if (filteredCompany.length > 0) {
        const company = filteredCompany[0];

        // Basic content
        basicSection.innerHTML = `
            <dl class="overview-list">
                <dt>Name</dt><dd>${company.name || 'N/A'}</dd>
                <dt>Asset Type</dt><dd>${company.asset_type || 'N/A'}</dd>
                <dt>Description</dt><dd>${company.description || 'N/A'}</dd>
                <dt>Official Site</dt><dd>${company.official_site || 'N/A'}</dd>
                <dt>Address</dt><dd>${company.adress || 'N/A'}</dd>
                <dt>Exchange</dt><dd>${company.exchange || 'N/A'}</dd>
                <dt>Country</dt><dd>${company.country || 'N/A'}</dd>
                <dt>Sector</dt><dd>${company.sector || 'N/A'}</dd>
                <dt>Fiscal Year End</dt><dd>${company.fiscal_year_end || 'N/A'}</dd>
                <dt>Latest Quarter</dt><dd>${company.latest_quarter || 'N/A'}</dd>
                <dt>Market Capitalization</dt><dd>${company.market_capitalization || 'N/A'}</dd>
                <dt>Dividend Date</dt><dd>${company.dividend_date || 'N/A'}</dd>
                <dt>Dividend Per Share</dt><dd>${company.dividend_per_share || 'N/A'}</dd>
                <dt>Dividend Yield</dt><dd>${company.dividend_yield || 'N/A'}</dd>
                <dt>Ebitda</dt><dd>${company.ebitda || 'N/A'}</dd>
            </dl>
        `;

        // Analyst content
        analystSection.innerHTML = `
            <dl class="overview-list">
                <dt>Analyst Rating Strong Buy</dt><dd>${company.analyst_rating_strong_buy || 'N/A'}</dd>
                <dt>Analyst Rating Buy</dt><dd>${company.analyst_rating_buy || 'N/A'}</dd>
                <dt>Analyst Rating Hold</dt><dd>${company.analyst_rating_hold || 'N/A'}</dd>
                <dt>Analyst Rating Sell</dt><dd>${company.analyst_rating_sell || 'N/A'}</dd>
                <dt>Moving Average 50 Day</dt><dd>${company.moving_average_50_day || 'N/A'}</dd>
                <dt>Moving Average 200 Day</dt><dd>${company.moving_average_200_day || 'N/A'}</dd>
                <dt>Week 52 High</dt><dd>${company.week_52_high || 'N/A'}</dd>
                <dt>Week 52 Low</dt><dd>${company.week_52_low || 'N/A'}</dd>
            </dl>
        `;

        // Advanced content
        advancedSection.innerHTML = `
            <dl class="overview-list">
                <dt>Shares Outstanding</dt><dd>${company.shares_outstanding || 'N/A'}</dd>
                <dt>Quarterly Earnings Growth YOY</dt><dd>${company.quarterly_earnings_growth_yoy || 'N/A'}</dd>
                <dt>Quarterly Revenue Growth YOY</dt><dd>${company.quarterly_revenue_growth_yoy || 'N/A'}</dd>
                <dt>Return on Assets TTM</dt><dd>${company.return_on_assets_ttm || 'N/A'}</dd>
                <dt>Return on Equity TTM</dt><dd>${company.return_on_equity_ttm || 'N/A'}</dd>
                <dt>Revenue TTM</dt><dd>${company.revenue_ttm || 'N/A'}</dd>
                <dt>Profit Margin</dt><dd>${company.profit_margin || 'N/A'}</dd>
                <dt>Book Value</dt><dd>${company.book_value || 'N/A'}</dd>
                <dt>Trailing PE</dt><dd>${company.trailing_pe || 'N/A'}</dd>
                <dt>Forward PE</dt><dd>${company.forward_pe || 'N/A'}</dd>
                <dt>PE Ratio</dt><dd>${company.pe_ratio || 'N/A'}</dd>
                <dt>PEG Ratio</dt><dd>${company.peg_ratio || 'N/A'}</dd>
                <dt>Diluted EPS TTM</dt><dd>${company.diluted_eps_ttm || 'N/A'}</dd>
                <dt>Gross Profit TTm</dt><dd>${company.gross_profit_ttm || 'N/A'}</dd>
                <dt>Operating Margin TTM</dt><dd>${company.operating_margin_ttm || 'N/A'}</dd>
                <dt>Price to Book ratio</dt><dd>${company.price_to_book_ratio || 'N/A'}</dd>
            </dl>
        `;
    } else {
        const noDataMessage = `<p>No data available for ${ticker}</p>`;
        basicSection.innerHTML = noDataMessage;
        analystSection.innerHTML = noDataMessage;
        advancedSection.innerHTML = noDataMessage;
    }
}



function displayNoDataMessage() {

    const quarterlyEarningsTableBody = document.getElementById('quarterlyEarningsTable');
    quarterlyEarningsTableBody.innerHTML = `
        <tr>
            <td colspan="7">Ingen data hittades för AAPL</td>
        </tr>
    `;
}


//Lägg till display funktionerna igen
fetchStockPrices();
quarterlyEarningsAAPL();
quarterlyEarningsGOOGL();
quarterlyEarningsMSFT();
quarterlyEarningsTSLA();
quarterlyEarningsAMZN();
quarterlyEarningsNVDA();
quarterlyEarningsIBM();
displayCompanyOverview();











