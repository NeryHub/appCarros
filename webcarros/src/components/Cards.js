import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('https://nodejs-neriasg24.replit.app/');
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div>
      {cars.map((car, index) => (
        <Card key={index} sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`/static/images/cars/${car.model.toLowerCase()}.jpg`} // Ajuste para suas imagens
              alt={car.model}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {car.brand} {car.model}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {/* Adicione qualquer descrição ou informação adicional aqui */}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
