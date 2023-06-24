import './App.css';
import { Button, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2979ff'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} justifyContent="space-evenly" alignItems="center">
        <Grid item xs={6}>
          <Button variant="contained" color="primary" sx={{ ml: "50%", mr:'auto'}}>
            Marian
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" sx={{ ml: "50%", mr:'auto'}}>
            Joel
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
