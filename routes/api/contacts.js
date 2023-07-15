const express = require("express");

const {validation, isValidId, authenticate} = require("../../middleware")

const router = express.Router();

const ctrl = require("../../controllers/contactsCtrl");

const {schemas} = require("../../models/contact")

router.get("/", authenticate, ctrl.listContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);

router.post("/", authenticate, validation(schemas.addSchema), ctrl.addContact);

router.put("/:contactId", authenticate, isValidId, validation(schemas.addSchema), ctrl.updateContact);

router.patch("/:contactId/favorite", authenticate, isValidId, validation(schemas.updateFavoriteSchema), ctrl.updateStatusContact );

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContact);

module.exports = router;
