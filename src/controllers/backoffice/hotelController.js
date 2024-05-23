const Hotel = require("../../models/backoffice/Hotel");

exports.fetchAllHotels = (req, res) => {
  Hotel.getAll()
    .then((hotels) => {
      res.render("Hotel/hotelList", {
        hotels: hotels,
        success: req.flash("success"),
        error: req.flash("error"),
      });
    })
    .catch((err) => {
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération de la liste des hotels",
      });
    });
};

exports.showHotelCreate = (req, res) => {
  res.render("Hotel/hotelCreate", {
    success: req.flash("success"),
    error: req.flash("error"),
  });
};

// Créer un nouvel hôtel
exports.createHotel = (req, res) => {
  const {
    name,
    location,
    available_rooms,
    price_per_night,
    image,
    start_date,
    end_date,
    duration,
    description,
    rate,
  } = req.body;

  const hotelData = {
    name,
    location,
    available_rooms,
    price_per_night,
    image,
    start_date,
    end_date,
    duration,
    description,
    rate,
  };

  Hotel.createHotel(hotelData)
    .then(() => {
      req.flash("success", "Hotel created successfully");
      res.redirect("/backoffice/hotel-list");
    })
    .catch((err) => {
      console.error(err);
      req.flash("error", "Failed to create hotel");
      res.redirect("/backoffice/hotel-create");
    });
};

// Fonction pour afficher les détails d'un hotel
exports.showHotelDetails = (req, res) => {
  const hotelId = req.params.hotelId;
  Hotel.getHotelById(hotelId, (err, hotel) => {
    if (err) {
      res
        .status(500)
        .send(
          "Une erreur est survenue lors de la récupération des détails d'un hotel'"
        );
      return;
    }

    res.render("Hotel/hotelDetails", { hotel: hotel });
  });
};

// Afficher un hotel pour sa modification
exports.showUpdateHotel = (req, res) => {
  const hotelId = req.params.hotelId;

  Hotel.getHotelById(hotelId, (err, hotel) => {
    if (err) {
      res
        .status(500)
        .send(
          "Une erreur est survenue lors de la récupération des détails du vol."
        );
      return;
    }

    res.render("Hotel/hotelUpdate", {
      hotel: hotel,
      success: req.flash("success"),
      error: req.flash("error"),
    });
  });
};

// Mettre à jour les détails d'un hôtel
exports.updateHotel = (req, res) => {
  const hotelId = req.params.hotelId;
  const hotelData = req.body;

  Hotel.updateHotelDetails(hotelId, hotelData)
    .then(() => {
      req.flash('success', 'Hotel details updated successfully');
      res.redirect(req.originalUrl);
    })
    .catch((err) => {
      console.error(err);
      req.flash('error', 'Failed to update hotel details');
      res.redirect(req.originalUrl);
    });
};

// Supprimer un hotel
exports.deleteHotel = (req, res) => {
  const hotelId = req.params.hotelId;

  Hotel.deleteHotelById(hotelId)
    .then(() => {
      req.flash("success", "Hotel deleted successfully");
      res.redirect("/backoffice/hotel-list");
    })
    .catch((err) => {
      console.error(err);
      req.flash("error", "Failed to delete hotel");
      res.redirect("/backoffice/hotel-list");
    });
};