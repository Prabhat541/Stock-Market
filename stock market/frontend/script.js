const companies = ["RELIANCE.NS", "TCS.NS", "INFY.NS", "ICICIBANK.NS", "HDFCBANK.NS"];
const ctx = document.getElementById('stockChart').getContext('2d');
let chart;

function fetchAndPlot(ticker) {
    fetch(`http://localhost:5000/stock/${ticker}`)
        .then(res => res.json())
        .then(data => {
            const labels = data.map(d => d.Date);
            const prices = data.map(d => d.Close);
            if (chart) chart.destroy();
            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels,
                    datasets: [{
                        label: `${ticker} Closing Price`,
                        data: prices,
                        borderColor: 'blue',
                        fill: false
                    }]
                }
            });
        });
}

window.onload = () => {
    const list = document.getElementById("company-list");
    companies.forEach(ticker => {
        const btn = document.createElement("button");
        btn.textContent = ticker;
        btn.onclick = () => fetchAndPlot(ticker);
        list.appendChild(btn);
    });
};