import { Request, Response } from "express";
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
        return res.json(response.data);
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
const getBreedsByName = async (req: Request, res: Response) => {
  const { search } = req.query;
  if (search) {
    await axios
      .get(`${urlEndPoint}/breeds/search`, {
        params: { q: search },
      })
      .then((response) => {
        return res.json(response.data);
      })
      .catch((err) => {
        return res.status(500).json({
          errors: err,
        });
      });
  } else return res.json([]);
};

// ==============================================================================================
// ==============================================================================================
const getImagesByBreedId = async (req: Request, res: Response) => {
  const { breedId, limit } = req.params;
  try {
    await axios
      .get(`${urlEndPoint}/images/search`, {
        params: { breed_id: breedId, limit: limit },
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

export default { getBreedsByName, getAllBreeds, getImagesByBreedId };
