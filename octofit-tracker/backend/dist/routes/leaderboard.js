"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/leaderboard/
router.get('/', (_req, res) => {
    res.json({ message: 'Leaderboard endpoint' });
});
exports.default = router;
