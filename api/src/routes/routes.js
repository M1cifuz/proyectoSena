const { Router } = require('express');
const router = Router();
//routes
router.get('/', (req, res) => {
res.json({ "message": "Hola soy Joan" });
});
module.exports = router;