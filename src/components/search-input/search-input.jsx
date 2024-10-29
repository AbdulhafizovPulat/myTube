import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { colors } from "../../constants/color";
import "./search-input.css";
import { useStore } from "../../store/data-store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    useStore.getState().changeCategories(value);
    navigate(`/search/${value}`);
    setValue("");
  };

  return (
    <Paper
      component={"form"}
      onSubmit={searchHandler}
      sx={{ boxShadow: "none", border: `1px solid ${colors.primary}` }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="searchInput"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
