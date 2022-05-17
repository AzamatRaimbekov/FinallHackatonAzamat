import InfoAboutUs from "./components/InfoAboutUs";
import AdminContext from "./contexts/AdminContext";
import ClinentContext from "./contexts/ClinentContext";

import Navigation from "./Navigation";

const App = () => {
  return (
    <ClinentContext>
      <AdminContext>
        <Navigation />
        <InfoAboutUs />
      </AdminContext>
    </ClinentContext>
  );
};

export default App;
