const Activity = require("../../models/backoffice/Activity");

exports.fetchAllActivities = (req, res) => {
  Activity.getAll()
    .then((activities) => {
      res.render("Activity/activityList", {
        activities: activities,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération de la liste des activités",
      });
    });
};

exports.showActivityCreate = (req, res) => {
  res.render("Activity/activityCreate", {
    success: req.flash("success"),
    error: req.flash("error"),
  });
};