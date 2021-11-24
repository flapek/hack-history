import {
  Box,
  Button,
  Container,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  TextField,
  Typography,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HintPanel, HistoryPanel, StyledItem } from '.';
import { CipherType, Hint } from '../types';
import { useAppSelector } from '../../app';
import { RootState } from '../../app/types';
import { useSnackbar } from 'notistack';
import { getUsername } from '../../features/user/userSlice';
import { Cipher } from '../functions';

export default function BaseGameScreen({
  cipherType,
  getHints,
  history = '',
  children,
}: {
  cipherType: CipherType;
  getHints: (state: RootState) => Hint[];
  history?: string;
  children?: React.ReactNode;
}) {
  const username = useAppSelector(getUsername);
  let hints = useAppSelector(getHints);
  let decryptedUsername = Cipher.encrypt(cipherType, username);
  let browserHistory = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const [openHintPanel, setOpenHintPanel] = useState(false);
  const [openHistoryPanel, setOpenHistoryPanel] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleHintPanel = () => setOpenHintPanel(!openHintPanel);

  const handleHistoryPanel = () => setOpenHistoryPanel(!openHistoryPanel);

  const handleClick = () => {
    input.trim().toLocaleLowerCase() === username
      ? enqueueSnackbar('This is a success message!', {
          variant: 'success',
        })
      : enqueueSnackbar('This is a error message!', {
          variant: 'error',
        });
  };

  const redirect = () => browserHistory.goBack();

  function onChange(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setInput(e.currentTarget.value);
  }

  const actions = [
    {
      icon: <ArrowBackIosNewSharpIcon />,
      name: 'Back',
      onClick: () => {
        redirect();
      },
    },
    {
      icon: <InfoIcon />,
      name: 'Tips',
      onClick: () => {
        handleHintPanel();
      },
    },
    {
      icon: <HistoryEduIcon />,
      name: 'History',
      onClick: () => {
        handleHistoryPanel();
      },
    },
  ];

  return (
    <Container maxWidth={false}>
      <Box sx={{ flexGrow: 1 }}>
        <StyledItem>
          <Typography variant="h4">Decrypt the encoded text</Typography>
        </StyledItem>
        <StyledItem>
          <Typography>{decryptedUsername}</Typography>
          <TextField size="small" onChange={onChange} />
          <Button onClick={handleClick} variant="outlined">
            Check
          </Button>
        </StyledItem>
        {children}
      </Box>
      <SpeedDial
        ariaLabel="Game helper"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleOpen}
        onOpen={handleOpen}
        open={open}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
      <HistoryPanel open={openHistoryPanel} history={history} handleClose={handleHistoryPanel} />
      <HintPanel open={openHintPanel} hints={hints} handleClose={handleHintPanel} />
    </Container>
  );
}
