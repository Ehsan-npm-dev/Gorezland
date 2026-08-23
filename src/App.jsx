import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./view/page/Home";
import Layout from "./view/template/Layout";
import NotFound from "./view/page/NotFound";
import About from "./view/page/About";
import Sport from "./view/page/Sport";
import Project from "./view/page/Project";
import Journey from "./view/page/Journey";
import OriginalPage from "./view/page/OriginalPage";
import Sign from "./view/page/Sign";
import SlackLale from "./view/page/SlackLale";
import Poi from "./view/page/Poi";
import Course from "./view/page/Course";
import Events from "./view/page/Events";
import Slack from "./view/page/Slack";
import Flow from "./view/page/Flow";
import Flair from "./view/page/Flair";
import Adventure from "./view/page/Adventure";
import Highline from "./view/page/Highline";
import Festival from "./view/page/Festival";
import Slackline from "./view/page/Slackline";
import Highliner from "./view/page/Highline";
function App() {
  return (
    <div className="text-center font-bold text-white">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<OriginalPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/" element={<NotFound />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/project" element={<Project />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/slacklale" element={<SlackLale />} />
            <Route path="/highline" element={<Highline />} />
            <Route path="/poi" element={<Poi />} />
            <Route path="/course" element={<Course />} />
            <Route path="/festival" element={<Festival />} />
            <Route path="/events" element={<Events />} />
            <Route path="/slack" element={<Slack />} />
            <Route path="/flow" element={<Flow />} />
            <Route path="/adventure" element={<Adventure />} />
            <Route path="/flair" element={<Flair />} />
               <Route path="/slackline" element={<Slackline />} />
                       {/* <Route path="/highliner" element={<Highliner />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
