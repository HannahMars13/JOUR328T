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
              'Seeing friends',
              'TV and Radio'
            ],
            datasets: [{
              label: 'Minutes per day',
              data: [315, 25, 103, 20, 542, 100, 23, 127],
              backgroundColor: [
                '#433141',
                '#594157',
                '#665780',
                '#726DA8',
                '#7D8CC4',
                '#8FAFD0',
                '#A0D2DB',
                '#BEE7E8'
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
              },
              subtitle: {
                display: true,
                text: 'This chart shows a breakdown of how people in China spend their days by minutes. Sleeping and paid work take up an overwhelming majority of the time.'
              }
            }
          }
        });
