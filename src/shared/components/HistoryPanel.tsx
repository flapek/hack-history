import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

export default function HistoryPanel({
  open,
  history,
  handleClose,
}: {
  open: boolean;
  history: string;
  handleClose: () => void;
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="hint-dialog-title"
      aria-describedby="hint-dialog-description">
      <DialogTitle id="hint-dialog-title">History</DialogTitle>
      <DialogContent>
        <DialogContentText id="hint-dialog-description">{history}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
