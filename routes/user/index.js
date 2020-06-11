const express = require("express");
const router = express.Router();
const UserController = require("../../controllers/user");
const UserValidations = require("../../controllers/userValidations");
const ValidationMiddleware = require("../../middlewares/validation");

router.get(
  "/:id",
  ValidationMiddleware(UserValidations.objectIdSchema),
  UserValidations.validateListUserMiddleware,
  UserController.find
);
router.get(
  "/",
  UserValidations.validateListUserMiddleware,
  UserController.list
);
router.post(
  "/",
  ValidationMiddleware(UserValidations.createSchema),
  UserController.create
);
router.put(
  "/:id",
  ValidationMiddleware(UserValidations.objectIdSchema),
  UserValidations.validateUserMiddleware,
  UserController.update
);
router.delete(
  "/:id",
  ValidationMiddleware(UserValidations.objectIdSchema),
  UserController.delete
);

module.exports = router;
