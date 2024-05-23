const Rate = require("../../models/backoffice/Rate");

exports.fetchAllRates = (req, res) => {
  Rate.getAll()
    .then((rates) => {
      res.render("Rate/rateList", {
        rates: rates,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération de la liste des notes",
      });
    });
};
