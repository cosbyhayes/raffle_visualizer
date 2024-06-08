import { useState } from 'react';

export default function Home() {
  const [winner, setWinner] = useState(null);

  const fetchWinner = async () => {
    const res = await fetch('/api/raffle');
    const data = await res.json();
    setWinner(data.winner);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Art Raffle</h1>
      <button 
        onClick={fetchWinner} 
        style={styles.button}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        Press Start
      </button>
      {winner && (
        <div style={styles.winnerBox}>
          <div style={styles.winnerText}>The winner is:</div>
          <div style={styles.winnerName}>{winner}</div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#2a2a2a',
    fontFamily: 'Press Start 2P, cursive',  // Use the retro font
    color: '#fff',
    textShadow: '2px 2px 0 #000',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.5em',
    cursor: 'pointer',
    backgroundColor: '#4caf50',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    textShadow: '2px 2px 0 #000',
    transition: 'transform 0.2s',
  },
  winnerBox: {
    marginTop: '20px',
    padding: '20px',
    border: '5px solid #fff',
    borderRadius: '10px',
    backgroundColor: '#000',
    textAlign: 'center',
  },
  winnerText: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  winnerName: {
    fontSize: '2em',
    color: '#4caf50',
  },
};
