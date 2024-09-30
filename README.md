# Doctor Directory

This project is a **React + Redux** web application that allows users to list, search, and view details about doctors using data from a local JSON file. Users can search for doctors by their name, filter by specialty and location, and clicking on any doctor opens a modal displaying their full details.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the App](#running-the-app)

## Features

- **Doctor List:** Displays a list of all doctors with their name, specialty, and location.
- **Search Functionality:** Users can search for doctors by their name using the search bar.
- **Custom Filters:** Users can filter doctors by specialty and location using custom dropdowns.
- **Modal Display:** Clicking on a doctor opens a modal showing more detailed information, including their phone and email.
- **Responsive Design:** The application is responsive and works well on both desktop and mobile devices.

## Tech Stack

- **React:** Frontend library for building user interfaces.
- **Redux:** State management library for managing application state.
- **Redux Toolkit:** Simplifies the Redux workflow with utilities for writing reducers, middleware, and actions.
- **CSS:** Custom styles for UI design and layout.
- **JSON:** Data for doctors is stored locally in a JSON file.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/hadvaniwork/doctor-directory.git
   cd doctor-directory
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://127.0.0.1:5173/
   ```
