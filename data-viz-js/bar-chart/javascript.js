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
                text: 'Songs released later in the year are less likely to reach the top of the streaming list',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'This chart looks at how many songs that were released in 2023 made it onto that year\'s list of top Spotify streams. No songs released past July made the list, so only the first seven months are present.'
            }
        },
        scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Songs Released'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Release Month'
              }
            }
        },
    },
});
