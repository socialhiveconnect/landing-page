import React from 'react';
import SVGColmeiaComponent from '@/app/styles/patterns/SVGColmeiaComponent';

interface TreePresentationProps {
  treeLevels: number[];
}

const TreePresentation: React.FC<TreePresentationProps> = ({ treeLevels }) => {
  return (
    <div className="flex flex-col items-center -space-y-6">
      {treeLevels.map((count, levelIndex) => (
        <div key={levelIndex} className="flex justify-center -space-x-3">
          {Array.from({ length: count }).map((_, index) => (
            <SVGColmeiaComponent key={index} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TreePresentation;