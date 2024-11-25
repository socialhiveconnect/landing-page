import React from 'react';
import SVGColmeiaComponent from '@/app/styles/patterns/SVGColmeiaComponent';

interface TreePresentationProps {
  treeLevels: number[]; // Define o tipo do parâmetro treeLevels como um array de números
}

const TreePresentation: React.FC<TreePresentationProps> = ({ treeLevels }) => {
  return (
    <div className="flex flex-col items-center -space-y-6"> {/* Espaçamento vertical negativo */}
      {treeLevels.map((count, levelIndex) => (
        <div key={levelIndex} className="flex justify-center -space-x-3"> {/* Espaçamento horizontal negativo */}
          {Array.from({ length: count }).map((_, index) => (
            <SVGColmeiaComponent key={index} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TreePresentation;