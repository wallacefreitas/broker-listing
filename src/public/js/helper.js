function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US');
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

function formatToMonth(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
}