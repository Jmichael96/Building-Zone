const router = require("express").Router();
const document = require("./documentController");
const invoice = require("./invoiceController");
const list = require("./listController");
const log = require("./logController");
const map = require("./mapController");
const saved = require("./savedController");
const schedule = require("./scheduleController");
const ticket = require("./ticketController");
const user = require("./userController");
const valve = require("./valveController");

// API Routes
router.use(document);
router.use(invoice);
router.use(list);
router.use(log);
router.use(map);
router.use(saved);
router.use(schedule);
router.use(ticket);
router.use(user);
router.use(valve);

module.exports = router;