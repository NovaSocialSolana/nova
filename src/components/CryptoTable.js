import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import "apexcharts/dist/apexcharts.css"; // Assuming this is where your ApexCharts CSS is located

function CryptoTable() {
  // Create refs for the charts
  const chartRefs = useRef([]);

  useEffect(() => {
    const lineCharts = [
      {
        id: "#hs-cryptocurrency-market-cap-1",
        data: [21, 20, 24, 20, 18, 17, 11, 17, 18, 30, 31, 30, 30, 35, 25, 35, 35, 40, 60, 90, 90],
      },
      {
        id: "#hs-cryptocurrency-market-cap-2",
        data: [21, 20, 24, 20, 18, 27, 25, 27, 30, 30, 35, 25, 18, 30, 31, 35, 35, 90, 90, 90, 85],
      },
      {
        id: "#hs-cryptocurrency-market-cap-3",
        data: [25, 48, 10, 11, 11, 15, 60, 60, 60, 75, 21, 20, 24, 20, 38, 37, 35, 37, 30, 120, 120],
      },
      {
        id: "#hs-cryptocurrency-market-cap-4",
        data: [21, 20, 24, 45, 47, 30, 30, 35, 35, 35, 40, 60, 42, 90, 90, 85, 70, 75, 43, 75, 90],
      },
      // Other charts...
    ];

    lineCharts.forEach(({ id, data }, index) => {
      if (chartRefs.current[index]) {
        const options = {
          series: [
            {
              name: "Market Cap",
              data,
            },
          ],
          chart: {
            width: 100,
            height: 30,
            type: "line",
            sparkline: {
              enabled: true,
            },
          },
          stroke: {
            curve: "straight",
            width: 2,
          },
          markers: {
            hover: {
              size: 0,
            },
          },
          xaxis: {
            type: "category",
          },
        };

        const chart = new ApexCharts(chartRefs.current[index], options);
        chart.render();
      }
    });
  }, []);

  // Data for the rows (including charts data)
  const cryptoData = [
    {
      rank: 1,
      coinName: "Bitcoin",
      symbol: "BTC",
      price: "$26,869.14",
      oneHourChange: "-0.1%",
      dayChange: "0.3%",
      weekChange: "-3.8%",
      volume: "$15,438,433,675",
      marketCap: "$524,007,508,943",
      chartRef: 0,
      icon: (
        <svg width="24" height="24" viewBox="0 0 2500 2500" xmlns="http://www.w3.org/2000/svg">
          <path fill="#f7931a" d="M1250 0C559.6 0 0 559.6 0 1250s559.6 1250 1250 1250 1250-559.6 1250-1250S1940.4 0 1250 0zm106.9 1915.3c-292.2 0-494.7-141.8-599-324.5l-151.3 60.4-36.8-101.8 145.6-58.1c-28.7-98.5-50.5-253.5-37.8-405.9l-144-57.4 36.8-101.9 153.4 61.3c28.5-82.6 60.3-154.2 96.7-221.5l-135.3-54.3 36.8-101.9 146.5 58.8c74.6-117.2 156-221.6 266.3-301.1l-140-56.2 36.8-101.9 151.3 60.4c129.9-102.4 307.9-159.3 476-118.9l144-57.3 36.8 101.8-142.8 57c58.5 112.5 87.3 269.9 67.8 462.2l142.2 56.8-36.8 101.9-147.6-59c32.3 100.3 45.5 207.3 37.7 320.5l145.7 58.1-36.8 101.9-151.3-60.4c-97.8 145.9-242.1 247-434.4 270.2z" />
        </svg>
      ),
    },
    {
      rank: 2,
      coinName: "Ethereum",
      symbol: "ETH",
      price: "$1,546.77",
      oneHourChange: "-0.2%",
      dayChange: "-0.1%",
      weekChange: "-5.7%",
      volume: "$6,591,963,010",
      marketCap: "$185,955,678,121",
      chartRef: 1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 2496 2496" xmlns="http://www.w3.org/2000/svg">
          <g fill="#62688f">
            <path d="M959.8 80.7l539.7 895.6-539.7-245.3zM959.8 731l539.7 245.3-539.7 319.1zM959.8 1295.4l539.7-319.1-539.7-245.3z" />
          </g>
        </svg>
      ),
    },
    // {
    //   rank: 3,
    //   coinName: "Tether",
    //   symbol: "USDT",
    //   price: "$0.999970",
    //   oneHourChange: "0.0%",
    //   dayChange: "0.0%",
    //   weekChange: "-0.1%",
    //   volume: "$19,869,550,292",
    //   marketCap: "$83,526,487,241",
    //   chartRef: 2,
    // },
    // {
    //   rank: 4,
    //   coinName: "BNB",
    //   symbol: "BNB",
    //   price: "$206.10",
    //   oneHourChange: "-0.1%",
    //   dayChange: "0.2%",
    //   weekChange: "-3.5%",
    //   volume: "$274,816,679",
    //   marketCap: "$31,733,331,578",
    //   chartRef: 3,
    // },
    // {
    //   rank: 5,
    //   coinName: "XRP",
    //   symbol: "XRP",
    //   price: "$0.484377",
    //   oneHourChange: "0.0%",
    //   dayChange: "0.6%",
    //   weekChange: "-7.3%",
    //   volume: "$559,515,333",
    //   marketCap: "$25,878,334,217",
    //   chartRef: 4,
    // },
    // {
    //   rank: 6,
    //   coinName: "USDC",
    //   symbol: "USDC",
    //   price: "$1.00",
    //   oneHourChange: "0.1%",
    //   dayChange: "0.0%",
    //   weekChange: "-0.0%",
    //   volume: "$4,007,517,282",
    //   marketCap: "$25,115,962,449",
    //   chartRef: 5,
    // },
    // {
    //   rank: 7,
    //   coinName: "Tron",
    //   symbol: "TRX",
    //   price: "$1,546.64",
    //   oneHourChange: "-0.2%",
    //   dayChange: "-0.0%",
    //   weekChange: "-5.7%",
    //   volume: "$2,882,655",
    //   marketCap: "$13,629,792,526",
    //   chartRef: 6,
    // },
    // {
    //   rank: 8,
    //   coinName: "Solana",
    //   symbol: "SOL",
    //   price: "$22.11",
    //   oneHourChange: "-0.1%",
    //   dayChange: "3.6%",
    //   weekChange: "-6.7%",
    //   volume: "$317,711,493",
    //   marketCap: "$9,153,498,199",
    //   chartRef: 7,
    // },
    // {
    //   rank: 9,
    //   coinName: "Cardano",
    //   symbol: "ADA",
    //   price: "$0.245322",
    //   oneHourChange: "-0.3%",
    //   dayChange: "-0.3%",
    //   weekChange: "6.4%",
    //   volume: "$100,329,073",
    //   marketCap: "$8,551,032,069",
    //   chartRef: 8,
    // },
    // {
    //   rank: 10,
    //   coinName: "Polygon",
    //   symbol: "MATIC",
    //   price: "$0.058460",
    //   oneHourChange: "-0.1%",
    //   dayChange: "0.9%",
    //   weekChange: "-5.0%",
    //   volume: "$181,045,590",
    //   marketCap: "$8,258,820,867",
    //   chartRef: 9,
    // },
  ];
  

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-neutral-700">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                  Cryptocurrency Prices by Market Cap
                </h2>
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                  The global cryptocurrency market cap today is $1.09 Trillion, a{" "}
                  <span className="text-green-500">0.5%</span> change in the last 24 hours.
                </p>
              </div>

              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-50 dark:bg-neutral-800">
                  <tr>
                    <th className="px-6 py-3 text-start whitespace-nowrap">#</th>
                    <th className="px-6 py-3 text-start whitespace-nowrap min-w-64">Coin</th>
                    <th className="px-6 py-3 text-start whitespace-nowrap">Price</th>
                    <th className="px-6 py-3 text-start whitespace-nowrap">1h</th>
                    <th className="px-6 py-3 text-start whitespace-nowrap">24h</th>
                    <th className="px-6 py-3 text-start whitespace-nowrap">7d</th>
                    <th className="px-6 py-3 text-start whitespace-nowrap">24h Volume</th>
                    <th className="px-6 py-3 text-start whitespace-nowrap">Mkt Cap</th>
                    <th className="px-6 py-3 text-start whitespace-nowrap">Last 7 days</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {cryptoData.map((crypto, index) => (
                    <tr key={index}>
                      <td className="px-6 py-3">{crypto.rank}</td>
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-x-3">
                          {crypto.icon}
                          <span className="font-semibold text-sm">{crypto.coinName}</span>
                          <span className="text-xs text-gray-500 dark:text-neutral-500">{crypto.symbol}</span>
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <span className="text-sm">{crypto.price}</span>
                      </td>
                      <td className="px-6 py-3">
                        <span className="text-sm text-red-500">{crypto.oneHourChange}</span>
                      </td>
                      <td className="px-6 py-3">
                        <span className="text-sm text-green-500">{crypto.dayChange}</span>
                      </td>
                      <td className="px-6 py-3">
                        <span className="text-sm text-red-500">{crypto.weekChange}</span>
                      </td>
                      <td className="px-6 py-3">
                        <span className="text-sm">{crypto.volume}</span>
                      </td>
                      <td className="px-6 py-3">
                        <span className="text-sm">{crypto.marketCap}</span>
                      </td>
                      <td className="px-6 py-3">
                        <div className="inline-block">
                          <div ref={(el) => (chartRefs.current[crypto.chartRef] = el)}></div> {/* Attach ref here */}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoTable;