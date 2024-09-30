import { useDispatch, useSelector } from "react-redux";
import CustomDropdown from "./CustomDropdown";
import {
  setSearchTerm,
  setSpecialtyFilter,
  setLocationFilter,
} from "../store/doctorSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const { searchTerm, doctors } = useSelector((state) => state.doctors);

  // Dynamically extract unique specialties from the doctor data
  const specialties = [
    { label: "All Specialties", value: "" },
    ...[...new Set(doctors.map((doctor) => doctor.specialty))].map(
      (specialty) => ({
        label: specialty,
        value: specialty.toLowerCase(),
      })
    ),
  ];

  // Dynamically extract unique locations from the doctor data
  const locations = [
    { label: "All Locations", value: "" },
    ...[...new Set(doctors.map((doctor) => doctor.location.city))].map(
      (location) => ({
        label: location,
        value: location.toLowerCase(),
      })
    ),
  ];

  // Handle the selection of specialty
  const handleSpecialtySelect = (selectedOption) => {
    dispatch(setSpecialtyFilter(selectedOption.value));
  };

  // Handle the selection of location
  const handleLocationSelect = (selectedOption) => {
    dispatch(setLocationFilter(selectedOption.value));
  };

  return (
    <div className='filters'>
      <input
        type='text'
        placeholder='Search by name...'
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))} // Handle search term change
        className='search-bar'
      />

      {/* Custom Dropdown for Specialties */}
      <CustomDropdown
        options={specialties}
        placeholder='All Specialties'
        onSelect={handleSpecialtySelect}
      />

      {/* Custom Dropdown for Locations */}
      <CustomDropdown
        options={locations}
        placeholder='All Locations'
        onSelect={handleLocationSelect}
      />
    </div>
  );
};

export default Filters;
