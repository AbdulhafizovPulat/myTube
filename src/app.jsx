import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Channel, Main, Navbar, SearchList, VideoDetail } from "./components";
import "./app.css"

function App() {
  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto"}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/video-detail/:id" element={<VideoDetail />} />
        <Route path="/search/:id" element={<SearchList />} />
      </Routes>
    </Box>
  );
}

export default App;
