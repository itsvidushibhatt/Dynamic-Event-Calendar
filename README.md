# Dynamic Event Calendar Application

A feature-rich dynamic event calendar application built using **React.js**, **ShadCN**, and **Tailwind CSS**, with **Node.js** and **Express** for the backend, and MongoDB for data storage.

## Screenshots

### Calendar View
![Calendar View](./images/calendar.png)

### Add Event Modal
![Add Event Modal](./images/event-modal.png)

### Event List
![Event List](./images/event-list.png)

## Features

### 1. **Calendar View**
- Displays a **calendar grid** for the current month with all days properly aligned.
- Allows users to switch between months using **"Previous"** and **"Next"** buttons.
- The current day and selected day are visually highlighted.

### 2. **Event Management**
- Users can **add, edit, or delete events** on a specific day by interacting with the calendar.
- Each event includes:
  - **Event name**
  - **Start time** and **end time**
  - Optional **description**

### 3. **Event List**
- A list of all events for the selected day is displayed in a **modal** or **side panel**.

### 4. **Data Persistence**
- Events are persisted using **localStorage** (or any chosen in-memory data store) to ensure the events remain even after the page is refreshed.

### 5. **UI Design**
- Clean, modern UI using **ShadCN** components and **Tailwind CSS** for styling.
- Days are displayed in a grid, with clear separation for **weekends** and **weekdays**.

### 6. **Complex Logic**
- Handles **month transitions** correctly (e.g., from Jan 31 to Feb 1).
- **Prevents overlapping events** (e.g., two events at the same time).
- Users can **filter events** by keyword.

### 7. **Bonus Features**
- **Drag-and-drop functionality** to reschedule events between days.
- **Color coding** for events (e.g., work, personal, etc.).
- Users can **export the event list** for a specific month as a **JSON** or **CSV** file.

---

## Installation

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/dynamic-event-calendar.git
cd dynamic-event-calendar

