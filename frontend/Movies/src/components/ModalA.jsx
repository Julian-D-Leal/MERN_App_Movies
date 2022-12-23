import { useState} from "react";
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

const mov = {
  name: "",
  duration: "",
  date: "",
  actors: '',
  genres: '',
  url: "",
 // image: "",
};

export const ModalA = ({ toggle, modal, addMovie }) => {
  const [movie, setMovie] = useState(mov);
  
  const handleChange = (e) => {
    let { name, value } = e.target;
    const activeItem = { ...movie, [name]: value };
    setMovie(activeItem);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Agregar Pelicula</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for='name'>Nombre:</Label>
            <Input
              type='text'
              name='name'
              onChange={handleChange}
              placeholder='Ingrese el nombre de la pelicula'
            />
          </FormGroup>
          <FormGroup>
            <Label for='duration'>Duracion:</Label>
            <Input
              type='text'
              name='duration'
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
              placeholder='Ingrese la fecha de la pelicula'
            />
          </FormGroup>
          <FormGroup>
            <Label for='actors'>Actores:</Label>
            <Input
              type='text'
              name='actors'
              onChange={handleChange}
              placeholder='Ingrese los actores de participan en la pelicula'
            />
          </FormGroup>
          <FormGroup>
            <Label for='genres'>Generos:</Label>
            <Input
              type='text'
              name='genres'
              onChange={handleChange}
              placeholder='Ingrese a que generos pertenece la pelicula'
            />
          </FormGroup>
          <FormGroup>
            <Label for='url'>URL de la imagen:</Label>
            <Input
              type='text'
              name='url'
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
        <Button color='success' onClick={() => addMovie(movie)}>
          Guardar
        </Button>
      </ModalFooter>
    </Modal>
  );
};