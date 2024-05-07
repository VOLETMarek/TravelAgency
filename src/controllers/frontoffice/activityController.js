const Activity = require("../../models/frontoffice/Activity");

exports.fetchAllActivities = (req, res) => {
  Activity.getAll()
    .then((activities) => {
      res.json(activities);
    })
    .catch((err) => {
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération de la liste des activités",
      });
    });
};

// Recuperation d'une activité
exports.fetchActivityDetails = (req, res) => {
  const activityId = req.params.activityId;

  Activity.getActivityById(activityId)
    .then((activity) => {
      res.json(activity);
    })
    .catch((err) => {
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération des détails d'une activité.",
      });
    });
};
