# 🚐 TravelTrucks

TravelTrucks is a web application for browsing and booking camper vans. Users can explore the available campers, apply filters to find the most suitable option, view detailed information about each camper, and submit a booking request.

The project was developed according to the technical requirements using **Next.js**, **TypeScript**, and **TanStack Query**.

---

## Main Features

- 🏕️ Browse the camper catalog
- 🔍 Filter campers by:
  - location;
  - vehicle type;
  - engine type;
  - transmission type.
- 📄 View detailed camper information
- 🖼️ Browse an image gallery
- ⭐ View camper ratings
- 💬 Read customer reviews
- 📨 Submit a booking request
- 📥 Load additional campers using the **Load More** button
- ⏳ Display a loader while fetching data from the server

---

## Technologies

This project was built with:

- Next.js
- React
- TypeScript
- TanStack Query
- CSS Modules
- React Icons

---

## Project Structure

```text
src
│
├── app/                 # Application pages
│   ├── catalog/
│   └── layout.tsx
│
├── components/          # React components
│   ├── BookingForm
│   ├── CamperCard
│   ├── CamperList
│   ├── Filters
│   ├── Header
│   ├── Hero
│   ├── Loader
│   ├── LoadMoreButton
│   └── NoCampers
│
├── hooks/               # Custom React Hooks
│
├── providers/           # TanStack Query Provider
│
├── services/            # API requests
│
└── types/               # TypeScript types
```

---

## API

The application uses the following API:

https://campers-api.goit.study

Main endpoints:

- GET `/campers`
- GET `/campers/{id}`
- GET `/campers/{id}/reviews`
- POST `/campers/{id}/booking-requests`

---

## Main Pages

### 🏠 Home

The home page contains a hero banner with a brief description of the service and a button that navigates to the camper catalog.

### 🚐 Catalog

On the catalog page, users can:

- browse the list of campers;
- apply filters;
- load more campers;
- navigate to the camper details page.

### 📋 Camper Details

The camper details page includes:

- image gallery;
- vehicle specifications;
- rating;
- description;
- customer reviews;
- booking form.

---

## Implementation Details

- Built using the Next.js App Router.
- API requests are handled with TanStack Query.
- Pagination is implemented using the **Load More** button.
- Data is loaded dynamically without page refresh.
- Booking requests are sent to the server via a POST request.
- Styling is implemented using CSS Modules.

---

## Author

**Name:** Veronika Shust

**GitHub:** https://github.com/shust-veronika