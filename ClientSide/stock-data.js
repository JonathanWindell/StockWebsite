//Sidebar navigation
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open'); 
});

//Functions for format
//Funtion for numbers
function formatNumber(number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(number);
}
//Functions for percentage
function formatPercentage(number) {
    return number ? number.toFixed(2) + '%' : 'N/A';
}
//Function for date
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString();
}


// Fetch stock prices and annual earnings data from the server
async function fetchStockPrices() {
    try {
        // Fetch stock price data for specific tickers
        const response = await fetch('http://127.0.0.1:5000/stock-data?tickers=AAPL,GOOGL,MSFT,NVDA,TSLA,AMZN');
        const stockPrices = await response.json();
        console.log('Fetched data:', stockPrices);
        
        // If stock data is available, display it
        if (stockPrices && stockPrices.length > 0) {
            displayStockPrices(stockPrices); // Update UI with stock prices
            showStockData(stockPrices);      // Show stock data details
        } else {
            console.error('No stock data found.');
        }
    } catch (error) {
        // Log an error if fetching stock prices fails
        console.error('Could not fetch stock data:', error);
    }

    // Fetch annual earnings data
    (async function fetchAnnualEarnings() {
        try {
            // Fetch earnings data for specific tickers
            const response = await fetch('http://127.0.0.1:5000/annual-earnings-data?tickers=AAPL,MSFT,GOOGL,AMZN,NVDA,IBM,TSLA');
            const annualEarningsData = await response.json();
            console.log('Fetched data:', annualEarningsData);
            
            // If earnings data is available, display it
            if (annualEarningsData && annualEarningsData.length > 0) {
                displayEarningsData(annualEarningsData); // Update UI with earnings data
                showEarningsData(annualEarningsData);    // Show earnings data details
            } else {
                console.error('No annual earnings data found.');
            }
        } catch (error) {
            // Log an error if fetching annual earnings fails
            console.error('Could not fetch annual earnings:', error);
        }
    })();
}

