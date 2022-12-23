/** @format */

import axios from "axios";
import { useState, useEffect } from "react";
import { ModalA } from "./ModalA";
import { ModalEdit } from "./ModalEdit";
import ModalD from "./ModalD";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

export default function Movies() {
  const [movies, setPost] = useState([]);
  const [edit, setEdit] = useState({});
  const [del, setDel] = useState({})
  const [modal, setmodal] = useState(false);
  const [modalE, setmodalE] = useState(false);
  const [modalD, setModalD] = useState(false);
  const [AlertE, setAlertE] = useState(false);
  const [AlertA, setAlertA] = useState(false);
  const [AlertD, setAlertD] = useState(false);
  

  const MoviesList = async () => {
    await axios
      .get("http://localhost:5000/api/movies/list", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  };

  

  useEffect(() => {
    MoviesList();
  }, []);

  const addMovie = async (item) => {
    const data = JSON.stringify(item);
    await axios
      .post("http://localhost:5000/api/movies/add", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setmodal(false);
    setAlertA(true);
    setTimeout(() => {
      setAlertA(false);
    }, 5000);
    MoviesList();
  };

  const EditMovie = async (item) => {
    const data = JSON.stringify(item);
    await axios
      .put("http://localhost:5000/api/movies/" + item._id + "/update", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then()
      .catch((err) => console.log(err));
    setmodalE(false);
    setAlertE(true);
    setTimeout(() => {
      setAlertE(false);
    }, 5000);
    MoviesList();
  };
  //se activa el modal y se pasa la info de la movie al modal
  const openModalE = (movie) => {
    setEdit(movie);
    toggle2();
  };

  const openModalD = (movie) => {
    setDel(movie);
    toggleConfirmation();
  };

  const toggleConfirmation = () => {
    setModalD(!modalD);
  };

  const toggle = () => {
    setmodal(!modal);
  };

  const toggle2 = () => {
    setmodalE(!modalE);
  };


  const deleteMovie = async (id) => {
    await axios.delete("http://localhost:5000/api/movies/" + id + "/delete");
    setAlertD(true);
    setTimeout(() => {
      setAlertD(false);
    }, 5000);
    toggleConfirmation();
    MoviesList();
  };
  
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Wombat Movies</Navbar.Brand>
        </Container>
      </Navbar>
      {AlertE && <Alert variant='success'>Pelicula editada con éxito</Alert>}
      {AlertA && <Alert variant='success'>Pelicula agregada con éxito</Alert>}
      {AlertD && <Alert variant='danger'>Pelicula eliminada</Alert>}
      <Button className='mt-3 mb-3' variant='success' onClick={() => toggle()}>
        Agregar pelicula
      </Button>
      <CardGroup>
        {movies.map((movie) => (
            <Card key={movie._id}>
              <Card.Img
                variant='top'
                height='500'
                width='300'
                src={movie.url}
                alt={movie.url}
              />

              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>
                  Actores: {movie.actors} <br />
                  Generos: {movie.genres}
                </Card.Text>
                <Button variant='primary' onClick={() => openModalE(movie)}>
                  Editar
                </Button>
                <Button variant='danger' onClick={() => openModalD(movie)}>
                  Eliminar
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>
                  duración: {movie.duration}, Año: {movie.date}
                </small>
              </Card.Footer>
            </Card>
        ))}
      </CardGroup>
      {modal && (<ModalA toggle={toggle} modal={modal} addMovie={addMovie} />)}
      {modalE && (
        <ModalEdit
          toggle={toggle2}
          modalE={modalE}
          editMovie={EditMovie}
          activeItem={edit}
        />
      )}
      {modalD && (
      <ModalD 
        toggle= {toggleConfirmation}
        modalD={modalD}
        delMovie={deleteMovie}
        activeItem={del}
      />
      )}
    </>
  );
}
