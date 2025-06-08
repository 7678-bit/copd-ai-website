import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="bg-gradient-to-b from-sky-100 to-white min-h-screen p-8 text-gray-800">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-800">Revolutionizing COPD Care</h1>
        <p className="text-xl mt-4 text-gray-600">AI and IoT for Smarter Chronic Disease Management</p>
      </header>
      <nav className="flex justify-center space-x-6 mb-12">
        <Link to="/about" className="text-blue-700 hover:underline">About</Link>
        <Link to="/awareness" className="text-blue-700 hover:underline">COPD Awareness</Link>
        <Link to="/telehealth" className="text-blue-700 hover:underline">Telehealth</Link>
        <Link to="/paper" className="text-blue-700 hover:underline">Research Paper</Link>
      </nav>
      <p className="text-center text-lg text-gray-700">Explore how modern technology is transforming lives of COPD patients worldwide.</p>
    </div>
  );
}

function About() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen p-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">About the Project</h2>
      <p className="text-gray-700 text-lg">
        This project explores how predictive AI and IoT acoustic sensors can be used to detect early signs of Chronic Obstructive Pulmonary Disease (COPD) exacerbations, allowing for faster intervention and reduced emergency visits. It’s based on the research paper by Sara Akif, detailing how wearable sensors and machine learning can improve COPD patient outcomes.
      </p>
    </div>
  );
}

function Awareness() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100 min-h-screen p-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">COPD Awareness</h2>
      <p className="text-gray-700 text-lg">
        Chronic Obstructive Pulmonary Disease is a progressive lung disease that makes breathing difficult. It’s a major cause of disability and the fourth leading cause of death worldwide. Many people remain undiagnosed, and awareness is key to early diagnosis and treatment. Recognizing symptoms like chronic cough, wheezing, and shortness of breath can help people seek treatment early and prevent severe complications.
      </p>
    </div>
  );
}

function Telehealth() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100 min-h-screen p-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Telehealth and COPD</h2>
      <p className="text-gray-700 text-lg">
        Telehealth plays a transformative role in managing COPD by enabling continuous patient monitoring and real-time data sharing with healthcare providers. IoT devices like acoustic sensors can track breathing anomalies remotely, and AI algorithms can detect worsening symptoms before they become emergencies. Telehealth empowers patients, reduces hospital visits, and provides clinicians with tools for proactive care.
      </p>
    </div>
  );
}

function Paper() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100 min-h-screen p-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Full Research Paper</h2>
      <pre className="whitespace-pre-wrap text-gray-700 text-base">
Sara Akif
Independent Research

The incorporation of predictive AI within Chronic Obstructive Pulmonary Disease

Chronic Obstructive Pulmonary Disease is a progressive illness that affects millions...
[Continue the rest of the full paper here.]
      </pre>
    </div>
  );
}

export default function COPDWebsite() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/telehealth" element={<Telehealth />} />
        <Route path="/paper" element={<Paper />} />
      </Routes>
    </Router>
  );
}
