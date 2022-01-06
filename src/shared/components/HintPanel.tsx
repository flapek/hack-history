import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import React, { SyntheticEvent, useState } from 'react';
import { isLink } from '../functions';
import { Hint } from '../types';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  hint: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { hint, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {isLink(hint) ? (
            <Link href={hint}>
              <Typography>{hint}</Typography>
            </Link>
          ) : (
            <Typography>{hint}</Typography>
          )}
        </Box>
      )}
    </div>
  );
}

export default function HintPanel({
  open,
  hints,
  handleClose,
}: {
  open: boolean;
  hints: Hint[];
  handleClose: () => void;
}) {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="hint-dialog-title"
      aria-describedby="hint-dialog-description">
      <DialogTitle id="hint-dialog-title">Hints</DialogTitle>
      <DialogContent>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="hints tabs">
            {hints.map((_, index) => (
              <Tab label={'Hint ' + ++index} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>
        {hints.map((hint, index) => (
          <TabPanel value={value} index={index} hint={hint.description}></TabPanel>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
