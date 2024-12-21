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

async function companyOverview() {
    try {
        const response = await fetch('http://127.0.0.1:5000/company-overview');
        const companyOverview = await response.json();
        console.log('Fetched data:', companyOverview);
        if (companyOverview && companyOverview.length > 0) {
            displayCompanyOverview(companyOverview);
        } else {
            console.error('No company overview data found.');
        }
    } catch (error) {
        console.error('Could not fetch company overview:', error);
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











