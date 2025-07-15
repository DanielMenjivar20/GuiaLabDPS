'use client';

import { useEffect, useState, useRef } from "react";

export default function Page() {
  const [ventas, setVentas] = useState([]);
  const [anioSeleccionado, setAnioSeleccionado] = useState(null);
  const [aniosDisponibles, setAniosDisponibles] = useState([]);
  const googleRef = useRef(null); 

  useEffect(() => {
    fetch("/ventas.json")
      .then(res => res.json())
      .then(data => {
        setVentas(data);
        const anios = Array.from(new Set(data.map(v => v.anio)));
        setAniosDisponibles(anios);
        setAnioSeleccionado(anios[0]);
      });
  }, []);

  
  useEffect(() => {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/charts/loader.js';
      script.onload = () => {
        window.google.charts.load('current', { packages: ['corechart'] });
        window.google.charts.setOnLoadCallback(() => {
          googleRef.current = window.google;
          drawChart();
        });
      };
      document.body.appendChild(script);
    } else {
      window.google.charts.load('current', { packages: ['corechart'] });
      window.google.charts.setOnLoadCallback(() => {
        googleRef.current = window.google;
        drawChart();
      });
    }
  }, []);


  useEffect(() => {
    if (googleRef.current) {
      drawChart();
    }
  }, [ventas, anioSeleccionado]);

  function drawChart() {
    if (!googleRef.current || !ventas.length || !anioSeleccionado) return;

    const data = googleRef.current.visualization.arrayToDataTable([
      ['Mes', 'Ventas'],
      ...ventas
        .filter(v => v.anio === anioSeleccionado)
        .map(v => [v.mes, v.ventas]),
    ]);

    const options = {
      title: `Ventas ${anioSeleccionado}`,
      curveType: 'function',
      legend: { position: 'bottom' },
      backgroundColor: '#f0f0f0',
    };

    const chart = new googleRef.current.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <h2 style={{ textAlign: 'center' }}>Ventas Mensuales</h2>

      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <label htmlFor="anio">Selecciona un año: </label>
        <select
          id="anio"
          value={anioSeleccionado || ''}
          onChange={e => setAnioSeleccionado(Number(e.target.value))}
        >
          {aniosDisponibles.map(anio => (
            <option key={anio} value={anio}>{anio}</option>
          ))}
        </select>
      </div>

      <div id="chart_div" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
}
