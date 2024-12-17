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


function showStockData(stockPrices) {
    // Hämta alla knappar
    const buttons = document.querySelectorAll("#StockMenu button");

    // Lägg till en klick-händelse för varje knapp
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const ticker = button.id; // Hämta ticker från knappens id
            const stockTableBody = document.getElementById('stockTableBody');
            stockTableBody.innerHTML = ''; // Rensa tabellen

            // Filtrera aktiedata för den valda tickern
            const filteredStock = stockPrices.filter(stock => stock.ticker === ticker);

            // Visa endast den valda aktiens data
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

            // Om ingen data hittas för aktien
            if (filteredStock.length === 0) {
                const row = document.createElement('tr');
                row.innerHTML = `<td colspan="7">Ingen data hittades för ${ticker}</td>`;
                stockTableBody.appendChild(row);
            }
        });
    });
}

// Anropa showStockData efter att data har hämtats
fetchStockPrices().then(stockPrices => showStockData(stockPrices));
    











