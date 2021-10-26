import { Grid, Paper, Typography, FormGroup, FormControl, TextField } from '@mui/material';
import { SxProps } from '@mui/system';

const paperPadding: SxProps = {
  padding: '20px 50px 20px 50px',
};

export default function Home() {
  return (
    <Grid container rowSpacing={5} justifyContent="center">
      <Grid item xs={10} md={8} lg={8}>
        <Paper elevation={15} sx={paperPadding}>
          <Typography align="center" gutterBottom variant="h4">
            History of cryptography
          </Typography>
          <Typography align="center" gutterBottom variant="body1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sapiente doloribus
            quae voluptatibus sed autem, dolore quas aut, nobis provident laudantium voluptas, esse
            optio facilis at impedit unde? Maiores, corrupti.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={8} lg={6}>
        <Paper elevation={15} sx={paperPadding}>
          <Typography align="center" gutterBottom variant="h4">
            History of cryptography
          </Typography>
          <FormGroup>
            <FormControl>
              <TextField
                id="standard-helperText"
                label="Username"
                helperText="This is your username using during the game"
                variant="standard"
              />
            </FormControl>
          </FormGroup>
        </Paper>
      </Grid>
    </Grid>
  );
}
