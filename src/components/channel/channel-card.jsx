import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ChannelCard = ({ data, marginTop }) => {
  console.log(data);
  return (
    <Card
      sx={{
        width: { xs: "550px", sm: "320px", md: "340px" },
        height: "380px",
        boxShadow: 0,
        borderRadius: 0,
        background: "transparent",
        color: "#c4dfe6",
        marginTop: marginTop,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <CardMedia
          image={data?.snippet?.thumbnails?.high?.url}
          sx={{
            width: "250px",
            height: "250px",
            borderRadius: "100%",
          }}
          alt={data?.snippet?.title}
        />
        <Link to={`/channel/${data?.snippet?.channelId}`}>
          <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
            <Typography variant="subtitle2" fontWeight={500}>
              {data?.snippet?.channelTitle
                ? data?.snippet?.channelTitle
                : data?.snippet?.title}
            </Typography>
            <CheckCircle fontSize="12px" color="gray" />
          </Stack>
        </Link>
        {data?.statistics?.subscriberCount && (
          <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
            <Typography variant="subtitle2" fontWeight={500}>
              {formatSubscribersCount(data?.statistics?.subscriberCount)}{" "}
              подписчиков
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default ChannelCard;

function formatSubscribersCount(count) {
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(".", ",") + " тыс.";
  }
  return count + "";
}
