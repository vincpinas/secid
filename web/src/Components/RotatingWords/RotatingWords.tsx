import React from 'react';
import './RotatingWords.scss';

interface RWProps {
  wordsList: string[];
  duration?: number;
}

function RotatingWords({ wordsList, duration }: RWProps) {
  const id = (() => {
    var d = new Date().getTime();
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16;
      if (d > 0) {
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c === 'x' ? r : ((r & 0x3) | 0x8)).toString(16);
    });
  })();

  const initAnimation = () => {
    let finalized_animation = `@keyframes spin_words_${id} {\n`;
    let counter = 0;
    let totalDuration = 70 / wordsList.length;

    wordsList.forEach((w, index: number) => {
      counter += totalDuration
      finalized_animation += `${counter}% { transform: translateY(-${index * 100}%) }\n`
    })

    counter += 15
    finalized_animation += `${counter}% { transform: translateY(-${(wordsList.length - 1) * 100}%) }\n`

    finalized_animation += '}'
    return finalized_animation;
  }

  const spinWords = {
    animation: `spin_words_${id} ${wordsList.length + (duration ? duration : 10)}s infinite` 
  }

  return (
    <span className='RWContainer'>
      <style>
        {initAnimation()}
      </style>
      <span className='RWWrapper'>
        {
          wordsList.map((word: string, index: number) => {
            return <span key={`RWList_${id}-${index}:${word}`} className='RWItem' style={spinWords}>
              {word}
            </span>
          })
        }
      </span>
    </span>
  )
}

export default RotatingWords;
