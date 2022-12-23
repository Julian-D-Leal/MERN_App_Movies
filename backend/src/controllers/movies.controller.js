import Movie from "../models/Movie"
var fs = require("fs")  

//responde con un json con todos los datos de la collection movie
export const showMovies = async(req, res) => {
    try {
        Movie.find({}, (err, items) => {
            if(err){
                console.error(err);
                res.status(500).send('An error ocurred', err);
            }
            else {
                res.json(items);
            }
        })
        // const movies = await Movie.find()
        // res.json(movies);
    } catch (error) {
        console.error(error);
        res.send(error);
    }
}

//Función para agregar una pelicula a la base de datos
export const addMovie =  async(req, res) => {
    try {
        // const add = new Movie({
        //     name: req.body.name,
        //     duration: req.body.duration,
        //     date: req.body.date,
        //     actors: req.body.actors,
        //     genres: req.body.genres,
        //     url: req.body.url,
        //     // image: {
        //     //     data: fs.readFileSync("uploads/" + req.file.filename),
        //     //     contentType: 'image/png'
        //     // }
        // });
        const movie = Movie(req.body)
        await movie.save();
        res.send(req.body)
    } catch (error) {
        res.send(error)
        console.error(error);
    }
}

//Función para eliminar una pelicula
export const deleteMovie = async(req, res) => {
    try {
        const {id} = req.params;
        await Movie.findByIdAndDelete(id);
        res.send("Deleted successfully")
    } catch (error) {
        console.error(error);
        res.send(error);
    }

}

//funcion para editar una pelicula
export const updateMovie = async(req, res) => {
    try {
        const {id} = req.params;
        const update = {
            name: req.body.name,
            duration: req.body.duration,
            date: req.body.date,
            actors: req.body.actors,
            genres: req.body.genres,
            url: req.body.url,
            // image: {
            //     data: fs.readFileSync("uploads/" + req.file.filename),
            //     contentType: 'image/png'
            // }
        };
        await Movie.findByIdAndUpdate(id, update);
        res.send(update);
    } catch (error) {
        console.error(error);
        res.send(error);
    }
}
