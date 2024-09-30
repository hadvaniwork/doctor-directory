import DoctorList from "./components/DoctorList";
import Filters from "./components/Filters";
import DoctorModal from "./components/DoctorModal";
import "./styles.css";

function App() {
  return (
    <div className='app-container'>
      <h1>Doctor&apos;s Directory</h1>
      <Filters />
      <DoctorList />
      <DoctorModal />
    </div>
  );
}

export default App;
