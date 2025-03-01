# Real-Time Location Tracking with Leaflet.js and Socket.io

## Project Overview
This project implements a real-time location tracking application using:
- **Leaflet.js** for interactive maps
- **Socket.io** for real-time communication
- **Geolocation API** to fetch the user's live location

### Key Features
- Real-time map updates based on user's location
- High-accuracy location tracking
- Automatically centers the map to the latest location

---

## Installation & Setup

### Prerequisites
- Node.js installed
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Server
```bash
node index.js
```

### 4. Open in Browser
Visit `http://localhost:3000` to see the app in action.

---

## File Structure
```
📂 Project Root
├── 📂 public
│   ├── css
│        ├── style.css              # Client-side JavaScript
│   └──js
|       ├── script.js
|   └──views
|       ├── index.ejs   
├── index.js               # Backend server with Socket.io
├── package.json            # Node.js dependencies
└── README.md               # Project documentation
```

---

## How It Works
1. **Frontend:**
   - Uses the **Geolocation API** to fetch latitude and longitude.
   - Sends the coordinates to the server using **Socket.io**.
   - Displays the map using **Leaflet.js** and updates the marker in real-time.

2. **Backend:**
   - Listens for `send-location` events from the client.
   - Broadcasts the updated location to all connected clients.

---

## Technologies Used
- **Frontend:** Leaflet.js, Socket.io (client)
- **Backend:** Node.js, Express, Socket.io

---

## Troubleshooting
- If the map doesn't load, check the console for errors.
- Verify the tile layer URL is correct: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`

---

## Contributing
Feel free to open issues or submit pull requests if you find any bugs or want to add new features.

---

## License
This project is licensed under the MIT License.

