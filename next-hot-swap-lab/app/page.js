"use client"; // Mark this file as a Client Component

import React, { useState } from 'react';

// Simulated real-time metrics data for professional relevance
const fakeAnalyticsData = { views: 2435, clicks: 123, conversionRate: 5.2 };
const fakeServerMetrics = { cpu: "45%", memory: "70%", uptime: "48 days" };
const fakeUserStats = { users: 1056, active: 98, pending: 34 };

export default function Dashboard() {
  const [activeWidget, setActiveWidget] = useState('Analytics');

  const handleSwap = (widget) => {
    setActiveWidget(widget);
  };

  return (
    <div style={styles.container}>
      <h1>Real-Time Dashboard</h1>
      <div style={styles.buttonContainer}>
        <button onClick={() => handleSwap('Analytics')}>Analytics</button>
        <button onClick={() => handleSwap('ServerMetrics')}>Server Metrics</button>
        <button onClick={() => handleSwap('UserStats')}>User Stats</button>
      </div>
      <div style={styles.widget}>
        {activeWidget === 'Analytics' && <AnalyticsWidget data={fakeAnalyticsData} />}
        {activeWidget === 'ServerMetrics' && <ServerMetricsWidget data={fakeServerMetrics} />}
        {activeWidget === 'UserStats' && <UserStatsWidget data={fakeUserStats} />}
      </div>
    </div>
  );
}

function AnalyticsWidget({ data }) {
  return (
    <div>
      <h2>Analytics Overview</h2>
      <p>Views: {data.views}</p>
      <p>Clicks: {data.clicks}</p>
      <p>Conversion Rate: {data.conversionRate}%</p>
    </div>
  );
}

function ServerMetricsWidget({ data }) {
  return (
    <div>
      <h2>Server Metrics</h2>
      <p>CPU Usage: {data.cpu}</p>
      <p>Memory Usage: {data.memory}</p>
      <p>Uptime: {data.uptime}</p>
    </div>
  );
}

function UserStatsWidget({ data }) {
  return (
    <div>
      <h2>User Statistics</h2>
      <p>Total Users: {data.users}</p>
      <p>Active Users: {data.active}</p>
      <p>Pending Users: {data.pending}</p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
    height: '100vh',
  },
  buttonContainer: {
    marginBottom: '20px',
  },
  widget: {
    padding: '20px',
    margin: '20px',
    border: '2px solid #0070f3',
    borderRadius: '5px',
    textAlign: 'left',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

