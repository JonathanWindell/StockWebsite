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

async function companyOverview() {
    try {
        const response = await fetch('http://127.0.0.1:5000/company-overview');
        
        // Add error handling for non-200 responses
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const companyOverview = await response.json();
        console.log('Fetched data:', companyOverview);
        
        if (companyOverview && companyOverview.length > 0) {
            displayCompanyOverview(companyOverview);
        } else {
            console.error('No company overview data found.');
            // Display error message to user
            document.getElementById('company-overview-basic').innerHTML = 
                '<p>No information found.</p>';
        }
    } catch (error) {
        console.error('Could not fetch company overview:', error);
        // Display error message to user
        document.getElementById('company-overview-basic').innerHTML = 
            `<p>Just som small technical issues. Hold on!: ${error.message}</p>`;
    }
}


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

function displayCompanyOverview(companyOverview) {
    // Get correct element IDs (matching your HTML)
    const basicSection = document.querySelector('#CompanyOverviewBasic #company-overview-basic');
    const analystSection = document.querySelector('#CompanyOverviewAnalyst #company-overview-analyst');
    const advancedSection = document.querySelector('#CompanyOverviewAdvanced #company-overview-advanced');
    
    if (!basicSection || !analystSection || !advancedSection) {
        console.error('Could not find one or more section elements');
        return;
    }

    let basicContent = '';
    let analystContent = '';
    let advancedContent = '';

    companyOverview.forEach(overview => {
        // Basic section content
        basicContent += `
            <dl class="overview-list">
                <dt>Name</dt><dd>${overview.name || 'N/A'}</dd>
                <dt>Asset Type</dt><dd>${overview.asset_type || 'N/A'}</dd>
                <dt>Description</dt><dd>${overview.description || 'N/A'}</dd>
                <dt>Exchange</dt><dd>${overview.exchange || 'N/A'}</dd>
                <dt>Country</dt><dd>${overview.country || 'N/A'}</dd>
                <dt>Sector</dt><dd>${overview.sector || 'N/A'}</dd>
                <dt>Fiscal Year End</dt><dd>${overview.fiscal_year_end || 'N/A'}</dd>
                <dt>Latest Quarter</dt><dd>${overview.latest_quarter || 'N/A'}</dd>
                <dt>Market Capitalization</dt><dd>${overview.market_capitalization || 'N/A'}</dd>
                <dt>Dividend Date</dt><dd>${overview.dividend_date || 'N/A'}</dd>
                <dt>Dividend Per Share</dt><dd>${overview.dividend_per_share || 'N/A'}</dd>
                <dt>Dividend Yield</dt><dd>${overview.dividend_yield || 'N/A'}</dd>
                <dt>Ebitda</dt><dd>${overview.ebitda || 'N/A'}</dd>
            </dl>
        `;

        // Analyst section content
        analystContent += `
            <dl class="overview-list">
                <dt>Analyst Rating Strong Buy</dt><dd>${overview.analyst_rating_strong_buy || 'N/A'}</dd>
                <dt>Analyst Rating Buy</dt><dd>${overview.analyst_rating_buy || 'N/A'}</dd>
                <dt>Analyst Rating Hold</dt><dd>${overview.analyst_rating_hold || 'N/A'}</dd>
                <dt>Analyst Rating Sell</dt><dd>${overview.analyst_rating_sell || 'N/A'}</dd>
                <dt>Moving Average 50 Day</dt><dd>${overview.moving_average_50_day || 'N/A'}</dd>
                <dt>Week 52 High</dt><dd>${overview.week_52_high || 'N/A'}</dd>
                <dt>Week 52 Low</dt><dd>${overview.week_52_low || 'N/A'}</dd>
            </dl>
        `;

        // Advanced section content
        advancedContent += `
            <dl class="overview-list">
                <dt>Shares Outstanding</dt><dd>${overview.shares_outstanding || 'N/A'}</dd>
                <dt>Quarterly Earnings Growth YOY</dt><dd>${overview.quarterly_earnings_growth_yoy || 'N/A'}</dd>
                <dt>Quarterly Revenue Growth YOY</dt><dd>${overview.quarterly_revenue_growth_yoy || 'N/A'}</dd>
                <dt>Return on Assets TTM</dt><dd>${overview.return_on_assets_ttm || 'N/A'}</dd>
                <dt>Return on Equity TTM</dt><dd>${overview.return_on_equity_ttm || 'N/A'}</dd>
                <dt>Revenue TTM</dt><dd>${overview.revenue_ttm || 'N/A'}</dd>
                <dt>Profit Margin</dt><dd>${overview.profit_margin || 'N/A'}</dd>
                <dt>Book Value</dt><dd>${overview.book_value || 'N/A'}</dd>
                <dt>Trailing PE</dt><dd>${overview.trailing_pe || 'N/A'}</dd>
                <dt>Forward PE</dt><dd>${overview.forward_pe || 'N/A'}</dd>
                <dt>PE Ratio</dt><dd>${overview.pe_ratio || 'N/A'}</dd>
                <dt>PEG Ratio</dt><dd>${overview.peg_ratio || 'N/A'}</dd>
                <dt>Diluted EPS TTM</dt><dd>${overview.diluted_eps_ttm || 'N/A'}</dd>
            </dl>
        `;
    });

    // Update the innerHTML of each section
    basicSection.innerHTML = basicContent || '<p>No information found</p>';
    analystSection.innerHTML = analystContent || '<p>No information found</p>';
    advancedSection.innerHTML = advancedContent || '<p>No information found</p>';
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











