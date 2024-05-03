const Hotel = require("../../models/backoffice/Hotel");

exports.fetchAllHotels = (req, res) => {
  Hotel.getAll()
    .then((hotels) => {
      res.render("hotelList", {
        hotels: hotels,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération de la liste des hotels",
      });
    });
};
