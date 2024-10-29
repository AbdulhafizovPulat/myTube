import config from "../../services/config";
import { Box, Stack } from "@mui/material";
import { colors } from "../../constants/color";
import { Link } from "react-router-dom";
import SearchInput from "../search-input/search-input";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: colors.primary,
      }}
    >
      <Link to="/">
        <img src={config.LOGO} alt="logo" height={50} />
      </Link>
      <SearchInput />
      <Box />
    </Stack>
  );
};

export default Navbar;
