import { Button } from "react-bootstrap";
import { DateRangePicker } from "./DateRangePicker";

export function FilterSection() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="row g-3">
        {/* Region Dropdown */}
        <div className="col-12 col-md-3">
          <select className="form-select">
            <option>Select Region</option>
            <option value="NR-1">NR-1</option>
            <option value="NR-2">NR-2</option>
            <option value="CC">CC</option>
          </select>
        </div>

        {/* Sport Dropdown */}
        <div className="col-12 col-md-3">
          <select className="form-select">
            <option>Select Sport</option>
            <option value="Cricket">Cricket</option>
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
            <option value="Badminton">Badminton</option>
          </select>
        </div>

        {/* Date Range Picker */}
        <div className="col-12 col-md-3">
          <DateRangePicker />
        </div>

        {/* Search Button */}
        <div className="col-12 col-md-3">
          <Button variant="dark" className="w-100">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
