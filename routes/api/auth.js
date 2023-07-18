const express = require("express");

const ctrl = require("../../controllers/auth");

const router = express.Router();

const {validation, authenticate} = require("../../middleware");

const {schemas} = require("../../models/user")

router.post("/register", validation(schemas.registerSchema), ctrl.register)

router.post("/login", validation(schemas.loginSchema), ctrl.login)

router.get("/current", authenticate, ctrl.getCurrent)

router.post("/logout", authenticate, ctrl.logout)

router.patch('/', authenticate, validation(schemas.updateSubscriptionSchema), ctrl.updateSubscription);

module.exports = router;