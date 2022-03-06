import { Request, response, Response } from "express";
import axios from "axios";

const urlEndPoint = process.env.BASE_URL;
axios.defaults.headers.common["x-api-key"] = process.env.API_KEY || "";

// ==============================================================================================
// ==============================================================================================
const getAllBreeds = async (req: Request, res: Response) => {
  try {
    await axios
      .get(`${urlEndPoint}/breeds`)
      .then((response) => {
        let breeds = [];
        let data = response.data;
        for (const key in data) {
          breeds.push({
            id: data[key].id,
            name: data[key].name,
            description: data[key].description,
            image: data[key].image,
          });
        }
        return res.json(breeds);
      })
      .catch((err) => {
        return res.status(400).json({ errors: err });
      });
  } catch (error) {
    return res.status(400).json({ errors: error });
  }
};

// ==============================================================================================
// ==============================================================================================
const getBreedsBySearch = async (req: Request, res: Response) => {
  const { search } = req.query;
  if (search) {
    await axios
      .get(`${urlEndPoint}/breeds/search`, {
        params: { q: search },
      })
      .then((response) => {
        let breeds = [];
        let data = response.data;
        for (const key in data) {
          breeds.push({ id: data[key].id, name: data[key].name });
        }
        return res.json(breeds);
      })
      .catch((err) => {
        return res.status(500).json({
          errors: err,
        });
      });
  } else return getAllBreeds(req, res);
};

const getBreedById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const size = "small";

  try {
    await axios
      .get(`${urlEndPoint}/images/search`, {
        params: {
          breed_id: id,
          size: size,
        },
      })
      .then((response) => {
        return res.json(response.data);
      });
  } catch (err) {
    return res.status(500).json({
      errors: err,
    });
  }
};

// ==============================================================================================
// ==============================================================================================
const getImagesByBreedId = async (req: Request, res: Response) => {
  const size = "small";
  const { breedId, limit } = req.params;
  try {
    await axios
      .get(`${urlEndPoint}/images/search`, {
        params: { breed_id: breedId, limit: limit, size: size },
      })
      .then((response) => {
        const data = response.data;
        let breedImages = [];
        for (const key in data) {
          for (const breed in data[key].breeds) {
            breedImages.push({
              image_url: data[key].url,
            });
          }
        }
        return res.json(breedImages);
      });
  } catch (err) {
    return res.status(500).json({
      errors: err,
    });
  }
};

// ==============================================================================================
// ==============================================================================================
const getRandomImages = async (req: Request, res: Response) => {
  const mime_types = "png",
    size = "thumb";
  const { limit } = req.params;
  try {
    await axios
      .get(`${urlEndPoint}/images/search`, {
        params: { limit: limit, mime_types: mime_types, size: size },
      })
      .then((response) => {
        return res.json(response.data);
      });
  } catch (err) {
    return res.status(500).json({
      errors: err,
    });
  }
};

const getBreedsImage = async (req: Request, res: Response) => {
  const { limit } = req.params;
  try {
    await axios
      .get(`${urlEndPoint}/breeds`, {
        params: { limit: limit },
      })
      .then((response) => {
        const data = response.data;
        let arrayImage = [];
        for (const key in data) {
          arrayImage.push({
            id: data[key].id,
            name: data[key].name,
            image_url: data[key].image.url,
          });
        }
        return res.json(arrayImage);
      })
      .catch((err) => {
        return res.status(400).json({ errors: err });
      });
  } catch (error) {
    return res.status(400).json({ errors: error });
  }
};

export default {
  getBreedsBySearch,
  getAllBreeds,
  getImagesByBreedId,
  getBreedsImage,
  getRandomImages,
  getBreedById,
};
