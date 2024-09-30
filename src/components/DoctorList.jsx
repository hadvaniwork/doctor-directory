import { useSelector, useDispatch } from "react-redux";
import { selectDoctor } from "../store/doctorSlice";

const DoctorList = () => {
  const { filteredDoctors } = useSelector((state) => state.doctors);
  const dispatch = useDispatch();

  return (
    <div className='doctor-list'>
      {filteredDoctors.map((doctor) => (
        <div
          key={doctor.id}
          className='doctor-card'
          onClick={() => dispatch(selectDoctor(doctor))}
        >
          <h3>{doctor.name}</h3>
          <p>{doctor.specialty}</p>
          <p>
            {doctor.location.city}, {doctor.location.state}
          </p>
          <p>{"★".repeat(doctor.rating)}</p>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
