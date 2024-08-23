// apiFunction.js
import { useEffect, useState } from "react";

const apiKey = "XK5W1L2RMWENAY0T"; // Tu clave de API

// Función genérica para fetch
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// Componente principal
const ApiFunction = () => {
  const [realGdpData, setRealGdpData] = useState(null);
  const [cpiData, setCpiData] = useState(null);
  const [inflationData, setInflationData] = useState(null);
  const [ohlcvData, setOhlcvData] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      const realGdp = await fetchData(
        `https://www.alphavantage.co/query?function=REAL_GDP&apikey=${apiKey}`
      );
      setRealGdpData(realGdp);

      const cpi = await fetchData(
        `https://www.alphavantage.co/query?function=CPI&apikey=${apiKey}`
      );
      setCpiData(cpi);

      const inflation = await fetchData(
        `https://www.alphavantage.co/query?function=INFLATION&apikey=${apiKey}`
      );
      setInflationData(inflation);

      const symbol = "IBM";
      const ohlcv = await fetchData(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`
      );
      setOhlcvData(ohlcv);
    };

    fetchAllData();
  }, []);

  const renderRealGdp = () => {
    if (realGdpData && realGdpData.data && realGdpData.data.length > 0) {
      const latestGdp = realGdpData.data[0];
      return (
        <div>
          <p>
            <strong>Date:</strong> {latestGdp.date}
          </p>
          <p>
            <strong>Real GDP:</strong> {latestGdp.value}
          </p>
        </div>
      );
    }
    return <p>No data available</p>;
  };

  const renderCpi = () => {
    if (cpiData && cpiData.data && cpiData.data.length > 0) {
      const latestCpi = cpiData.data[0];
      return (
        <div>
          <p>
            <strong>Date:</strong> {latestCpi.date}
          </p>
          <p>
            <strong>CPI:</strong> {latestCpi.value}
          </p>
        </div>
      );
    }
    return <p>No data available</p>;
  };

  const renderInflation = () => {
    if (inflationData && inflationData.data && inflationData.data.length > 0) {
      const latestInflation = inflationData.data[0];
      return (
        <div>
          <p>
            <strong>Date:</strong> {latestInflation.date}
          </p>
          <p>
            <strong>Inflation:</strong> {latestInflation.value}
          </p>
        </div>
      );
    }
    return <p>No data available</p>;
  };

  const renderOhlcv = () => {
    if (ohlcvData && ohlcvData["Time Series (Daily)"]) {
      const timeSeries = ohlcvData["Time Series (Daily)"];
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      let tableHtml = `
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Open</th>
                            <th>High</th>
                            <th>Low</th>
                            <th>Close</th>
                            <th>Volume</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

      for (let date in timeSeries) {
        const ohlcv = timeSeries[date];
        const dateObj = new Date(date);
        if (
          dateObj.getMonth() === currentMonth &&
          dateObj.getFullYear() === currentYear
        ) {
          tableHtml += `
                        <tr>
                            <td>${date}</td>
                            <td>${ohlcv["1. open"]}</td>
                            <td>${ohlcv["2. high"]}</td>
                            <td>${ohlcv["3. low"]}</td>
                            <td>${ohlcv["4. close"]}</td>
                            <td>${ohlcv["5. volume"]}</td>
                        </tr>
                    `;
        }
      }

      tableHtml += "</tbody></table>";
      return <div dangerouslySetInnerHTML={{ __html: tableHtml }} />;
    }
    return <p>No data available</p>;
  };

  return (
    <div className="container">
      <div className="section">
        <h2>PIB</h2>
        <p>
          El PIB Real mide el valor total de los bienes y servicios producidos
          en un país, ajustado por la inflación, lo que proporciona una imagen
          más precisa del crecimiento económico.
        </p>
        {renderRealGdp()}
      </div>
      <div className="section">
        <h2>IPC</h2>
        <p>
          El IPC rastrea los cambios en los precios de una canasta de bienes y
          servicios de consumo, reflejando el costo de vida y la inflación para
          los consumidores.
        </p>
        {renderCpi()}
      </div>
      <div className="section">
        <h2>Inflación</h2>
        <p>
          La inflación es la tasa a la cual aumentan los precios de los bienes y
          servicios, reduciendo el poder adquisitivo de la moneda. Es un
          indicador clave de la estabilidad económica.
        </p>
        {renderInflation()}
      </div>
      <div className="section full-width">
        <h2>Datos OHLCV del Mes Actual</h2>
        <p>
          Los datos OHLCV incluyen la apertura, el máximo, el mínimo, el cierre
          y el volumen de un activo financiero, proporcionando una visión
          completa del comportamiento del mercado en un periodo específico.
        </p>
        {renderOhlcv()}
      </div>
    </div>
  );
};

export default ApiFunction;
