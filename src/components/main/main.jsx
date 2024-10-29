import { Container, Stack, Typography, Box } from "@mui/material";
import { colors } from "../../constants/color";
import Categories from "../category/categories";
import VideosList from "../videos/videos-list";
import { useStore } from "../../store/data-store";
import { useQuery } from "@tanstack/react-query";
import { getSearchQuery } from "../../queries";

const Main = () => {
  const selectedCategory = useStore((state) => state.navCategories);

  const { data } = useQuery({
    ...getSearchQuery({
      maxResults: "48",
      part: "snippet",
      q: selectedCategory,
    }),
  });

  return (
    <Stack>
      <Categories />
      <Box sx={{ height: "90vh" }} p={2}>
        <Container maxWidth="90%" sx={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
          <Typography variant="h4" fontWeight={"bold"} color={colors.orange}>
            {selectedCategory}{" "}
            <span style={{ color: colors.primary }}>{"videos"}</span>
          </Typography>
          <VideosList data={data} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
