import { useEffect } from 'react';
import BrailleGrid from './BrailleGrid';

export default function Home() {
  // const brailleCharacters = [
  //   '⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊', '⠚', // Braille digits 1-0
  //   '⠼⠁', '⠼⠃', '⠼⠉', '⠼⠙', '⠼⠑', '⠼⠋', '⠼⠛', '⠼⠓', '⠼⠊', '⠼⠚', // Braille digits 11-20
  //   // Add more braille characters as needed
  // ];

  // const handleTouchStart = (brailleChar) => {
  //   // Find the index of the braille character
  //   const charIndex = brailleCharacters.findIndex(char => char === brailleChar);
  //   if (charIndex !== -1) {
  //     // Vibrate for 100ms
  //     navigator.vibrate(100);
  //   }
  // };

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>test</h1>
      <BrailleGrid />
    </main>
  );
}
