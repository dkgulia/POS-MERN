// Homepage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import ItemList from '../Components/ItemList'; // Adjust the path as necessary

const Homepage = () => {
  const [itemsData, setItemsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [spacing, setSpacing] = useState(2);

  useEffect(() => {
    const getAllItems = async () => {
      try {
        console.log('Fetching data...');
        const response = await axios.get('http://localhost:1506/api/items/get-item');
        console.log('Response received:', response);
        setItemsData(response.data);
        console.log('Data:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    getAllItems();
  }, []);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <>
      <h1>Homepage</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Grid container spacing={spacing}>
          {itemsData.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <ItemList item={item} />
            </Grid>
          ))}
        </Grid>
      )}
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Spacing</FormLabel>
            <RadioGroup
              name="spacing"
              aria-label="spacing"
              value={spacing.toString()}
              onChange={handleChange}
              row
            >
              {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
                <FormControlLabel
                  key={value}
                  value={value.toString()}
                  control={<Radio />}
                  label={value.toString()}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Paper>
      </Grid>
    </>
  );
};

export default Homepage;
