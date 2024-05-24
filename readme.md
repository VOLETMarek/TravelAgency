# ✈️ TravelAgency - Express.js ✈️

TravelAgency is a web application built with Express.js that allows users to search and book flights, hotels, and activities online.

🔅 Don't forget to checkout screenshots on public>img folder 🔅

## Features

- **User Account Management:** Users can create and manage their accounts.
- **Search:** Users can search for flights, hotels, and activities based on various criteria.
- **Search Results:** Display search results with filtering and sorting options.
- **Online Booking System:** Implement an online reservation system with availability calendars.
- **Reviews:** Allow users to leave reviews for hotels, flights, and activities.

## Installation

To run this project locally, make sure you have Node.js installed on your machine.

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/TravelAgency.git
```

2. Navigate to the project directory:

```bash
cd TravelAgency
```

3. Install dependencies:

```bash
npm install
```

4. Import data base on phpmyadmin and create db.js file. It looks like this : 
```bash
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'your-data-base-username', 
    password: 'your-password!', 
    database: 'your-data-base-name' 
});

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données : ' + err.stack);
        return;
    }
    console.log('Connexion à la base de données établie avec succès !');
});

module.exports = connection;
```

5. Generate and insert your JWT secret key in .env file : 

```bash
JWT_SECRET=your-secret-key
```

6. Start the server:

```bash
npm start
```

7. Access the application in your browser by visiting http://localhost:5000.

## Usage

1. Create an account or log in if you already have one.
2. Search for flights, hotels, or activities using the search functionality.
3. Filter and sort search results based on your preferences.
4. Book your desired flights, hotels, or activities online.
5. Manage your bookings
6. Leave reviews for hotels, flights, and activities.

## Technologies Used

- Express.js
- Node.js
- EJS


