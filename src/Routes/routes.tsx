import { Route, Routes } from "react-router-dom"
import Landing from "../pages/Landing";
import Events from "../pages/Event";
import Director from "../pages/Director";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/events" element={<Events />} />
      <Route path="/director" element={<Director />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default RouteComponent;
