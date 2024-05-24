const Activity = require("../../models/backoffice/Activity");

exports.fetchAllActivities = (req, res) => {
  Activity.getAll()
    .then((activities) => {
      res.render("Activity/activityList", {
        activities: activities,
        success: req.flash("success"),
        error: req.flash("error"),
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

exports.createActivity = async (req, res) => {
  const {
    name,
    location,
    description,
    price,
    image,
    start_date,
    end_date,
    duration,
    rate,
  } = req.body;

  const newActivity = {
    name,
    location,
    description,
    price,
    image,
    start_date,
    end_date,
    duration,
    rate,
  };

  try {
    await Activity.createActivity(newActivity);
    req.flash("success", "Activity created successfully");
    res.redirect("/backoffice/activity-create");
  } catch (err) {
    console.error(err);
    req.flash("error", "Failed to create activity");
    res.redirect("/backoffice/activity-create");
  }
};

// Fonction pour afficher les détails d'une activité
exports.showActivityDetails = (req, res) => {
  const activityId = req.params.activityId;
  Activity.getActivityById(activityId, (err, activity) => {
    if (err) {
      res
        .status(500)
        .send(
          "Une erreur est survenue lors de la récupération des détails d'une activité"
        );
      return;
    }

    res.render("Activity/activityDetails", { activity: activity });
  });
};

// Afficher une activité pour sa modification
exports.showUpdateActivity = (req, res) => {
  const activityId = req.params.activityId;

  Activity.getActivityById(activityId, (err, activity) => {
    if (err) {
      res
        .status(500)
        .send(
          "Une erreur est survenue lors de la récupération des détails d'une activité'."
        );
      return;
    }

    res.render("Activity/activityUpdate", {
      activity: activity,
      success: req.flash("success"),
      error: req.flash("error"),
    });
  });
};

// Mettre à jour une activité
exports.updateActivity = (req, res) => {
  const activityId = req.params.activityId;
  const {
    name,
    location,
    description,
    price,
    image,
    start_date,
    end_date,
    duration,
    rate,
  } = req.body;

  const activityData = {
    name,
    location,
    description,
    price,
    image,
    start_date,
    end_date,
    duration,
    rate,
  };

  Activity.updateActivityDetails(activityId, activityData)
    .then((result) => {
      req.flash("success", "Activity updated successfully");
      res.redirect(req.originalUrl);
    })
    .catch((err) => {
      console.error(err);
      req.flash("error", "Failed to update activity");
      res.redirect(req.originalUrl);
    });
};

// Supprimer une activité
exports.deleteActivity = (req, res) => {
  const activityId = req.params.activityId;

  Activity.deleteActivityById(activityId)
    .then(() => {
      req.flash("success", "Activity deleted successfully");
      res.redirect("/backoffice/activity-list");
    })
    .catch((err) => {
      console.error(err);
      req.flash("error", "Failed to delete activity");
      res.redirect("/backoffice/activity-list");
    });
};