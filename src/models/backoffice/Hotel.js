const db = require("../../../db");

const Hotel = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM hotels", (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  createHotel: function (hotelData) {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO hotels (name, location, available_rooms, price_per_night, image, start_date, end_date, duration, description, rate) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const values = [
        hotelData.name,
        hotelData.location,
        hotelData.available_rooms,
        hotelData.price_per_night,
        hotelData.image,
        hotelData.start_date,
        hotelData.end_date,
        hotelData.duration,
        hotelData.description,
        hotelData.rate,
      ];

      db.query(query, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  // Récupération des informations d'un hotel
  getHotelById: function (hotelId, callback) {
    db.query("SELECT * FROM hotels WHERE id = ?", [hotelId], (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      if (result.length) {
        callback(null, result[0]);
      } else {
        // Aucun hotel trouvé avec cet ID
        callback({ message: "Aucun hotel trouvé avec cet ID." }, null);
      }
    });
  },

  updateHotelDetails: function (hotelId, hotelData) {
    return new Promise((resolve, reject) => {
      const query = `
        UPDATE hotels 
        SET name = ?, location = ?, available_rooms = ?, price_per_night = ?, 
            image = ?, start_date = ?, end_date = ?, duration = ?, 
            description = ?, rate = ?
        WHERE id = ?
      `;

      const values = [
        hotelData.name,
        hotelData.location,
        hotelData.available_rooms,
        hotelData.price_per_night,
        hotelData.image,
        hotelData.start_date,
        hotelData.end_date,
        hotelData.duration,
        hotelData.description,
        hotelData.rate,
        hotelId,
      ];

      db.query(query, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  deleteHotelById: function (hotelId) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM hotels WHERE id = ?";

      db.query(query, [hotelId], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
};

module.exports = Hotel;
