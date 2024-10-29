import { Box, Container, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getChannelQuery, getSearchQuery } from "../../queries";
import { ChannelCard, VideosList } from "../";

const Channel = () => {
  const { id } = useParams();

  const { data: channel } = useQuery({
    ...getChannelQuery({
      id: id,
      part: "snippet,statistics",
    }),
  });
  const { data: videos } = useQuery({
    ...getSearchQuery({
      channelId: id,
      part: "snippet",
      order: "date",
      maxResults: "30",
    }),
  });

  const channelAbout = channel?.data?.items[0];

  return (
    <Stack sx={{ marginTop: "1rem", alignItems: "center" }}>
      <Box
        sx={{
          width: "100%",
          height: "20vh",
          backgroundImage: `url(${channelAbout?.brandingSettings?.image?.bannerExternalUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <Box>
        <ChannelCard data={channelAbout} marginTop={"-100px"} />
      </Box>
      <Container sx={{ width: "100%" }}>
        <VideosList data={videos} />
      </Container>
    </Stack>
  );
};

export default Channel;
