import { Stack } from "@mui/material";
import { category } from "../../constants";
import { colors } from "../../constants/color";
import "./categories.scss";
import { useStore } from "../../store/data-store";

const Categories = () => {
  const selectedCategory = useStore((state) => state.navCategories);  

  return (
    <Stack direction={"row"} sx={{ overflowY: "scroll", backgroundColor: colors.primary }} >
      {category.map((item) => (
        <button
          key={item.id}
          className="category-btn"
          style={{
            backgroundColor: selectedCategory === item.name && colors.secondary,
          }}
          onClick={() => useStore.getState().changeCategories(item.name)}
        >
          <span
            style={{
              color:
                selectedCategory === item.name
                  ? colors.primary
                  : colors.secondary,
            }}
          >
            {item.icon}
          </span>
          <span
            style={{ color: selectedCategory === item.name && colors.primary }}
          >
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Categories;
