import React, { useState, useEffect } from "react";
import { EventDialog } from "./EventDialog";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

type Event = {
  title: string;
  description: string;
  type: string;
  date: string;  
  startTime: string;
  endTime: string;
};

export const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isEventDialogOpen, setEventDialogOpen] = useState(false);
  const [eventToEdit, setEventToEdit] = useState<Event | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Fetch events from localStorage on initial render
  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      try {
        const parsedEvents = JSON.parse(storedEvents);
        if (Array.isArray(parsedEvents)) {
          setEvents(parsedEvents);
        } else {
          setEvents([]); // If the parsed data is not an array, fallback to an empty array
        }
      } catch (error) {
        console.error("Error parsing events from localStorage:", error);
        setEvents([]); // Fallback to an empty array in case of parsing error
      }
    }
  }, []);

  // Save or Update events to localStorage
  const saveEvent = (event: Event) => {
    let updatedEvents: Event[];

    if (eventToEdit) {
      // If editing, update the existing event
      updatedEvents = events.map((e) =>
        e.date === event.date && e.title === eventToEdit.title ? { ...e, ...event } : e
      );
    } else {
      // If adding a new event
      updatedEvents = [...events, event];
    }

    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setEventToEdit(null); 
    setEventDialogOpen(false); 
  };

  // Delete a specific event by its title and date
  const deleteEvent = (eventToDelete: Event) => {
    const updatedEvents = events.filter(
      (event) => event.title !== eventToDelete.title || event.date !== eventToDelete.date
    );
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  // Handle month navigation
  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === "prev" ? -1 : 1));
    setCurrentDate(newDate);
    setSelectedDate(null); 
  };

  // Get the current month's days
  const getMonthDays = () => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const days: any[] = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null); 
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  // Format date to dd-mm-yyyy
  const formatDate = (date: string) => {
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
  };


  // Filter events based on search query
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 max-w-screen-lg">
      {/* Search Bar */}
      <div className="mb-4">
        <span className="font-bold text-blue-950 text-2xl">Search Event</span>
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          className="p-2 border rounded-md w-full mt-1"
        />
      </div>

      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <Button onClick={() => navigateMonth("prev")} className="text-lg text-white font-extrabold">Previous</Button>
        <h1 className="text-2xl font-semibold text-gray-600">{currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}</h1>
        <Button onClick={() => navigateMonth("next")} className="text-lg text-white font-extrabold">Next</Button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-0 text-lg text-slate-700 font-bold">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div key={index} className="text-center font-bold text-slate-950 bg-red-600 h-12 pt-2 border border-red-900">{day}</div>
        ))}

        {getMonthDays().map((day, index) => (
          <div
            key={index}
            className={`text-center p-4 cursor-pointer border border-gray-300 ${day
              ? "hover:bg-blue-700" // Hover effect when the date is valid
              : "bg-transparent" // Empty space for invalid days
            } ${day &&
              currentDate.getDate() === day &&
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear()
              ? "bg-orange-600 text-white"
              : ""} 
            ${day && selectedDate === `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}` ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => {
              if (day) {
                const date = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                setSelectedDate(date);
              }
            }}
          >
            {day || ""}
          </div>
        ))}
      </div>

      {/* Show selected day events */}
      {selectedDate && (
        <div className="mt-6">
          <h2 className="text-xl font-bold text-zinc-700 mb-4">Events for {formatDate(selectedDate)}</h2>
          <div className="space-y-2">
            {filteredEvents
              .filter((event) => event.date === selectedDate)
              .map((event, index) => (
                <div
                  key={index}
                  className={`p-4 border rounded-xl text-white mb-2
                    ${event.type === "work" ? "bg-blue-500" : event.type === "personal" ? "bg-green-500" : "bg-yellow-500"}`}
                >
                  <h3 className="font-bold text-3xl">{event.title}</h3>
                  <p>{event.description}</p>
                  <p>{event.startTime} - {event.endTime}</p>
                  <div className="flex space-x-2 mt-2">
                    {/* Edit Button */}
                    <Button
                      onClick={() => {
                        setEventToEdit(event);
                        setEventDialogOpen(true); 
                      }}
                      className="bg-yellow-500 text-black text-xl font-bold"
                    >
                      Edit
                    </Button>
                    {/* Delete Button */}
                    <Button
                      onClick={() => deleteEvent(event)} 
                      className="bg-red-500 text-white text-xl font-bold"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Open Event Dialog */}
      <Dialog open={isEventDialogOpen} onOpenChange={setEventDialogOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setEventDialogOpen(true)} className="font-semibold text-white text-2xl mt-3 py-8 px-5 w-full md:w-auto">Add Event</Button>
        </DialogTrigger>
        <EventDialog
          isOpen={isEventDialogOpen}
          onClose={() => setEventDialogOpen(false)}
          onSave={saveEvent}
          selectedDate={selectedDate || ""}
          eventToEdit={eventToEdit}
        />
      </Dialog>
    </div>
  );
};

export default Calendar;
