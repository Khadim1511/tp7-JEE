import { useRef, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function YearChart({ data }) {
    const chartRef = useRef(null);

    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy?.();
            }
        };
    }, []);

    if (!data || data.length === 0) {
        return (
            <div className="chart-card">
                <div className="chart-title">
                    <span className="chart-title-icon">📈</span>
                    Étudiants par année de naissance
                </div>
                <div className="chart-empty">
                    <div className="chart-empty-icon">📊</div>
                    Aucune donnée disponible
                </div>
            </div>
        );
    }

    const sortedData = [...data].sort((a, b) => a[0] - b[0]);
    const labels = sortedData.map((d) => String(d[0]));
    const values = sortedData.map((d) => d[1]);

    const gradientColors = [
        'rgba(59, 130, 246, 0.7)',
        'rgba(99, 102, 241, 0.7)',
        'rgba(139, 92, 246, 0.7)',
        'rgba(168, 85, 247, 0.7)',
        'rgba(192, 132, 252, 0.7)',
        'rgba(59, 130, 246, 0.7)',
        'rgba(99, 102, 241, 0.7)',
    ];

    const borderColors = [
        'rgba(59, 130, 246, 1)',
        'rgba(99, 102, 241, 1)',
        'rgba(139, 92, 246, 1)',
        'rgba(168, 85, 247, 1)',
        'rgba(192, 132, 252, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(99, 102, 241, 1)',
    ];

    const chartData = {
        labels,
        datasets: [
            {
                label: "Nombre d'étudiants",
                data: values,
                backgroundColor: labels.map((_, i) => gradientColors[i % gradientColors.length]),
                borderColor: labels.map((_, i) => borderColors[i % borderColors.length]),
                borderWidth: 1,
                borderRadius: 8,
                borderSkipped: false,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: 'rgba(17, 24, 39, 0.95)',
                titleColor: '#f1f5f9',
                bodyColor: '#94a3b8',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 1,
                padding: 12,
                cornerRadius: 8,
                titleFont: {
                    family: 'Inter',
                    size: 13,
                    weight: 600,
                },
                bodyFont: {
                    family: 'Inter',
                    size: 12,
                },
                callbacks: {
                    title: (items) => `Année ${items[0].label}`,
                    label: (item) => ` ${item.raw} étudiant${item.raw > 1 ? 's' : ''}`,
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#64748b',
                    font: {
                        family: 'Inter',
                        size: 11,
                        weight: 500,
                    },
                },
                border: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.04)',
                },
                ticks: {
                    color: '#64748b',
                    font: {
                        family: 'Inter',
                        size: 11,
                    },
                    stepSize: 1,
                },
                border: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className="chart-card">
            <div className="chart-title">
                <span className="chart-title-icon">📈</span>
                Étudiants par année de naissance
            </div>
            <div className="chart-container">
                <Bar ref={chartRef} data={chartData} options={options} />
            </div>
        </div>
    );
}

export default YearChart;
