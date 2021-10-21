import { Container } from "@mui/material";
import { GameTimeline } from "../features/timeline";

export default function Game() {
  return (
    <Container disableGutters>
      <GameTimeline></GameTimeline>
    </Container>
  );
}
