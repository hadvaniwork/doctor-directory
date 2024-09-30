import { useSelector, useDispatch } from "react-redux";
import { clearSelectedDoctor } from "../store/doctorSlice";

const DoctorModal = () => {
  const dispatch = useDispatch();
  const selectedDoctor = useSelector((state) => state.doctors.selectedDoctor);

  if (!selectedDoctor) return null;

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button
          className='close-button'
          onClick={() => dispatch(clearSelectedDoctor())}
        >
          &times;
        </button>
        <h2>{selectedDoctor.name}</h2>
        <p>
          <strong>Specialty:</strong> {selectedDoctor.specialty}
        </p>
        <p>
          <strong>Location:</strong> {selectedDoctor.location.city},{" "}
          {selectedDoctor.location.state}
        </p>
        <p>
          <strong>Phone:</strong> {selectedDoctor.phone}
        </p>
        <p>
          <strong>Email:</strong> {selectedDoctor.email}
        </p>
      </div>
    </div>
  );
};

export default DoctorModal;
