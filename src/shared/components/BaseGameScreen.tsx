import { Container, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HintPanel, HistoryPanel } from '.';
import { Hint } from '../types';

export default function BaseGameScreen({
  hints = [],
  history = '',
  children,
}: {
  hints?: Hint[];
  history?: string;
  children: React.ReactNode;
}) {
  let browserHistory = useHistory();
  const [open, setOpen] = useState(false);
  const [openHintPanel, setOpenHintPanel] = useState(false);
  const [openHistoryPanel, setOpenHistoryPanel] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleHintPanel = () => {
    setOpenHintPanel(!openHintPanel);
  };

  const handleHistoryPanel = () => {
    setOpenHistoryPanel(!openHistoryPanel);
  };

  const redirect = () => {
    browserHistory.goBack();
  };

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
      {children}
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
