import React, { useState } from 'react';
import './App.css';
import CaritaFeliz from './Multimedia/CaritaFeliz.png';
import CaritaNeutral from './Multimedia/CaritaNeutral.webp';
import CaritaEnojada from './Multimedia/CaritaEnojada.webp';

function App() {
  const [selectedService, setSelectedService] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleVote = (emoji) => {
    if (selectedService) {
      setFeedback(`Muchas gracias por su votación sobre ${selectedService}, nos ayuda mucho.`);
      // Aquí se enviaría la votación a la base de datos
      console.log(`Votación: ${emoji} para ${selectedService}`);
    } else {
      alert('Por favor, seleccione un servicio antes de votar.');
    }
  };

  return (
    <div className="App">
      <h1>Sistema de Valoración del Casino</h1>
      <div className="emoji-section">
        <img src={CaritaFeliz} alt="Carita Feliz" onClick={() => handleVote('feliz')} />
        <img src={CaritaNeutral} alt="Carita Neutral" onClick={() => handleVote('neutral')} />
        <img src={CaritaEnojada} alt="Carita Enojada" onClick={() => handleVote('enojada')} />
      </div>

      <div className="service-selection">
        <h3>Seleccione el servicio que desea evaluar:</h3>
        <button onClick={() => setSelectedService('Restaurante')}>Restaurante</button>
        <button onClick={() => setSelectedService('Tragamonedas')}>Tragamonedas</button>
        <button onClick={() => setSelectedService('Servicio RH')}>Servicio RH</button>
      </div>

      <div className="feedback">
        {feedback && <h3>{feedback}</h3>}
      </div>
    </div>
  );
}

export default App;
