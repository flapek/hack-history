import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { TimelineOppositeContent } from "@mui/lab";
import timelines from "./timelines";
import { Link } from "react-router-dom";
import { useRandomColor } from "../../hooks";

export default function GameTimeline() {
  const { generateNext } = useRandomColor();

  return (
    <Timeline position="alternate">
      {timelines.map((timeline, idx) => (
        <TimelineItem key={idx}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align={idx % 2 === 0 ? "right" : "left"}
            variant="body2"
            color="text.secondary"
          >
            {timeline.year}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color={generateNext()} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Link to={timeline.pathTo}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={timeline.image}
                    alt={timeline.alt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {timeline.title}
                    </Typography>
                    <Typography variant="body2">
                      {timeline.shortDescription}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}