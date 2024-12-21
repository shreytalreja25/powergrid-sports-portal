import { useState } from "react";

export function DateRangePicker() {
  const [dateRange, setDateRange] = useState({ from: null, to: null });

  return (
    <div className="w-full">
      <input
        type="text"
        className="form-control"
        placeholder="Pick a date range"
        value={
          dateRange.from && dateRange.to
            ? `${dateRange.from.toLocaleDateString()} - ${dateRange.to.toLocaleDateString()}`
            : ""
        }
        readOnly
        onFocus={() => alert("Date picker functionality needs to be added")}
      />
    </div>
  );
}
