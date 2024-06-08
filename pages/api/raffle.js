import { exec } from 'child_process';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.resolve(process.cwd(), 'data/raffle_entries.xlsx');
  const scriptPath = path.resolve(process.cwd(), 'raffle.py');

  exec(`python ${scriptPath} ${filePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing Python script:', error);
      res.status(500).json({ error: error.message });
      return;
    }
    if (stderr) {
      console.error('Standard error from Python script:', stderr);
      res.status(500).json({ error: stderr });
      return;
    }
    const winner = stdout.trim();  // Capture and trim the output to get the winner's name
    console.log('Winner:', winner);  // Log the winner for debugging
    res.status(200).json({ winner });
  });
}
