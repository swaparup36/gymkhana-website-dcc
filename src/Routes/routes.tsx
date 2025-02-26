import { Route, Routes } from "react-router-dom"
import Landing from "../pages/Landing";
import Events from "../pages/Event";
import Sponsor from "../pages/Sponsor";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

function RouteComponent() {
  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sponsors" element={<Sponsor />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default RouteComponent;