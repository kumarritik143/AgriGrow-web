import { useState } from 'react';
import './App.css';

function App() {
  // State to manage input value
  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  // Handles input change
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedText(text);
    setText('');
  };

  return (
    <div className="app-container">
      <h1>React + Vite Starter App 🚀</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter something..."
          value={text}
          onChange={handleChange}
          className="input-box"
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {submittedText && <p className="output-text">You entered: {submittedText}</p>}
    </div>
  );
}

export default App;
