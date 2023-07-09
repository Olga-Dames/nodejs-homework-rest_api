const express = require("express");

const {validation, isValidId} = require("../../middleware")

const router = express.Router();

const ctrl = require("../../controllers/contactsCtrl");

const {schemas} = require("../../models/contact")

router.get("/", ctrl.listContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validation(schemas.addSchema), ctrl.addContact);

router.put("/:contactId", isValidId, validation(schemas.addSchema), ctrl.updateContact);

router.patch("/:contactId/favorite", isValidId, validation(schemas.updateFavoriteSchema), ctrl.updateStatusContact );

router.delete("/:contactId", isValidId, ctrl.deleteContact);

module.exports = router;
