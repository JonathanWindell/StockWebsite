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

function displayQuarterlyEarningsAAPL(quarterlyEarningsAAPL) {
    const quarterlyEarningsAAPLTableBody = document.getElementById('quarterlyEarningsAAPLTableBody');
    quarterlyEarningsAAPLTableBody.innerHTML = '';

    quarterlyEarningsAAPL.forEach(quarterlyEarnings => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${quarterlyEarnings.fiscal_date_ending}</td>
            <td>${quarterlyEarnings.reported_date}</td>
            <td>${quarterlyEarnings.reported_eps}</td>
            <td>${quarterlyEarnings.estimated_eps}</td>
            <td>${quarterlyEarnings.surprise}</td>
            <td>${quarterlyEarnings.surprise_percentage}</td>
            <td>${quarterlyEarnings.report_time}</td>
        `;
        quarterlyEarningsAAPLTableBody.appendChild(row);
    });
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
    const buttons = document.querySelectorAll("#EarningsMenu button");

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


fetchStockPrices();
quarterlyEarningsAAPL();











