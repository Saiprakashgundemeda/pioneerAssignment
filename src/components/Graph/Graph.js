import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Graph.css';

const Graph = () => {
    const [populationData, setPopulationData] = useState([]);
    const chartRef = useRef(null); 

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
            const jsonData = await response.json();
            const populationData = jsonData.data.map(item => ({
                country: item.Nation,
                population: item.Population
            }));
            setPopulationData(populationData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (populationData.length > 0) {
            renderChart();
        }
    }, [populationData]);

    const renderChart = () => {
        if (chartRef.current !== null) {
            chartRef.current.destroy();
        }

        const labels = populationData.map(data => data.country);
        const populationValues = populationData.map(data => data.population);

        const ctx = document.getElementById('populationChart');
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Population',
                    data: populationValues,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Population'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Country'
                        }
                    }
                }
            }
        });
    };

    return (
        <div className="graph-container">
            <canvas id="populationChart"></canvas>
        </div>
    );
};

export default Graph;
