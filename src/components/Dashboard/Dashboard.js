import React from "react";
import './Dashboard.css'
import { Bar, BarChart, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";
import useChartData from "../../hooks/useChartData";

const Dashboard = () => {
  const [charts, setCharts] = useChartData();
  return (
    <div className="chart-container">

      <div >
        <BarChart width={500} height={300} data={charts}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sell" barSize={30} fill="#8884d8" />
        </BarChart>
        <p>Bar Chart: Monthly Sell</p>
      </div>

      <div>
        <PieChart width={400} height={250}>
          <Pie
            data={charts}
            dataKey="investment"
            nameKey="investment"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={charts}
            dataKey="revenue"
            nameKey="revenue"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
          <Tooltip />
        </PieChart>
        <p>Pie Chart: Investment and Revenue</p>
      </div>
    </div>
  );
};

export default Dashboard;