//Function for displaying stock prices
function displayStockPrices(stockPrices) {
    const stockTableBody = document.getElementById('stockTableBody');
    stockTableBody.innerHTML = ''; 

    stockPrices.forEach(stock => { 
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${stock.ticker}</td>
            <td>${formatNumber(stock.open_price)}</td>
            <td>${formatNumber(stock.high_price)}</td>
            <td>${formatNumber(stock.low_price)}</td>
            <td>${formatNumber(stock.close_price)}</td>
            <td>${formatNumber(stock.volume)}</td>
            <td>${stock.latest_date}</td>
        `;
        stockTableBody.appendChild(row);
    });
}

//Function for displaying earnings
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

document.addEventListener('DOMContentLoaded', function() {
    initializeCompanyOverview();
});

async function initializeCompanyOverview() {
    try {
        // Fetch the company overview data first
        const companyOverviewData = await fetchCompanyOverview();
        
        // Once we have the data, set up the menu listeners
        if (companyOverviewData && companyOverviewData.length > 0) {
            setupMenuListeners(companyOverviewData);
            
            // Show the first company by default (optional)
            const firstCompany = companyOverviewData[0];
            showCompanyOverview(companyOverviewData, firstCompany.symbol);
        } else {
            console.error('No company overview data found.');
        }
    } catch (error) {
        console.error('Failed to initialize company overview:', error);
    }
}

//Function for company overview
async function fetchCompanyOverview() {
    try {
        const response = await fetch('http://127.0.0.1:5000/company-overview');
        const data = await response.json();
        console.log('Fetched data:', data);
        return data;
    } catch (error) {
        console.error('Could not fetch company overview:', error);
        throw error;
    }
}

//Function for quarterly earnings AAPL
async function quarterlyEarningsAAPL() {
    try {
        const response = await fetch('http://127.0.0.1:5000/quarterly-earnings-aapl');
        const quarterlyEarningsAAPL = await response.json();
        console.log('Fetched data:', quarterlyEarningsAAPL);
        if (quarterlyEarningsAAPL && quarterlyEarningsAAPL.length > 0) {
            //If data found then display quarterly earnings AAPL
            displayQuarterlyEarningsDataAAPL(quarterlyEarningsAAPL);
        } else {
            console.error('No quarterly earnings data found.');
        }
    } catch (error) {
        console.error('Could not fetch quarterly earnings:', error);
    }
}

//Function for quarterly earnings GOOGL
async function quarterlyEarningsGOOGL() {
    try {
        const response = await fetch('http://127.0.0.1:5000/quarterly-earnings-googl');
        const quarterlyEarningsGOOGL = await response.json();
        console.log('Fetched data:', quarterlyEarningsGOOGL);
        if (quarterlyEarningsGOOGL && quarterlyEarningsGOOGL.length > 0) {
            //If data found then display quarterly earnings GOOGL
            displayQuarterlyEarningsGOOGL(quarterlyEarningsGOOGL);
        } else {
            console.error('No quarterly earnings data found.');
        }
    } catch (error) {
        console.error('Could not fetch quarterly earnings:', error);
    }
}

//Function for quarterly earnings MSFT
async function quarterlyEarningsMSFT() {
    try {
        const response = await fetch('http://127.0.0.1:5000/quarterly-earnings-msft');
        const quarterlyEarningsMSFT = await response.json();
        console.log('Fetched data:', quarterlyEarningsMSFT);
        if (quarterlyEarningsMSFT && quarterlyEarningsMSFT.length > 0) {
            //If data found then display quarterly earnings MSFT
            displayQuarterlyEarningsMSFT(quarterlyEarningsMSFT);
        } else {
            console.error('No quarterly earnings data found.');
        }
    } catch (error) {
        console.error('Could not fetch quarterly earnings:', error);
    } 
}

//Function for quarterly earnings NVDA
async function quarterlyEarningsNVDA() {
    try {
        const response = await fetch('http://127.0.0.1:5000/quarterly-earnings-nvda');
        const quarterlyEarningsNVDA = await response.json();
        console.log('Fetched data:', quarterlyEarningsNVDA);
        if (quarterlyEarningsNVDA && quarterlyEarningsNVDA.length > 0) {
            //If data found then display quarterly earnings NVDA
            displayQuarterlyEarningsNVDA(quarterlyEarningsNVDA);
        } else {
            console.error('No quarterly earnings data found.');
        }
    } catch (error) {
        console.error('Could not fetch quarterly earnings:', error);
    }
}

//Function for quarterly earnings TSLA
async function quarterlyEarningsTSLA() {
    try {
        const response = await fetch('http://127.0.0.1:5000/quarterly-earnings-tsla');
        const quarterlyEarningsTSLA = await response.json();
        console.log('Fetched data:', quarterlyEarningsTSLA);
        if (quarterlyEarningsTSLA && quarterlyEarningsTSLA.length > 0) {
            //If data found then display quarterly earnings TSLA
            displayQuarterlyEarningsTSLA(quarterlyEarningsTSLA);
        } else {
            console.error('No quarterly earnings data found.');
        }
    } catch (error) {
        console.error('Could not fetch quarterly earnings:', error);
    }
}

//Function for quarterly earnings IBM
async function quarterlyEarningsIBM() {
    try {
        const response = await fetch('http://127.0.0.1:5000/quarterly-earnings-ibm');
        const quarterlyEarningsIBM = await response.json();
        console.log('Fetched data:', quarterlyEarningsIBM);
        if (quarterlyEarningsIBM && quarterlyEarningsIBM.length > 0) {
            //If data found then display quarterly earnings IBM
            displayQuarterlyEarningsIBM(quarterlyEarningsIBM);
        } else {
            console.error('No quarterly earnings data found.');
        }
    } catch (error) {
        console.error('Could not fetch quarterly earnings:', error);
    }
}

//Function for quarterly earnings AMZN
async function quarterlyEarningsAMZN() {
    try {
        const response = await fetch('http://127.0.0.1:5000/quarterly-earnings-amzn');
        const quarterlyEarningsAMZN = await response.json();
        console.log('Fetched data:', quarterlyEarningsAMZN);
        if (quarterlyEarningsAMZN && quarterlyEarningsAMZN.length > 0) {
            //If data found then display quarterly earnings AMZN
            displayQuarterlyEarningsAMZN(quarterlyEarningsAMZN);
        } else {
            console.error('No quarterly earnings data found.');
        }
    } catch (error) {
        console.error('Could not fetch quarterly earnings:', error);
    }
}

//Function for funds overview
async function fundsOverview() {
    try {
        const response = await fetch('http://127.0.0.1:5000/funds');
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const fundsOverview = await response.json();
        console.log('Fetched data:', fundsOverview);
        
        if (fundsOverview && fundsOverview.length > 0) {
            displayFundsOverview(fundsOverview);  //Using display-function
        } else {
            console.error('No funds overview data found.');
            // Uppdate container to show error message.
            document.getElementById('sectorTableBody').innerHTML = '<p>No information found.</p>';
        }
    } catch (error) {
        console.error('Could not fetch funds overview:', error);
        // Uppdate container to show error message.
        const errorMessage = `<p>Just some small technical issues. Hold on!: ${error.message}</p>`;
        document.getElementById('sectorTableBody').innerHTML = errorMessage;
    }
}
// Call the fundsOverview function when the page loads
document.addEventListener('DOMContentLoaded', fundsOverview);

//Function for showing stock data
function showStockData(stockPrices) {
    const buttons = document.querySelectorAll("#StockMenu button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const ticker = button.dataset.ticker; 
            console.log('Selected ticker:', ticker); 
            const stockTableBody = document.getElementById('stockTableBody');
            stockTableBody.innerHTML = ''; 

            //Filter ticker
            const filteredStock = stockPrices.filter(stock => stock.ticker === ticker);
            console.log('Filtered data:', filteredStock); 

            //If data found then display
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
                row.innerHTML = `<td colspan="7">No data found for ${ticker}</td>`;
                stockTableBody.appendChild(row);
            }
        });
    });
}

//Function for showing earnings
function showEarningsData(annualEarningsData) {
    const buttons = document.querySelectorAll("#AnnualEarningsMenu button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const ticker = button.dataset.ticker;
            console.log('Selected ticker:', ticker);
            const earningsTableBody = document.getElementById('earningsTableBody');
            earningsTableBody.innerHTML = '';

            //Filter ticker
            const filteredEarnings = annualEarningsData.filter(earnings => earnings.ticker === ticker); 
            console.log('Filtered data:', filteredEarnings);

            //If data found then display
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
                row.innerHTML = `<td colspan="3">No data found for ${ticker}</td>`;
                earningsTableBody.appendChild(row);
            }
        });
    });
}

//Function for showing funds
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
            <div class="sector-item">
                <dl class="sector-list">
                    <dt>Sector:</dt>
                    <dd>${sector.sector}</dd>
                    <dt>Weight:</dt>
                    <dd>${(sector.weight * 100).toFixed(2)}%</dd>
                </dl>
            </div>`;
        });

        // Holding Information
        fund.holdings.forEach(holding => {
            holdingContent += `
            <div class="holding-item">
                <dl class="holding-list">
                    <dt>Symbol:</dt>
                    <dd>${holding.stock_symbol}</dd>
                    <dt>Name:</dt>
                    <dd>${holding.stock_name}</dd>
                    <dt>Weight:</dt>
                    <dd>${(holding.weight * 100).toFixed(2)}%</dd>
                </dl>
            </div>`;
        });
    });

    // Uppdate DOM
    fundsTableBody.innerHTML = fundsContent;
    sectorTableBody.innerHTML = sectorContent;
    holdingTableBody.innerHTML = holdingContent;
}

//Function for showing quarterly earnings AAPL
function displayQuarterlyEarningsDataAAPL(quarterlyEarningsAAPL) {
    const quarterlyEarningsTableBody = document.getElementById('quarterlyEarningsTableAAPL');
    quarterlyEarningsTableBody.innerHTML = ''; 

    // Loop through each earnings record and create a new table row
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
        // Add the row to the table
        quarterlyEarningsTableBody.appendChild(row);
    });
}

//Function for showing quarterly earnings GOOGL
function displayQuarterlyEarningsGOOGL(quarterlyEarningsGOOGL) {
    const quarterlyEarningsTableBody = document.getElementById('quarterlyEarningsTableGOOGL');
    quarterlyEarningsTableBody.innerHTML = ''; 

    // Loop through each earnings record and create a new table row
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
        // Add the row to the table
        quarterlyEarningsTableBody.appendChild(row);
    });
}

//Function for showing quarterly earnings MSFT
function displayQuarterlyEarningsMSFT(quarterlyEarningsMSFT) {
    const quarterlyEarningsTableBody = document.getElementById('quarterlyEarningsTableMSFT');
    quarterlyEarningsTableBody.innerHTML = '';

    // Loop through each earnings record and create a new table row
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
        // Add the row to the table
        quarterlyEarningsTableBody.appendChild(row);
    });
}

//Function for showing quarterly earnings TSLA
function displayQuarterlyEarningsTSLA(quarterlyEarningsTSLA) {
    const quarterlyEarningsTableBody = document.getElementById('quarterlyEarningsTableTSLA');
    quarterlyEarningsTableBody.innerHTML = '';

    // Loop through each earnings record and create a new table row
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
        // Add the row to the table
        quarterlyEarningsTableBody.appendChild(row);
    });
}

//Function for showing quarterly earnings AMZN
function displayQuarterlyEarningsAMZN(quarterlyEarningsAMZN) {
    const quarterlyEarningsTableBody = document.getElementById('quarterlyEarningsTableAMZN');
    quarterlyEarningsTableBody.innerHTML = '';

    // Loop through each earnings record and create a new table row
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
        // Add the row to the table
        quarterlyEarningsTableBody.appendChild(row);
    });
}

//Function for showing quarterly earnings NVDA
function displayQuarterlyEarningsNVDA(quarterlyEarningsNVDA) {
    const quarterlyEarningsTableBody = document.getElementById('quarterlyEarningsTableNVDA');
    quarterlyEarningsTableBody.innerHTML = '';

    // Loop through each earnings record and create a new table row
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
        // Add the row to the table
        quarterlyEarningsTableBody.appendChild(row);
    });
}

