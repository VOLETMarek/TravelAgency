const Hotel = require("../../models/frontoffice/Hotel");

exports.fetchAllHotels = (req, res) => {
  Hotel.getAll()
    .then((hotels) => {
        res.json(hotels);
    })
    .catch((err) => {
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération de la liste des hotels",
      });
    });
};

// Recuperation d'une activité
exports.fetchHotelDetails = (req, res) => {
    const hotelId = req.params.hotelId;
  
    Hotel.getHotelById(hotelId)
      .then((hotel) => {
        res.json(hotel);
      })
      .catch((err) => {
        res.status(500).json({
          error:
            "Une erreur est survenue lors de la récupération des détails d'un hotel.",
        });
      });
  };
  
