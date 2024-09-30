import { createSlice } from "@reduxjs/toolkit";
import doctorData from "../data/doctors.json"; // Load local JSON file

const doctorSlice = createSlice({
  name: "doctors",
  initialState: {
    doctors: doctorData,
    filteredDoctors: doctorData,
    selectedDoctor: null,
    loading: false,
    error: null,
    searchTerm: "",
    specialtyFilter: "",
    locationFilter: "",
  },
  reducers: {
    selectDoctor: (state, action) => {
      state.selectedDoctor = action.payload;
    },
    clearSelectedDoctor: (state) => {
      state.selectedDoctor = null;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredDoctors = filterDoctors(state);
    },
    setSpecialtyFilter: (state, action) => {
      state.specialtyFilter = action.payload;
      state.filteredDoctors = filterDoctors(state);
    },
    setLocationFilter: (state, action) => {
      state.locationFilter = action.payload;
      state.filteredDoctors = filterDoctors(state);
    },
  },
});

const filterDoctors = (state) => {
  const { doctors, searchTerm, specialtyFilter, locationFilter } = state;

  return doctors.filter((doctor) => {
    // Search term filtering (case-insensitive)
    const matchesSearch = `${doctor.name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Specialty filtering (case-insensitive)
    const matchesSpecialty = specialtyFilter
      ? doctor.specialty.toLowerCase() === specialtyFilter.toLowerCase()
      : true;

    // Location filtering (case-insensitive, match city or state)
    const matchesLocation = locationFilter
      ? doctor.location.city.toLowerCase() === locationFilter.toLowerCase() ||
        doctor.location.state.toLowerCase() === locationFilter.toLowerCase()
      : true;

    // Return true if all conditions are met
    return matchesSearch && matchesSpecialty && matchesLocation;
  });
};

export const {
  selectDoctor,
  clearSelectedDoctor,
  setSearchTerm,
  setSpecialtyFilter,
  setLocationFilter,
} = doctorSlice.actions;

export default doctorSlice.reducer;
