const express = require("express");

const ctrl = require("../../controllers/auth");

const router = express.Router();

const {validation, authenticate, upload} = require("../../middleware");

const {schemas} = require("../../models/user")

router.post("/register", validation(schemas.registerSchema), ctrl.register)

router.post("/login", validation(schemas.loginSchema), ctrl.login)

router.get("/current", authenticate, ctrl.getCurrent)

router.post("/logout", authenticate, ctrl.logout)

router.patch('/', authenticate, validation(schemas.updateSubscriptionSchema), ctrl.updateSubscription);

router.patch('/users/avatars', authenticate, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;