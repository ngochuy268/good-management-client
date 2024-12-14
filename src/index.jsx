import { render } from "react-dom";
import { StyledEngineProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';


import App from "./App";

const rootElement = document.getElementById("root");
render(
   <React.StrictMode>
        <StyledEngineProvider injectFirst>
                <Router>
                    <App />
                </Router>
        </StyledEngineProvider>
   </React.StrictMode>
, rootElement);
