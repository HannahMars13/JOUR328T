var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'Paid work',
              'Education',
              'Housework',
              'Shopping',
              'Sleeping',
              'Eating and drinking',
              'Seeing friends'
            ],
            datasets: [{
              label: 'Minutes per day',
              data: [315, 25, 103, 20, 542, 100, 2, 23],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
              ]
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
                text: 'How to people in China use their time?'
              }
            }
          }
        });
