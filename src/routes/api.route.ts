/**
 *
 * RUTA: '/api/'
 *
 */
import express from "express";
const router = express.Router();
import controller from "../controllers/api.controller";

router.get("/search/all/breeds", controller.getAllBreeds);
router.get("/search/breeds", controller.getBreedsByName);
router.get("/search/image/:breedId/:limit", controller.getImagesByBreedId);

export = router;
