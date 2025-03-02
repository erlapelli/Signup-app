import React from "react";
import SignupForm from "./components/SignupForm";
import LogoSection from "./components/LogoSection";
import "./App.css";

function App() {
  return (
    
    <div className="app-container">
      <div className="left-section">
        <SignupForm />
      </div>
      <div className="right-section">
        <LogoSection />
      </div>
    </div>
    
  );
}

export default App;





