let chartInstance = null;  // Store the chart instance globally

function generatePieChart() {
    const input = document.getElementById('fraction-input').value;
    const [numerator, denominator] = input.split('/').map(Number);

    if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
        alert('Please enter a valid fraction in the format x/y');
        return;
    }

    const fraction = numerator / denominator;
    const remaining = 1 - fraction;

    if (chartInstance) {
        chartInstance.destroy();  // Destroy the old chart
    }

    const ctx = document.getElementById('pieChart').getContext('2d');
    chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [`${numerator}/${denominator}`, `Remaining`],
            datasets: [{
                data: [fraction, remaining],
                backgroundColor: ['#4CAF50', '#FFEB3B'],
                borderColor: ['#388E3C', '#FBC02D'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + (tooltipItem.raw * 100).toFixed(2) + '%';
                        }
                    }
                }
            }
        }
    });
}

function clearPieChart() {
    if (chartInstance) {
        chartInstance.destroy();
        document.getElementById('fraction-input').value = ''; // Clear input
    }
}
