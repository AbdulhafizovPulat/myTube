import { CheckCircle } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import { Link } from "react-router-dom";

const VideoCard = ({ data }) => {
  return (
    <Card
      sx={{
        width: { xs: "550px", sm: "320px", md: "340px" },
        height: "380px",
        boxShadow: 0,
        borderRadius: 0,
        background: "#07575b",
        color: "#c4dfe6",
        position: "relative",
      }}
    >
      <Link to={`/video-detail/${data.id.videoId}`}>
        <CardMedia
          image={data?.snippet?.thumbnails?.high?.url}
          sx={{
            width: "100%",
            height: "180px",
          }}
          alt={data?.snippet?.title}
        />
      </Link>
      <CardContent>
        <>
          <Typography sx={{ opacity: "0.7" }}>
            {moment(data?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Link to={`/video-detail/${data.id.videoId}`}>
            <Typography variant="subtitle1" fontWeight={"bold"}>
              {data?.snippet?.title.slice(0, 50)}
            </Typography>
          </Link>
          <Typography sx={{ opacity: "0.8" }} variant="subtitle2">
            {data?.snippet?.description.slice(0, 70)}
          </Typography>
        </>
        <Link to={`/channel/${data?.snippet?.channelId}`}>
          <Stack
            direction={"row"}
            position={"absolute"}
            left={"15px"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar
              alt={data?.snippet?.channelTitle}
              src={data?.snippet?.thumbnails?.high?.url}
            />
            <Typography variant="subtitle2" fontWeight={"bold"}>
              {data?.snippet?.channelTitle}
            </Typography>
            <CheckCircle fontSize="12px" color="gray" />
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
