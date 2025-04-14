import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { FaInstagram, FaTwitch } from 'react-icons/fa';
import './DriverCard.css';

interface DriverCardProps {
  name: string;
  gear: string[];
  socials?: {
    youtube?: string;
    instagram?: string;
    facebook?: string;
  };
}

const DriverCard = ({ name, gear, socials }: DriverCardProps) => {
  const [showGear, setShowGear] = useState(false);

  useEffect(() => {
    if (showGear) {
      const timer = setTimeout(() => setShowGear(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showGear]);

  return (
    <Card className="driver-card" onClick={() => setShowGear((prev) => !prev)}>
      <CardContent style={{ position: 'relative' }}>
        {showGear ? (
          <>
            <Typography className="driver-label">Equipo:</Typography>
            <ul className="driver-gear">
              {gear.length > 0 ? gear.map((item, idx) => (
                <li key={idx}>{item}</li>
              )) : (
                <li>No gear listed</li>
              )}
            </ul>
          </>
        ) : (
          <>
            <Box className="driver-name-view">
              <Typography variant="h6" className="driver-name">{name}</Typography>
              <Typography variant="body2" className="tap-hint">Click to view gear</Typography>
            </Box>
  
            {socials && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 100,
                  right: 5,
                  display: 'flex',
                  gap: 1,
                  zIndex: 10,
                }}
              >
                {socials.instagram && (
                  <a href={socials.instagram} target="_blank" rel="noreferrer">
                    <FaInstagram color="#fe6218" />
                  </a>
                )}
                {socials.twitch && (
                  <a href={socials.twitch} target="_blank" rel="noreferrer">
                    <FaTwitch color="#fe6218" />
                  </a>
                )}
              </Box>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
  
  
};

export default DriverCard;
