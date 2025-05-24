"use client";
import React, { useState, useEffect, useRef } from 'react';

// This object will be used as a temporary lookup to find the department name
// in the 'departments' prop, by matching its value (e.g., "Amazonas")
// with the 'name' field of the department objects from the prop.
const svgIdToNameReference = {
  COAMA: "Amazonas", COANT: "Antioquia", COARA: "Arauca", COATL: "Atlántico", COBOL: "Bolívar",
  COBOY: "Boyacá", COCAL: "Caldas", COCAQ: "Caquetá", COCAS: "Casanare", COCAU: "Cauca",
  COCES: "Cesar", COCHO: "Chocó", COCOR: "Córdoba", COCUN: "Cundinamarca", COGUA: "Guainía",
  COGUV: "Guaviare", COHUI: "Huila", COLAG: "La Guajira", COMAG: "Magdalena", COMET: "Meta",
  CONAR: "Nariño", CONSA: "Norte de Santander", COPUT: "Putumayo", COQUI: "Quindío",
  CORIS: "Risaralda", COSAP: "San Andrés y Providencia", COSAN: "Santander", COSUC: "Sucre",
  COTOL: "Tolima", COVAC: "Valle del Cauca", COVAU: "Vaupés", COVID: "Vichada",
  COBDC: "Bogotá D.C."
};

const tailwindPathClasses = "fill-gray-300 stroke-gray-50 stroke-1 hover:fill-sky-500 cursor-pointer transition-colors duration-150 ease-in-out";

export default function InteractiveColombiaMap({ departments }) { // Added departments prop
  const [mapSvg, setMapSvg] = useState(null);
  const [hoveredDept, setHoveredDept] = useState(null);
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const svgContainerRef = useRef(null);

  useEffect(() => {
    fetch('/assets/mapas/colombia.svg')
      .then(response => response.text())
      .then(data => {
        setMapSvg(data);
      })
      .catch(error => console.error("Error fetching SVG:", error));
  }, []);

  useEffect(() => {
    if (!mapSvg || !svgContainerRef.current || !departments || departments.length === 0) return;

    const svgElement = svgContainerRef.current.querySelector("svg");
    if (!svgElement) return;

    const paths = svgElement.querySelectorAll("path[class*='sm_state_CO']");

    const handleMouseEnter = (event, deptIdFromSvg, deptNameFromProp) => {
      setHoveredDept(deptIdFromSvg); // deptIdFromSvg is like 'AMA', 'ANT'
      setTooltipText(deptNameFromProp || `ID: ${deptIdFromSvg}`);
    };

    const handleMouseLeave = () => {
      setHoveredDept(null);
      setTooltipText('');
    };

    const handleMouseMove = (event) => {
      setTooltipPosition({ x: event.clientX, y: event.clientY });
    };

    paths.forEach(path => {
      const originalClasses = path.getAttribute('class') || '';
      if (!originalClasses.includes('fill-gray-300')) {
          path.setAttribute('class', `${originalClasses} ${tailwindPathClasses}`);
      }
      
      const deptClass = originalClasses.split(' ').find(cls => cls.startsWith('sm_state_CO'));
      if (!deptClass) return;
      
      const svgDeptId = deptClass.replace('sm_state_', ''); // e.g., COAMA, COANT
      const referenceName = svgIdToNameReference[svgDeptId]; // Get English name like "Amazonas"
      
      let actualDeptName = svgDeptId; // Fallback to ID
      if (referenceName) {
        const department = departments.find(d => d.name && d.name.trim().toLowerCase() === referenceName.trim().toLowerCase());
        if (department) {
          actualDeptName = department.name; // Use the name from the prop
        } else {
          actualDeptName = referenceName; // Fallback to the English name from our map if not found in prop
        }
      }
      
      const newPath = path.cloneNode(true);
      newPath.addEventListener('mouseenter', (e) => handleMouseEnter(e, svgDeptId, actualDeptName));
      newPath.addEventListener('mouseleave', handleMouseLeave);
      newPath.addEventListener('mousemove', handleMouseMove);
      
      if (path.parentNode) {
        path.parentNode.replaceChild(newPath, path);
      }
    });
    
    return () => {
        if (svgContainerRef.current) {
            const currentSvgElement = svgContainerRef.current.querySelector("svg");
            if (currentSvgElement) {
                 const currentPaths = currentSvgElement.querySelectorAll("path[class*='sm_state_CO']");
                 currentPaths.forEach(p => {
                    // Listeners are on clones, direct removal here might not be straightforward
                 });
            }
        }
    };

  }, [mapSvg, departments]); // Re-run when mapSvg or departments prop changes

  return (
    <div className="w-full h-auto relative">
      <div 
        ref={svgContainerRef}
        className="interactive-map-svg-container"
        dangerouslySetInnerHTML={{ __html: mapSvg || '' }} 
      />
      {tooltipText && (
        <div
          style={{
            position: 'fixed',
            top: tooltipPosition.y,
            left: tooltipPosition.x,
            transform: 'translate(15px, 15px)',
            pointerEvents: 'none', 
          }}
          className="bg-neutral text-neutral-content p-2 rounded shadow-lg text-sm z-50"
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
}
