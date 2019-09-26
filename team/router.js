const { Router } = require("express");
const Team = require("./model");

const router = new Router();

router.get("/team/", (req, res, next) => {
  Team.findAll()
    .then(list => res.send(list))
    .catch(err => next(err));
});

module.exports = router;
