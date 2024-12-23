// src/App.js
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/themes"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ErrorBoundary from "./ErrorBoundary"; // Import ErrorBoundary

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text.primary};
`;

function App() {
  console.log(lightTheme); 

  return (
    <ThemeProvider theme={lightTheme}>
      <ErrorBoundary> {/* Wrap your main component with ErrorBoundary */}
        <BrowserRouter>
          <StyledContainer>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </StyledContainer>
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
