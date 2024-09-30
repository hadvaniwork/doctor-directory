import { useState, useRef, useEffect } from "react";

const CustomDropdown = ({ options, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  // Toggle dropdown open/closed
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Handle option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  // Close dropdown if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='custom-dropdown' ref={dropdownRef}>
      <div className='dropdown-header' onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : placeholder}
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>
      {isOpen && (
        <ul className='dropdown-list'>
          {options.map((option) => (
            <li
              key={option.value}
              className={`dropdown-option ${
                selectedOption && selectedOption.value === option.value
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
