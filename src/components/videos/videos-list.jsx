import { Stack } from "@mui/material";
import VideoCard from "./video-card";
import ChannelCard from "../channel/channel-card";

const VideosList = ({ data }) => {
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      width={"100%"}
      gap={5}
      justifyContent={"space-between"}
      marginTop={2}
    >
      {data?.data?.items?.map((item) => (
        <>
          {item.id.videoId && <VideoCard key={item.id.videoId} data={item} />}
          {item.id.channelId && (
            <ChannelCard key={item.id.videoId} data={item} />
          )}
        </>
      ))}
    </Stack>
  );
};

export default VideosList;
