import React from "react";
import AdminContext from "./contexts/AdminContext";
import ClinentContext from "./contexts/ClinentContext";
import Navigation from "./Navigation";

const App = () => {
  return (
    <ClinentContext>
      <AdminContext>
        <Navigation />
      </AdminContext>
    </ClinentContext>
  );
};

export default App;
