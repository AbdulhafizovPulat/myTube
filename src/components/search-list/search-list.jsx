import { Box, Container, Typography } from "@mui/material";
import { colors } from "../../constants/color";
import { useStore } from "../../store/data-store";
import { useQuery } from "@tanstack/react-query";
import { getSearchQuery } from "../../queries";
import VideosList from "../videos/videos-list";

const SearchList = () => {
  const selectedCategory = useStore((state) => state.navCategories);

  const { data } = useQuery({
    ...getSearchQuery({
      maxResults: "48",
      part: "snippet",
      q: selectedCategory,
    }),
  });

  return (
    <Box sx={{ height: "90vh" }} p={2}>
      <Container maxWidth="90%">
        <Typography variant="h4" fontWeight={"bold"} color={colors.orange}>
          <span style={{ color: colors.primary }}>{"SearchBar"}</span>
        </Typography>
        <VideosList data={data} />
      </Container>
    </Box>
  );
};

export default SearchList;
