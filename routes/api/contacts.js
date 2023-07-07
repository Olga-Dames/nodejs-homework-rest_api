const express = require("express");

const {validation} = require("../../middleware")

const router = express.Router();

const ctrl = require("../../controllers/contactsCtrl");

const schemas = require("../../schemas/contacts")

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validation(schemas.addSchema), ctrl.addContact);

router.put("/:contactId", validation(schemas.addSchema), ctrl.updateContact);

router.delete("/:contactId", ctrl.deleteContact);

module.exports = router;
