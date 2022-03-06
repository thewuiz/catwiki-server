"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 *
 * RUTA: '/api/'
 *
 */
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var api_controller_1 = __importDefault(require("../controllers/api.controller"));
router.get("/breed/:id", api_controller_1.default.getBreedById);
router.get("/search/all/breeds", api_controller_1.default.getAllBreeds);
router.get("/search/breeds", api_controller_1.default.getBreedsBySearch);
router.get("/search/ramdon/image/:limit", api_controller_1.default.getBreedsImage);
router.get("/search/image/:breedId/:limit", api_controller_1.default.getImagesByBreedId);
router.get("/image/ramdon/:limit", api_controller_1.default.getRandomImages);
module.exports = router;
