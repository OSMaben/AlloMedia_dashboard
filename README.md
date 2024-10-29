# AlloMedia: Delivery Platform Frontend

## Overview
AlloMedia Frontend is the client-side interface for a modern delivery platform designed to streamline order management, delivery tracking, and user interactions. Built with **React.js**, it offers a seamless, responsive, and secure experience for users interacting with backend services. Users can register, log in, manage profiles, reset passwords, view their orders, and interact with the delivery dashboard.

## Features

### User Registration & Authentication
- **Secure Registration & Login**: Forms for user registration and authentication, securely handled with JWT tokens from the backend.
- **Role-based Access Control**: Different user roles (e.g., `livreur`, `client`, `manager`, `admin`) with tailored access to functionalities and pages.

### Password Management
- **Password Reset**: Integrated functionality for requesting and processing password reset links for secure password management.
  
### User Dashboard
- **Profile Management**: Users can view and update their profile details.
- **Order Tracking**: Clients can view and track their orders, while deliverers can update the delivery status.
  
### Admin & Manager Dashboards
- **Admin Panel**: Dashboard for admins to manage users, orders, and oversee platform activities.
- **Manager Panel**: Allows managers to view and assign orders, track delivery progress, and monitor platform metrics.

### Delivery Management
- **Order Assignment**: Managers can assign delivery tasks to drivers (livreurs), who can then update order statuses.
- **Real-Time Updates**: Real-time updates for order statuses and delivery tracking, giving clients up-to-date information.

### Responsive Design
- **Fully Responsive UI**: Optimized for mobile, tablet, and desktop views, ensuring a consistent user experience across devices.

## Technology Stack

### Frontend
- **React.js**: The core library used for building a dynamic user interface.
- **Axios**: For handling HTTP requests to the backend API.
- **React Router**: For managing client-side routing and navigation.
- **CSS**: Custom styles for a sleek, user-friendly, and responsive UI.

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** (version 14 or higher)
- **npm** or **yarn** (for managing packages)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/OSMaben/allomedia_dashboard_front.git
   cd allomedia_dashboard_front
2. **Install Project Dependencies**:
   ```bash
   npm install
   
3. **Run the Project**:
    ```bash
   npm start

### Contributing
## We welcome contributions! To contribute:
  - Fork the repository.
  - Make your changes.
  - Submit a pull request with a detailed explanation of the changes.



