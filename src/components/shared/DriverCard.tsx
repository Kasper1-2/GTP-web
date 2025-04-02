import {useState, useEffect } from 'react';
import './DriverCard.css';

interface DriverCardProps {
  name: string;
  gear: string[];
}

const DriverCard = ({ name, gear }: DriverCardProps) => {
    const [showGear, setShowGear] = useState(false);

    useEffect(() =>{
        if (showGear) {
        const timer = setTimeout(() => setShowGear(false), 5000); 
        return () => clearTimeout(timer);    
        } 
    }, [showGear]);

    return (
        <div className="driver-card" onClick={() => setShowGear(prev => !prev)}>
          {showGear ? (
            <div className="driver-gear-view">
              <div className="driver-label">Equipo:</div>
              <ul className="driver-gear">
                {gear.length > 0 ? gear.map((item, idx) => (
                  <li key={idx}>{item}</li>
                )) : (
                  <li>No gear listed</li>
                )}
              </ul>
            </div>
          ) : (
            <div className="driver-name-view">
              <div className="driver-name">{name}</div>
              <p className="tap-hint">Click to view gear</p>
            </div>
          )}
        </div>
      );
    };
    
    export default DriverCard;