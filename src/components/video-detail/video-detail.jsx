import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ForumIcon from "@mui/icons-material/Forum";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useQuery } from "@tanstack/react-query";
import ReactPlayer from "react-player";
import { getVideoQuery, getSearchQuery } from "../../queries";
import { useParams, Link } from "react-router-dom";
import { colors } from "../../constants/color";
import { CheckCircle } from "@mui/icons-material";
import { useState } from "react";
import moment from "moment";

const VideoDetail = () => {
  const { id } = useParams();
  const [descriptionCount, setDescriptionCount] = useState(500);

  const { data: videoById } = useQuery({
    ...getVideoQuery({
      part: "contentDetails,snippet,statistics",
      id: id,
    }),
  });
  const { data: suggestedVideo } = useQuery({
    ...getSearchQuery({
      part: "snippet",
      relatedToVideoId: id,
      type: "video",
    }),
  });
  const videoData = videoById?.data?.items[0];
  const recomendateVideos = suggestedVideo?.data?.items;

  const descriptionHandle = () => {
    setDescriptionCount(descriptionCount === 500 ? 2000 : 500);
  };
  return (
    <Box
      display={"flex"}
      marginBottom={"5rem"}
      sx={{
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-start" },
      }}
      justifyContent={"space-between"}
    >
      <Box
        sx={{
          marginTop: "24px",
          width: "65%",
          height: { xs: "100%", md: "85vh" },
          display: { md: "block" },
        }}
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          width={"100%"}
          height={"70%"}
        />
        <Stack direction={"row"} justifyContent={"space-between"}>
          {/* Title  */}
          <Box width={"75%"}>
            <Typography
              sx={{
                fontSize: "1.5rem",
                marginY: "10px",
                color: colors.primary,
              }}
            >
              {videoData?.snippet?.title}
            </Typography>
            <Link to={`/channel/${videoData?.snippet?.channelId}`}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={"5px"}
                sx={{ color: colors.primary }}
              >
                <Avatar
                  alt={videoData?.snippet?.channelTitle}
                  src={videoData?.snippet?.thumbnails?.high?.url}
                />
                <Typography variant="subtitle2" fontWeight={"bold"}>
                  {videoData?.snippet?.channelTitle}
                </Typography>
                <CheckCircle fontSize="12px" />
              </Stack>
            </Link>
          </Box>
          <Stack
            width={"25%"}
            direction={"row"}
            flexWrap={"nowrap"}
            margin={"20px 0"}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            color={colors.primary}
          >
            <Stack
              sx={{
                textAlign: "center",
                fontSize: "11px",
                flexDirection: "row",
                alignItems: "center",
                gap: "2px",
              }}
            >
              <FavoriteIcon sx={{ fontSize: "18px", cursor: "pointer" }} />
              <p>{formatSubscribersCount(videoData?.statistics?.likeCount)}</p>
            </Stack>
            <Stack
              sx={{
                textAlign: "center",
                fontSize: "11px",
                flexDirection: "row",
                alignItems: "center",
                gap: "2px",
              }}
            >
              <ForumIcon sx={{ fontSize: "18px", cursor: "pointer" }} />
              <p>
                {formatSubscribersCount(videoData?.statistics?.commentCount)}
              </p>
            </Stack>
            <Stack
              sx={{
                textAlign: "center",
                fontSize: "11px",
                flexDirection: "row",
                alignItems: "center",
                gap: "2px",
              }}
            >
              <VisibilityIcon sx={{ fontSize: "18px", cursor: "pointer" }} />
              <p>{formatSubscribersCount(videoData?.statistics?.viewCount)}</p>
            </Stack>
          </Stack>
        </Stack>
        {/* Comments */}
        <Stack
          sx={{
            background: colors.orange,
            borderRadius: "24px",
            padding: "20px",
            margin: "15px 0",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.8rem",
              lineHeight: "1.5rem",
              color: colors.primary,
            }}
          >
            {`${videoData?.snippet?.description.slice(0, descriptionCount)}`}
            {videoData?.snippet?.description?.length > 500 && (
              <Button
                sx={{
                  fontSize: "0.7rem",
                  lineHeight: "1.5rem",
                }}
                onClick={descriptionHandle}
              >
                {descriptionCount === 500 ? "...еще" : "Свернуть"}
              </Button>
            )}
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          width: { sm: "65%", md: "30%" },
          height: "100vh",
          display: { md: "block" },
          overflow: "auto",
        }}
      >
        {recomendateVideos?.map((item) => (
          <Stack spacing={1} key={item.id.videoId}>
            <Card
              sx={{
                height: "180px",
                boxShadow: 0,
                borderRadius: 0,
                background: "transparent",
                color: "#c4dfe6",
              }}
            >
              <CardContent
                sx={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}
              >
                <Link to={`/video-detail/${item.id.videoId}`}>
                  <CardMedia
                    image={item?.snippet?.thumbnails?.high?.url}
                    sx={{
                      width: "90%",
                      height: "150px",
                      objectFit: "cover",
                    }}
                    alt={item?.snippet?.title}
                  />
                </Link>
                <Stack spacing={1}>
                  <Link to={`/video-detail/${item.id.videoId}`}>
                    <Typography
                      variant="subtitle1"
                      fontWeight={"bold"}
                      sx={{ fontSize: "13px" }}
                    >
                      {item?.snippet?.title.slice(0, 60)}
                    </Typography>
                  </Link>
                  <Typography
                    sx={{ opacity: "0.8", fontSize: "13px" }}
                    variant="subtitle2"
                  >
                    {item?.snippet?.channelTitle.slice(0, 20)}
                  </Typography>
                  <Typography sx={{ opacity: "0.7", fontSize: "11px" }}>
                    {moment(item?.snippet?.publishedAt).fromNow()}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

export default VideoDetail;

function formatSubscribersCount(count) {
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(".", ",") + " тыс.";
  }
  return count + "";
}