//Function for showing quarterly earnings IBM
function displayQuarterlyEarningsIBM(quarterlyEarningsIBM) {
    const quarterlyEarningsTableBody = document.getElementById('quarterlyEarningsTableIBM');
    quarterlyEarningsTableBody.innerHTML = '';

    // Loop through each earnings record and create a new table row
    quarterlyEarningsIBM.forEach(earnings => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${earnings.fiscal_date_ending}</td>
            <td>${earnings.reported_date}</td>
            <td>${earnings.reported_eps}</td>
            <td>${earnings.estimated_eps}</td>
            <td>${earnings.surprise}</td>
            <td>${formatPercentage(earnings.surprise_percentage)}</td> 
            <td>${earnings.report_time}</td>
        `;
        // Add the row to the table
        quarterlyEarningsTableBody.appendChild(row);
    });
}

//Function for setting up menu listeners for company overview
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

//Function for showing company overview
function showCompanyOverview(companyOverview, ticker) {
    // Filter the company overview based on the selected ticker
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
                <dt>Latest Quarter</dt><dd>${formatDate(company.latest_quarter)}</dd>
                <dt>Market Capitalization</dt><dd>${company.market_capitalization ? formatNumber(company.market_capitalization) : 'N/A'}</dd>
                <dt>Dividend Date</dt><dd>${formatDate(company.dividend_date)}</dd>
                <dt>Dividend Per Share</dt><dd>${company.dividend_per_share ? formatNumber(company.dividend_per_share) : 'N/A'}</dd>
                <dt>Dividend Yield</dt><dd>${company.dividend_yield ? company.dividend_yield + '%' : 'N/A'}</dd>
                <dt>Ebitda</dt><dd>${company.ebitda ? formatNumber(company.ebitda) : 'N/A'}</dd>
            </dl>
        `;

        // Analyst content
        analystSection.innerHTML = `
            <dl class="overview-list">
                <dt>Analyst Rating Strong Buy</dt><dd>${company.analyst_rating_strong_buy || 'N/A'}</dd>
                <dt>Analyst Rating Buy</dt><dd>${company.analyst_rating_buy || 'N/A'}</dd>
                <dt>Analyst Rating Hold</dt><dd>${company.analyst_rating_hold || 'N/A'}</dd>
                <dt>Analyst Rating Sell</dt><dd>${company.analyst_rating_sell || 'N/A'}</dd>
                <dt>Moving Average 50 Day</dt><dd>${company.moving_average_50_day ? formatNumber(company.moving_average_50_day) : 'N/A'}</dd>
                <dt>Moving Average 200 Day</dt><dd>${company.moving_average_200_day ? formatNumber(company.moving_average_200_day) : 'N/A'}</dd>
                <dt>Week 52 High</dt><dd>${company.week_52_high ? formatNumber(company.week_52_high) : 'N/A'}</dd>
                <dt>Week 52 Low</dt><dd>${company.week_52_low ? formatNumber(company.week_52_low) : 'N/A'}</dd>
            </dl>
        `;

        // Advanced content
        advancedSection.innerHTML = `
            <dl class="overview-list">
                <dt>Shares Outstanding</dt><dd>${company.shares_outstanding ? formatNumber(company.shares_outstanding) : 'N/A'}</dd>
                <dt>Quarterly Earnings Growth YOY</dt><dd>${company.quarterly_earnings_growth_yoy ? company.quarterly_earnings_growth_yoy + '%' : 'N/A'}</dd>
                <dt>Quarterly Revenue Growth YOY</dt><dd>${company.quarterly_revenue_growth_yoy ? company.quarterly_revenue_growth_yoy + '%' : 'N/A'}</dd>
                <dt>Return on Assets TTM</dt><dd>${company.return_on_assets_ttm ? company.return_on_assets_ttm + '%' : 'N/A'}</dd>
                <dt>Return on Equity TTM</dt><dd>${company.return_on_equity_ttm ? company.return_on_equity_ttm + '%' : 'N/A'}</dd>
                <dt>Revenue TTM</dt><dd>${company.revenue_ttm ? formatNumber(company.revenue_ttm) : 'N/A'}</dd>
                <dt>Profit Margin</dt><dd>${company.profit_margin ? company.profit_margin + '%' : 'N/A'}</dd>
                <dt>Book Value</dt><dd>${company.book_value ? formatNumber(company.book_value) : 'N/A'}</dd>
                <dt>Trailing PE</dt><dd>${company.trailing_pe || 'N/A'}</dd>
                <dt>Forward PE</dt><dd>${company.forward_pe || 'N/A'}</dd>
                <dt>PE Ratio</dt><dd>${company.pe_ratio || 'N/A'}</dd>
                <dt>PEG Ratio</dt><dd>${company.peg_ratio || 'N/A'}</dd>
                <dt>Diluted EPS TTM</dt><dd>${company.diluted_eps_ttm ? formatNumber(company.diluted_eps_ttm) : 'N/A'}</dd>
                <dt>Gross Profit TTM</dt><dd>${company.gross_profit_ttm ? formatNumber(company.gross_profit_ttm) : 'N/A'}</dd>
                <dt>Operating Margin TTM</dt><dd>${company.operating_margin_ttm ? company.operating_margin_ttm + '%' : 'N/A'}</dd>
                <dt>Price to Book Ratio</dt><dd>${company.price_to_book_ratio || 'N/A'}</dd>
            </dl>
        `;
    } else {
        // Display no data message
        const noDataMessage = `<p>No data available for ${ticker}</p>`;
        basicSection.innerHTML = noDataMessage;
        analystSection.innerHTML = noDataMessage;
        advancedSection.innerHTML = noDataMessage;
    }
}

// Function for displaying no data message
function displayNoDataMessage() {

    const quarterlyEarningsTableBody = document.getElementById('quarterlyEarningsTable');
    quarterlyEarningsTableBody.innerHTML = `
        <tr>
            <td colspan="7">Ingen data hittades för AAPL</td>
        </tr>
    `;
}

// Fetch all data
fetchStockPrices();
quarterlyEarningsAAPL();
quarterlyEarningsGOOGL();
quarterlyEarningsMSFT();
quarterlyEarningsTSLA();
quarterlyEarningsAMZN();
quarterlyEarningsNVDA();
quarterlyEarningsIBM();











