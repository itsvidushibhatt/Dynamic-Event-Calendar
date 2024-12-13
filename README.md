
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

- ## Screenshots
- **Calendar View:**  
 [Calendar](https://github.com/user-attachments/assets/23b5bff3-5bb3-4b4d-b612-33536f926531)

![Calendar1](https://github.com/user-attachments/assets/d754308c-ec08-43b3-9439-dd11129a5195)

- **Add Event Dialog Box:**  
  ![dialogbox](https://github.com/user-attachments/assets/c2002bb0-3e1e-46fa-aa01-cae0778cadff)


- **Event List:**
  ![Different_events](https://github.com/user-attachments/assets/ec705e05-4ddf-491e-a3a2-2a3f09d8f599)

![search](https://github.com/user-attachments/assets/419bd3c7-57bb-49b4-b9f7-cf02f44a3783)

- ## Future Enhancements:
- **Recurring Events:** Support for events that repeat daily, weekly, or monthly.
- **User Authentication:** Add personalized calendars for multiple users.
- **Integration with Google Calendar:** Sync events with external calendars.
- **Notifications:** Add reminders for upcoming events.

- ## Contact
For questions or feedback, feel free to reach out:

- **Email:** vidushibhatt11@gmail.com 
- **GitHub:** [GitHub Profile](GitHub Profile URL)





