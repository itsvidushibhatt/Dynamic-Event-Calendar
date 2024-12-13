
# Dynamic Event Calendar Application

A feature-rich dynamic event calendar application built using **React.js** and **ShadCN**. This project showcases advanced React logic, clean UI design, and effective state management to handle complex functionalities like event scheduling, month navigation, and data persistence.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [Deployment](#deployment)
- [How to Run Locally](#how-to-run-locally)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)

## Features

### 1. **Calendar View**
- Displays a **monthly calendar grid**, dynamically adjusting for different months and leap years.
- **Navigation**: Switch between months using "Previous" and "Next" buttons.
- **Current Day Highlight**: Automatically highlights the current day.
- **Selected Day Highlight**: Visually distinct when a day is selected.

### 2. **Event Management**
- **Add Events**: Click on any day to open a modal and input the following:
  - Event name
  - Start time and end time
  - Optional description
- **Edit Events**: Modify the details of existing events.
- **Delete Events**: Remove unwanted events with a single click.
- **Prevent Overlaps**: Automatically validates to ensure no two events overlap.

### 3. **Event List**
- View a detailed list of all events for the selected day in a modal or side panel.
- Events are displayed in **chronological order** for easy readability.

### 4. **Data Persistence**
- All events are stored using **localStorage**, ensuring data is preserved even after refreshing the page.

### 5. **Advanced Features**
- **Dynamic Month Handling**: Automatically handles transitions like switching from Jan 31 to Feb 1.
- **Event Filtering**: Search and filter events by keywords for better organization.

## Tech Stack

### **Frontend**:
- **React.js** with **Vite** for fast development and performance.
- **ShadCN** for modern, responsive UI components.
- **Tailwind CSS** for scalable and efficient styling.

### **Data Storage**:
- **LocalStorage** for persistent data management.

### **Deployment**:
- **Vercel/Netlify** for hassle-free deployment.

## Architecture Overview

### **State Management**:
- Used `useState` and `useEffect` hooks to manage calendar states (selected day, current month) and event data.

### **LocalStorage Integration**:
- Events are saved in **localStorage** whenever changes are made and loaded on app initialization.

### **Dynamic Rendering**:
- Calendar grid dynamically adjusts for each month and highlights weekends.

### **UI Components**:
- Modular and reusable components such as **Calendar**, **EventModal**, and **EventList**.

## Deployment
- **Deployed Application**:[https://creative-kitten-70208d.netlify.app/](#)  
- **GitHub Repository**: [](#)

## How to Run Locally

### **1. Clone the Repository**:
```bash
git clone https://github.com/username/event-calendar-app.git  
cd event-calendar-app

##  **2. Install Dependencies**:
```bash
npm install

## 4. Open in Browser:
Navigate to [http://localhost:5173](http://localhost:5173) to view the app.


## Future Enhancements
- **Recurring Events:** Support for events that repeat daily, weekly, or monthly.
- **User Authentication:** Add personalized calendars for multiple users.
- **Integration with Google Calendar:** Sync events with external calendars.
- **Notifications:** Add reminders for upcoming events.





