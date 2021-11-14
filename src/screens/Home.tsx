import { Grid, Paper, Typography, FormGroup, FormControl, TextField, Button } from '@mui/material';
import { SxProps } from '@mui/system';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app';
import { getUsername, rename } from '../features/user/userSlice';

const paperPadding: SxProps = {
  padding: '20px 50px 20px 50px',
};

export default function Home() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [username, setUsername] = useState(useAppSelector(getUsername));

  function redirect() {
    dispatch(rename(username));
    history.push('timeline');
  }

  function onChange(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setUsername(e.currentTarget.value);
  }

  return (
    <Grid
      container
      sx={{ display: 'flex', alignItems: 'center' }}
      rowSpacing={5}
      justifyContent="center">
      <Grid item xs={10} md={8} lg={8}>
        <Paper elevation={15} sx={paperPadding}>
          <Typography align="center" gutterBottom variant="h4">
            History of cryptography
          </Typography>
          <Typography align="center" gutterBottom variant="body1">
            A simple game showing how ciphers have changed over the years.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={8} lg={6}>
        <Paper elevation={15} sx={paperPadding}>
          <Typography align="center" gutterBottom variant="h5">
            Enter your username using alphabeth below:
          </Typography>
          <Typography align="center" variant="h6">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </Typography>
          <FormGroup>
            <FormControl>
              <TextField
                id="standard-helperText"
                label="Username"
                helperText="This is your username using during the game"
                variant="standard"
                value={username}
                onChange={onChange}
              />
            </FormControl>
            <Button variant="contained" onClick={redirect}>
              Play
            </Button>
          </FormGroup>
        </Paper>
      </Grid>
    </Grid>
  );
}
