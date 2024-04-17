var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Number of Songs',
            data: [19, 23, 37, 21, 29, 32, 14],
            backgroundColor: [
                '#1DB954'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Top Releases of 2023 by Month',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'This chart looks at how late in the year a song can be released and still make it onto the list of top streamed songs.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});
