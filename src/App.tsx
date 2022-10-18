import "./App.css";
import Constractor from "./pages/Constractor/Constractor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EndUser from "./pages/EndUser/EndUser";
import Stages from "./components/Stages/Stages";
import { Box } from "@mui/material";
import ServiceLocation from "./pages/ServiceLocation/ServiceLocation";
import Billing from "./pages/Billing/Billing";
import { Button } from "@material-ui/core";
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const handleClick = (lang: string): any => {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="App">
      <Button onClick={() => handleClick('en')}>Eng</Button>
      <Button onClick={() => handleClick('thai')}>Thai</Button>
      <Box className="container">
        <Stages />
      </Box>
      <Box className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Constractor />} />
            <Route path="/endUser" element={<EndUser />} />
            <Route path="/serviceLocation" element={<ServiceLocation />} />
            <Route path="/billing" element={<Billing />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </div>
  );
}

export default App;