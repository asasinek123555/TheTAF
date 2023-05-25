import { Builder } from "selenium-webdriver";
import chalk from "chalk";
import boxen from "boxen";
export const driver = new Builder().forBrowser("chrome").build();
import fs from "fs";
import open from "open";

export async function finalize(results) {
  const { name, data, raport, performance } = results;
  if (raport === "console") {
    console.log(
      boxen(
        `Czas trwania testu ${chalk.yellow((performance * 1000).toFixed(2))}s
        \n${data.map(
          (d) => `• ${d.name} ${d.result ? "✅" : "❌"}  \n`
        )}`.replaceAll(",", "") +
          `\n${data.filter((d) => d.result === true).length}/${
            data.length
          } testów przeszło pomyślnie`,
        {
          borderStyle: "round",
          margin: 1,
          padding: { top: 1, left: 1, right: 2 },
          borderColor: "green",
          title: chalk.blueBright(name),
          titleAlignment: "center",
        }
      )
    );
  } else {
    // Prepare data for the chart
    const passCount = data.filter((d) => d.result === true).length;
    const failCount = data.filter((d) => d.result === false).length;
    const htmlData = data.map(
      (d) => `<li class=${d.result ? "success" : "fail"}> ${d.name}<li>`
    );

    const htmlContent = `
    <html>
    <head>
      <title>Test Report</title>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <style>
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background-color: rgb(55 65 81);
          overflow:hidden;
          font-family: arial;
          color:#FFF;
        }
     
    
    
        .container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          height: 100vh;
        }
        .charts{
          width:50%;
          height:100%;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
        }
        h1{
          text-decoration:underline;
          font-style:italic;
        }

    
        .results {
          flex: 1;
          height:100%;
          width:50%;
          display:flex;
          flex-direction:column;
          justify-content:start;
          place-items:center;
        }
    
        .chart-wrapper-doughnut {
          flex: 1;
          display:flex;
          justify-content:center;
          place-items:center;
          width:50%;
          padding-top:50px;
        }
        .chart-wrapper-bar {
          flex: 1;
          display:flex;
          justify-content:center;
          place-items:center;
          width:75%;
        }
        .performance{
          font-size:20px;
          font-weight:bold;
        }
        .success{
          color:#4CAF50;
        }
        .fail{
          color:#FF5722;
        }
        .items{
          margin-top:4rem;
          display:flex;
          flex-direction:column;
        }
    
      </style>
    </head>
    <body>
      <div class="container">
      <div class="results">
      <h1>${name}</h1>
      <div class="items">
      <ul>
      ${htmlData.join("")}
      </ul>
  
      </div>
      </div>
        

  <div class="charts">
      <div class="chart-wrapper-doughnut">
        <canvas id="doughnutChart"></canvas>
      </div>
      <div class="chart-wrapper-bar">
        <canvas id="barChart"></canvas>
      </div>
  </div>
      </div>
      <script>
        const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
        new Chart(doughnutCtx, {
          type: 'doughnut',
          data: {
            labels: ['Pomyślne', 'Błąd'],
            datasets: [{
              label: 'Testy Pomyślne',
              data: [${passCount}, ${failCount}],
              backgroundColor: ['#4CAF50', '#FF5722'],
            }],
          },
          options: {
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  
                  color: "#FFF",
                  font:{
                    size:32
                  }
                },
              },
            },
          },
        });
        const barCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Pomyślnie', 'Błąd'],
        datasets: [{
          label: 'Testy Pomyślne',
          data: [${passCount}, ${failCount}],
          backgroundColor: ['#4CAF50', '#FF5722'],
        }],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: "#FFF",
            },
          },
        },
        scales: {
          y: {
            grid:{
              drawOnChartArea:false
            },
            border: {
              display: false,
            },
            ticks:{
              display:false
            }
          },
          x: {
            grid:{
              drawOnChartArea:false
            },
            ticks: {
              color: "#FFF",
            },
            border:{
              display:false,
            }
          },
        },
      },
    });
      </script>
    </body>
    </html>
    `;
    fs.writeFileSync(`${name}.html`, htmlContent);
    open(`${name}.html`);
  }

  await driver.quit();
}
