/**
 *
 * RUTA: '/api/'
 *
 */
import express from "express";
const router = express.Router();
import controller from "../controllers/api.controller";

router.get("/breed/:id", controller.getBreedById);
router.get("/search/all/breeds", controller.getAllBreeds);
router.get("/search/breeds", controller.getBreedsBySearch);
router.get("/search/ramdon/image/:limit", controller.getBreedsImage);
router.get("/search/image/:breedId/:limit", controller.getImagesByBreedId);
router.get("/image/ramdon/:limit", controller.getRandomImages);

export = router;
