var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: [
              'Danceability',
              'Valence',
              'Energy',
              'Acousticness',
              'Instrumentalness',
              'Liveness',
              'Speechiness'
            ],
            datasets: [{
              label: '"Blinding Lights" by The Weeknd',
              data: [50, 38, 80, 0, 0, 9, 7],
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
              label: '"Shape of You" by Ed Sheeran',
              data: [83, 93, 65, 58, 0, 9, 8],
              fill: true,
              backgroundColor: 'rgba(0, 128, 0, 0.2)',
              borderColor: 'rgb(0, 128, 0)',
              pointBackgroundColor: 'rgb(0, 128, 0)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(0, 128, 0)'
            }, {
              label: '"Someone You Loved" by Lewis Capaldi',
              data: [50, 45, 41, 75, 0, 11, 3],
              fill: true,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgb(54, 162, 235)',
              pointBackgroundColor: 'rgb(54, 162, 235)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'What do the top streamed songs of 2023 have in common?',
                font: {
                    size: 18
                }
              },
              subtitle: {
                  display: true,
                  text: 'This chart shows the top three most streamed songs of 2023 and compares them based on Spotify\'s seven song attributes. Each song received the highest score in a different category.'
              }
            }
          }
        });
