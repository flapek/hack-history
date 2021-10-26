import { Container, Fab, Zoom } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { green } from '@mui/material/colors';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import React from 'react';
import { useHistory } from 'react-router-dom';

const fabStyle: SxProps = {
  position: 'absolute',
  bottom: 16,
  right: 16,
  color: 'white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

export default function BaseGameScreen({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  let history = useHistory();

  const redirect = () => {
    history.goBack();
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Container maxWidth={false}>
      {children}
      <Zoom
        in
        timeout={transitionDuration}
        style={{
          transitionDelay: `${transitionDuration.exit}ms`,
        }}
        unmountOnExit>
        <Fab
          sx={fabStyle}
          aria-label="back"
          color="secondary"
          component="button"
          onClick={redirect}>
          <ArrowBackIosNewSharpIcon />
        </Fab>
      </Zoom>
    </Container>
  );
}
