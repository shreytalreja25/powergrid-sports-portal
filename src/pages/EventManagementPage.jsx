import { Header } from "../components/EventManagement/Header";
import { FilterSection } from "../components/EventManagement/FilterSection";
import { EventGrid } from "../components/EventManagement/EventGrid";
import { Pagination } from "../components/EventManagement/Pagination";

export default function EventManagementPage() {
  return (
    <div>
      <Header />
      <div className="container my-4">
        <FilterSection />
        <EventGrid />
        <Pagination />
      </div>
    </div>
  );
}
