const express = require('express');
const { sorgula, musteriTemsilcisi, calismaSaatleri, musteriTemsilcisiId, randevu, slot, randevuId } = require('../process/sorgularController');

const router = express.Router();

router.get('/', sorgula);
router.get('/musteriTemsilcisi', musteriTemsilcisi);
router.get('/calismaSaatleri', calismaSaatleri);
router.get('/musteriTemsilcisi/:id', musteriTemsilcisiId);
router.get('/randevu', randevu);
router.get('/slot', slot);
router.get('/randevu/:id', randevuId);

module.exports = router;