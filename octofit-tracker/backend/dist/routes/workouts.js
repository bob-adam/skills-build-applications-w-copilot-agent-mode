"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/workouts/
router.get('/', (_req, res) => {
    res.json({ message: 'Workouts endpoint' });
});
exports.default = router;
