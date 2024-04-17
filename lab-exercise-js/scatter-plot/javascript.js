var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#FFA630",
                backgroundColor: "#FFA630",
                borderWidth:2,

              }, {
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#EBC775",
                backgroundColor: "#EBC775",
                borderWidth:2,

              }, {
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#D7E8BA",
                backgroundColor:"#D7E8BA",
                borderWidth:2,

              }, {
                data: [
                  {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#92C5B2",
                backgroundColor: "#92C5B2",
                borderWidth:2,

              }, {
                data: [
                  {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#4DA1A9",
                backgroundColor: "#4DA1A9",
                borderWidth:2,

              }, {
                data: [
                  {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#2E5077",
                backgroundColor: "#2E5077",
                borderWidth:2,

              }, {
                data: [
                  {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#483656",
                backgroundColor: "#483656",
                borderWidth:2,

              }, {
                data: [
                  {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#611C35",
                backgroundColor: "#611C35",
                borderWidth:2,

              }, {
                data: [
                  {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#6F3147",
                backgroundColor: "#6F3147",
                borderWidth:2,

              }
            ]
          },
          options: {
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP Per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            },
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Does money make you live longer?'
              },
              subtitle: {
                display: true,
                text: 'This chart shows the nine most populated countries as well as their average life expectancy and GDP per capita. While there is a slight positive correlation between these two factors, it is impossible to say for certain if they are related.'
              }
            }
          }
        });
