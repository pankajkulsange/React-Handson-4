import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Students from "./Students";
import ContactUs from "./ContactUs";
import ErrorHandle from "./ErrorHandle";

const RouterComp = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<ErrorHandle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterComp;
