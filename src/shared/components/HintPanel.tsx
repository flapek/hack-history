import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

export default function HintPanel({
  open,
  hints,
  handleClose,
}: {
  open: boolean;
  hints: string[];
  handleClose: () => void;
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="hint-dialog-title"
      aria-describedby="hint-dialog-description">
      <DialogTitle id="hint-dialog-title">Hints</DialogTitle>
      <DialogContent>
        <DialogContentText id="hint-dialog-description">{hints[1]}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
