// SvgDisplay.js
import React, { useEffect, useState } from 'react';

const SvgDisplay = () => {
  const [svgUrls, setSvgUrls] = useState([]);

  useEffect(() => {
    // Dynamically load all SVGs from the public/svgs folder
    const fetchSvgFiles = async () => {
      const svgsContext = import.meta.glob('../../assets/svg/*.svg');
      const svgModules = await Promise.all(Object.values(svgsContext).map((module) => module()));
        console.log("svgModules" , svgModules);
        
      const svgPaths = Object.keys(svgsContext).map((path) =>
        path.replace('../../', '/src/')
      );
      setSvgUrls(svgPaths);
    };

    fetchSvgFiles();
  }, []);
  const imgStyle = {
    filter: "invert(22%) sepia(92%) saturate(7484%) hue-rotate(351deg) brightness(94%) contrast(107%)",
  };
  return (
    <div className='bg-gray-500 text-white gap-4'>
      {svgUrls.map((svgUrl, index) => (
        <div className='flex gap-2'>
        <img src={svgUrl} alt={`SVG ${index}`} key={index} style={imgStyle} className='w-10 h-10' />
        <span>{svgUrl.replace('/src//assets/svg/', '')}</span>
        </div>
      ))}
    </div>
  );
};

export default SvgDisplay;
