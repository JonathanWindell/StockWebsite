// --- Fetching stock data ---
let currentTicker = 'AAPL'; // Default ticker for charts

// ---- FETCH FUNCTIONS ----
async function fetchStockData() {
    try {
        // Fetch stock and earnings data
        const stockResponse = await fetch('http://127.0.0.1:5000/stock-data?tickers=AAPL,MSFT,GOOGL,META,NVDA,IBM,TSLA');
        const stockData = await stockResponse.json();

        const earningsResponse = await fetch('http://127.0.0.1:5000/earnings-data?tickers=AAPL,MSFT,GOOGL,META,NVDA,IBM,TSLA');
        const earningsData = await earningsResponse.json();

        populateDropdown(stockData, earningsData);
    } catch (error) {
        console.error('Kunde inte hämta aktiedata:', error);
    }
}

// ---- FETCH FUNCTIONS ----
async function fetchNewsData() {
    try {
        const response = await fetch('http://127.0.0.1:5000/news-data');
        const newsData = await response.json();

        const newsTableBody = document.getElementById('newsTableBody');
        newsTableBody.innerHTML = '';

        newsData.forEach(news => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <h2>${news.title}</h2>
                <p>${news.content}<p>
                <p>${news.source}<p>
                <p><a href="${news.url}" target="_blank">Link</a><p>
                <p>${news.published_at}<p>
                <p><img src="${news.banner_image}" alt="Banner" width="100"><p>
                <p>${news.overall_sentiment_label}<p>
            `;
            newsTableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Could not fetch news data:', error);
    }
}

async function fetchEarningsData() {
    try {
        const response = await fetch('http://127.0.0.1:5000/earnings-data');
        const earningsData = await response.json();

        const earningsTableBody = document.getElementById('earningsTableBody');
        earningsTableBody.innerHTML = '';

        earningsData.forEach(earnings => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${earnings.ticker}</td>
                <td>${earnings.fiscal_date_ending}</td>
                <td>${earnings.reporteds_eps}</td>
            `;
            earningsTableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Could not fetch earnings data:', error);
    }
}

async function fetchDataForCompany(ticker) {
    const response = await fetch(`http://127.0.0.1:5000/earnings-data?ticker=${ticker}`);
    return response.json();
}

async function fetchHighData(ticker) {
    try {
        const response = await fetch(`http://127.0.0.1:5000/stock-data?tickers=${ticker}`);
        const stockData = await response.json();
        
        if (!Array.isArray(stockData)) {
            console.error('Expected an array, but got:', stockData);
            return [];
        }

        const highData = stockData.map(stock => ({ high: stock.high }));
        return highData;
    } catch (error) {
        console.error('Could not fetch high data:', error);
        return [];
    }
}

async function fetchLowData(ticker) {
    try {
        const response = await fetch(`http://127.0.0.1:5000/stock-data?tickers=${ticker}`);
        const stockData = await response.json();
        
        if (!Array.isArray(stockData)) {
            console.error('Expected an array, but got:', stockData);
            return [];
        }

        const lowData = stockData.map(stock => ({ low: stock.low }));
        return lowData;
    } catch (error) {
        console.error('Could not fetch low data:', error);
        return [];
    }
}

async function fetchVolumeData(ticker) {
    try {
        const response = await fetch(`http://127.0.0.1:5000/stock-data?tickers=${ticker}`);
        const stockData = await response.json();
        
        if (!Array.isArray(stockData)) {
            console.error('Expected an array, but got:', stockData);
            return [];
        }

        return stockData.map(stock => ({ volume: +stock.volume })); 
    } catch (error) {
        console.error('Could not fetch volume data:', error);
        return [];
    }
}

// ---- UI FUNCTIONS ----
function populateDropdown(stockData, earningsData) {
    const dropdownContent = document.getElementById('myDropdown');
    dropdownContent.innerHTML = '';

    const shownTickers = new Set();

    stockData.forEach(stock => {
        if (!shownTickers.has(stock.ticker)) {
            shownTickers.add(stock.ticker);

            const link = document.createElement('a');
            link.textContent = stock.ticker;
            link.href = '#';
            link.onclick = () => {
                const filteredStocks = stockData.filter(s => s.ticker === stock.ticker);
                const filteredEarnings = earningsData.filter(e => e.ticker === stock.ticker);
                showStockAndEarningsData(filteredStocks, filteredEarnings);
            };
            dropdownContent.appendChild(link);
        }
    });
}

function showStockAndEarningsData(stocks, earnings) {
    const stockInfoContainer = document.getElementById('stockInfoContainer');
    stockInfoContainer.innerHTML = '';

    stocks.forEach((stock, index) => {
        const row = document.createElement('div');
        row.classList.add('SecondRow');
        row.innerHTML = `
            ${index === 0 ? `<p class="Ticker">Ticker: ${stock.ticker}</p>` : ''}
            <p class="Date">Date: ${stock.date}</p>
            <p class="High">High: ${stock.high} $</p>
            <p class="Low">Low: ${stock.low} $</p>
            <p class="Close">Close: ${stock.close} $</p>
            <p class="Volume">Volume: ${stock.volume} $</p>
        `;
        stockInfoContainer.appendChild(row);
    });

    if (earnings.length > 0) {
        const earningsTable = document.createElement('table');
        earningsTable.innerHTML = `
            <thead>
                <tr>
                    <th>Ticker</th>
                    <th>Fiscal Date Ending</th>
                    <th>Reported EPS</th>
                </tr>
            </thead>
            <tbody id="earningsTableBody"></tbody>
        `;

        const earningsTableBody = earningsTable.querySelector('#earningsTableBody');
        earnings.forEach(earning => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${earning.ticker}</td>
                <td>${earning.fiscal_date_ending}</td>
                <td>${earning.reported_eps}</td>
            `;
            earningsTableBody.appendChild(row);
        });

        stockInfoContainer.appendChild(earningsTable);
    }
}

function createEarningsChart(earningsData) {
    const width = 500;
        const height = 350;
        const marginTop = 30;
        const marginRight = 30;
        const marginBottom = 40;
        const marginLeft = 30;
    
        const bins = d3.bin()
            .thresholds(50)
            .value(d => d.reported_eps)(earningsData);
    
        const xScale = d3.scaleLinear()
            .domain([d3.min(bins, d => d.x0), d3.max(bins, d => d.x1)])
            .range([marginLeft, width - marginRight]);
    
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(bins, d => d.length)])
            .range([height - marginBottom, marginTop]);
    
        const svg = d3.select('#myEarningsGraph')
            .attr('width', width)
            .attr('height', height);
    
        svg.append('g')
            .attr('transform', `translate(0,${height - marginBottom})`)
            .call(d3.axisBottom(xScale));
    
        svg.append('g')
            .attr('transform', `translate(${marginLeft}, 0)`)
            .call(d3.axisLeft(yScale));
    
        svg.append('text')
            .attr("x", width / 2)
            .attr("y", height - marginBottom + 30)
            .attr("text-anchor", "middle")
            .text("Reported EPS")
            .style("fill", "black")
            .style("font-size", "16px");
        
        svg.append('text')
            .attr("x", -(height / 2))
            .attr("y", marginLeft - 20)
            .attr("y", marginTop - 20)
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(-90)")
            .text("Number of Reports")
            .style("fill", "black")
            .style("font-size", "17px");
    
        svg.selectAll('rect')
            .data(bins)
            .enter().append('rect')
            .attr('x', d => xScale(d.x0))
            .attr('y', d => yScale(d.length))
            .attr('width', d => xScale(d.x1) - xScale(d.x0))
            .attr('height', d => height - marginBottom - yScale(d.length))
            .style('fill', 'black');
}

function createHighChart(highData) {
    const width = 400;
    const height = 300;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 30;
    const marginLeft = 40;

    const bins = d3.bin()
        .thresholds(10) 
        .value(d => d.high)(highData);

    const xScale = d3.scaleLinear()
        .domain([d3.min(bins, d => d.x0), d3.max(bins, d => d.x1)])
        .range([marginLeft, width - marginRight]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(bins, d => d.length)])
        .range([height - marginBottom, marginTop]);

    const svg = d3.select('#myHighGraph')
        .attr('width', width)
        .attr('height', height);
    
    svg.append('text')
        .attr("x", width / 2)
        .attr("y", height - marginBottom + 30)
        .attr("text-anchor", "middle")
        .text("High")
        .style("fill", "black")
        .style("font-size", "16px");

    svg.append('g')
        .attr('transform', `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(xScale));

    svg.append('g')
        .attr('transform', `translate(${marginLeft}, 0)`)
        .call(d3.axisLeft(yScale));

    svg.selectAll('rect')
        .data(bins)
        .enter().append('rect')
        .attr('x', d => xScale(d.x0))
        .attr('y', d => yScale(d.length))
        .attr('width', d => xScale(d.x1) - xScale(d.x0))
        .attr('height', d => height - marginBottom - yScale(d.length))
        .style('fill', 'black');
}

function createLowChart(lowData) {
    const width = 400;
    const height = 300;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 30;
    const marginLeft = 40;

    const bins = d3.bin()
        .thresholds(10)
        .value(d => d.low)(lowData);

    const xScale = d3.scaleLinear()
        .domain([d3.min(bins, d => d.x0), d3.max(bins, d => d.x1)])
        .range([marginLeft, width - marginRight]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(bins, d => d.length)])
        .range([height - marginBottom, marginTop]);

    const svg = d3.select('#myLowGraph')
        .attr('width', width)
        .attr('height', height);

    svg.append('text')
        .attr("x", width / 2)
        .attr("y", height - marginBottom + 30)
        .attr("text-anchor", "middle")
        .text("Low")
        .style("fill", "black")
        .style("font-size", "16px");

    svg.append('g')
        .attr('transform', `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(xScale));

    svg.append('g')
        .attr('transform', `translate(${marginLeft}, 0)`)
        .call(d3.axisLeft(yScale));

    svg.selectAll('rect')
        .data(bins)
        .enter().append('rect')
        .attr('x', d => xScale(d.x0))
        .attr('y', d => yScale(d.length))
        .attr('width', d => xScale(d.x1) - xScale(d.x0))
        .attr('height', d => height - marginBottom - yScale(d.length))
        .style('fill', 'black');
}

function createVolumeChart(volumeData) {
    const width = 400;
    const height = 300;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 30;
    const marginLeft = 40;

    const bins = d3.bin()
        .thresholds(20)
        .value(d => +d.volume)(volumeData);

    const xScale = d3.scaleLinear()
        .domain([d3.min(bins, d => d.x0), d3.max(bins, d => d.x1)])
        .range([marginLeft, width - marginRight]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(bins, d => d.length)])
        .range([height - marginBottom, marginTop]);

    const svg = d3.select('#myVolumeGraph')
        .attr('width', width)
        .attr('height', height);

    svg.append('text')
        .attr("x", width / 2)
        .attr("y", height - marginBottom + 30)
        .attr("text-anchor", "middle")
        .text("Low")
        .style("fill", "black")
        .style("font-size", "16px");

    svg.append('g')
        .attr('transform', `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(xScale));

    svg.append('g')
        .attr('transform', `translate(${marginLeft}, 0)`)
        .call(d3.axisLeft(yScale));

    svg.selectAll('rect')
        .data(bins)
        .enter().append('rect')
        .attr('x', d => xScale(d.x0))
        .attr('y', d => yScale(d.length))
        .attr('width', d => xScale(d.x1) - xScale(d.x0))
        .attr('height', d => height - marginBottom - yScale(d.length))
        .style('fill', 'black');
}
        


// ---- EVENT LISTENERS ----
window.onload = async () => {
    // Initial data for earnings chart
    const initialEarningsData = await fetchDataForCompany(currentTicker);
    createEarningsChart(initialEarningsData);

    // Initial data for high chart
    const initialHighData = await fetchHighData(currentTicker);
    createHighChart(initialHighData);

    const initialLowData = await fetchLowData(currentTicker);
    createLowChart(initialLowData);

    const initialVolumeData = await fetchVolumeData(currentTicker);
    createVolumeChart(initialVolumeData);
};

document.getElementById('companySelector').addEventListener('change', async (event) => {
    currentTicker = event.target.value;

    const earningsData = await fetchDataForCompany(currentTicker);
    d3.select('#myEarningsGraph').selectAll('*').remove();
    createEarningsChart(earningsData);

    const highData = await fetchHighData(currentTicker);
    d3.select('#myHighGraph').selectAll('*').remove();
    createHighChart(highData);

    const lowData = await fetchLowData(currentTicker);
    d3.select('#myLowGraph').selectAll('*').remove();
    createLowChart(lowData);

    const volumeData = await fetchVolumeData(currentTicker);
    d3.select('#myLowGraph').selectAll('*').remove();
    createVolumeChart(volumeData);
});

// ---- DROPDOWN TOGGLE ----
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('show');
        }
    }
};

// ---- INITIALIZATION ----
document.addEventListener('DOMContentLoaded', () => {
    fetchStockData();
    fetchNewsData();
    fetchEarningsData();
});