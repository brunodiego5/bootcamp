import React, { useState, useEffect } from 'react';

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  /* Quando array vazia (não vai observar nenhum state) executa 1 vez = componentdidmount */
  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');

    if (storageTechs) {
      setTechs(JSON.parse(storageTechs));
    }

    /* componentdidunmount
    return () => {}; */
  }, []);

  /* toda mudança no state techs executa este effect = componentdidupdate */
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));

    /* componentdidunmount
    return () => {}; */
  }, [techs]);

  return (
    <>
      <ul>
        {techs.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adcionar
      </button>
    </>
  );
}

export default App;
