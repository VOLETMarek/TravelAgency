const Activity = require("../../models/backoffice/Activity");

exports.fetchAllActivities = (req, res) => {
  Activity.getAll()
    .then((activities) => {
      res.render("activityList", {
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
