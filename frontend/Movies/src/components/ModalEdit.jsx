/** @format */

import React from "react";
import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export const ModalEdit = ({ toggle, modalE, editMovie, activeItem }) => {
  const [actual, setActual] = useState(activeItem);

  const handleChange = (e) => {
    let { name, value } = e.target;
    const update = { ...actual, [name]: value };
    setActual(update);
  };

  return (
    <Modal isOpen={modalE} toggle={toggle}>
      <ModalHeader toggle={toggle}>Actualizar pelicula</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for='name'>Nombre:</Label>
            <Input
              type='text'
              name='name'
              value={actual.name}
              onChange={handleChange}
              placeholder='Ingrese el nombre de la pelicula'
            />
          </FormGroup>
          <FormGroup>
            <Label for='duration'>Duracion:</Label>
            <Input
              type='text'
              name='duration'
              value={actual.duration}
              onChange={handleChange}
              placeholder='Ingrese la duración de la pelicula'
            />
          </FormGroup>
          <FormGroup>
            <Label for='date'>Fecha:</Label>
            <Input
              type='text'
              name='date'
              onChange={handleChange}
              value={actual.date}
              placeholder='Ingrese la fecha de la pelicula'
            />
          </FormGroup>
          <FormGroup>
            <Label for='actors'>Actores:</Label>
            <Input
              type='text'
              name='actors'
              value={actual.actors}
              onChange={handleChange}
              placeholder='Ingrese los actores de participan en la pelicula'
            />
          </FormGroup>
          <FormGroup>
            <Label for='genres'>Generos:</Label>
            <Input
              type='text'
              name='genres'
              value={actual.genres}
              onChange={handleChange}
              placeholder='Ingrese a que generos pertenece la pelicula'
            />
          </FormGroup>
          <FormGroup>
            <Label for='url'>URL de la imagen:</Label>
            <Input
              type='text'
              name='url'
              value={actual.url}
              onChange={handleChange}
              placeholder='Ingrese la URL de la imagen'
            />
          </FormGroup>
          {/* <FormGroup>
                <Label for='image'>Imagen:</Label>
                <Input
                  type='file'
                  name='image'
                  onChange={handleChange}
                  placeholder='Ingrese el archivo de la imagen'
                />
              </FormGroup> */}
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color='success' onClick={() => editMovie(actual)}>
          Actualizar
        </Button>
      </ModalFooter>
    </Modal>
  );
};
