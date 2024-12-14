//Show stock prices

async function fetchStockPrices() {
    try {
        const response = await fetch('http://127.0.0.1:5000/stock-data?tickers=AAPL,GOOGL,MSFT,NVDA,TSLA,AMZN');
        const stockPrices = await response.json();
        console.log(stockPrices); // Kontrollera om data hämtas korrekt
        if (stockPrices && stockPrices.length > 0) {
            displayStockPrices(stockPrices);
        } else {
            console.error('Ingen aktiedata hittades.');
        }
    } catch (error) {
        console.error('Kunde inte hämta aktiedata:', error);
    }
}

fetchStockPrices();
// Funktion för att visa aktieinformation i HTML
function displayStockPrices(stockPrices) {
    const stockTableBody = document.getElementById('stockTableBody');
    stockTableBody.innerHTML = ''; // Rensa befintliga rader

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


function showStockData(stocks) {
    
}
    











