import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

type EventDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (event: {
    title: string;
    description: string;
    type: string;
    date: string;
    startTime: string;
    endTime: string;
  }) => void;
  selectedDate: string;
  eventToEdit: any; // Edit event type
};

const loadEvents = () => {
  const events = localStorage.getItem("events");
  return events ? JSON.parse(events) : [];
};

const saveEvents = (events: any) => {
  localStorage.setItem("events", JSON.stringify(events));
};

export const EventDialog: React.FC<EventDialogProps> = ({
  isOpen,
  onClose,
  onSave,
  selectedDate,
  eventToEdit,
}) => {
  const [title, setTitle] = useState(eventToEdit?.title || "");
  const [description, setDescription] = useState(eventToEdit?.description || "");
  const [type, setType] = useState(eventToEdit?.type || "work"); // Default event type
  const [startTime, setStartTime] = useState(eventToEdit?.startTime || "");
  const [endTime, setEndTime] = useState(eventToEdit?.endTime || "");

  // Handle saving the event
  const handleSave = () => {
    if (!title || !startTime || !endTime) return alert("Title, Start time, and End time are required.");

    const newEvent = {
      title,
      description,
      type,
      date: selectedDate,
      startTime,
      endTime,
    };
    const existingEvents = loadEvents();
    const updatedEvents = eventToEdit
      ? existingEvents.map((event: any) =>
        event.date === eventToEdit.date && event.title === eventToEdit.title ? newEvent : event
      )
      : [...existingEvents, newEvent];
    saveEvents(updatedEvents);
    setTitle("");
    setDescription("");
    setType("work");
    setStartTime("");
    setEndTime("");
    onSave(newEvent);
    onClose();
  };

  useEffect(() => {
    if (eventToEdit) {
      setTitle(eventToEdit.title);
      setDescription(eventToEdit.description);
      setType(eventToEdit.type);
      setStartTime(eventToEdit.startTime);
      setEndTime(eventToEdit.endTime);
    }
  }, [eventToEdit]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black text-white p-4 md:p-6 w-full max-w-lg">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{eventToEdit ? "Edit Event" : "Add Event"}</h2>

          {/* Event Title */}
          <div>
            <label className="block text-lg font-semibold mb-2">Title</label>
            <Input
              placeholder="Event title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-700 text-white w-full"
            />
          </div>

          {/* Event Description */}
          <div>
            <label className="block text-lg font-semibold mb-2">Description</label>
            <Textarea
              placeholder="Event description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-700 text-white w-full"
            />
          </div>

          {/* Event Type */}
          <div>
            <label className="block text-lg font-semibold mb-2">Event Type</label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="w-full bg-gray-700 text-white">
                <span className="capitalize">{type}</span>
              </SelectTrigger>
              <SelectContent className="bg-gray-700">
                <SelectItem value="work" className="text-lg font-semibold">Work</SelectItem>
                <SelectItem value="personal" className="text-lg font-semibold">Personal</SelectItem>
                <SelectItem value="other" className="text-lg font-semibold">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Start Time */}
          <div>
            <label className="block text-lg font-semibold mb-2">Start Time</label>
            <Input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="bg-gray-700 text-white w-full"
            />
          </div>

          {/* End Time */}
          <div>
            <label className="block text-lg font-semibold mb-2">End Time</label>
            <Input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="bg-gray-700 text-white w-full"
            />
          </div>

          {/* Save Button */}
          <Button onClick={handleSave} className="mt-4 bg-blue-500 hover:bg-blue-600 w-full md:w-auto">
            {eventToEdit ? "Save Changes" : "Add Event"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
