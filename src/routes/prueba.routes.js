import { Router } from "express";
import { showMovies, addMovie, deleteMovie, updateMovie } from "../controllers/movies.controller";
import multer from "multer";

const Storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: Storage
});

const router = Router();

router.get("/movies/list", showMovies);
//router.post("/movies/add", upload.single("image"),addMovie);
router.post("/movies/add",addMovie);
router.delete("/movies/:id/delete", deleteMovie);
//router.put("/movies/:id/update", upload.single("image"),updateMovie)
router.put("/movies/:id/update",updateMovie)

export default router;