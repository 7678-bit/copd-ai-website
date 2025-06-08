import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-700">Revolutionizing COPD Care</h1>
        <p className="text-lg text-gray-600 mt-2">Integrating Predictive AI and IoT Acoustic Sensors for Smarter Chronic Disease Management</p>
      </header>

      <section className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600">About the Project</h2>
        <p className="mt-2 text-gray-700">
          This project explores how predictive AI and IoT acoustic sensors can be used to detect early signs of Chronic Obstructive Pulmonary Disease (COPD) exacerbations...
        </p>
      </section>

      <section className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600">COPD Awareness</h2>
        <p className="mt-2 text-gray-700">
          Chronic Obstructive Pulmonary Disease is a progressive lung disease...
        </p>
      </section>

      <section className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600">Telehealth and COPD</h2>
        <p className="mt-2 text-gray-700">
          Telehealth plays a transformative role in managing COPD...
        </p>
      </section>

      <section className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600">Full Research Paper</h2>
        <p className="mt-2 text-gray-700 whitespace-pre-line">
          [PASTE FULL PAPER TEXT HERE]
        </p>
      </section>
    </div>
  );
}
