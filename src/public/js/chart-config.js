async function fetchChartData() {
	const response = await fetch('/listings');
	const data = await response.json();
	return data;
}

function processChartData(data) {
	const brokers = {};

	data.listings.forEach(item => {

		if (!brokers[item.broker]) {
			brokers[item.broker] = {
				label: item.broker,
				data: [],
				borderColor: getRandomColor(),
				fill: false,
			};
		}

		brokers[item.broker].data.push({
			x: item.listing_month,
			y: item.average_revenue,
		});
	});

	return Object.values(brokers);
}

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';

	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	
	return color;
}

async function renderChart() {
	const chartData = await fetchChartData();
	const processedData = processChartData(chartData);
	const ctx = document.getElementById('revenueChart').getContext('2d');

	new Chart(ctx, {
		type: 'line',
		data: {
			datasets: processedData,
		},
		options: {
			scales: {
				x: {
					type: 'time',
					time: {
						unit: 'month',
						tooltipFormat: 'yyyy-MM',
					},
					title: {
						display: true,
						text: 'Month',
					},
				},
				y: {
					title: {
						display: true,
						text: 'Average Revenue',
					},
					beginAtZero: true
				}
			},
		},
	});
}

renderChart();