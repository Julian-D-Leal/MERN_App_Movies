import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
  } from "reactstrap";

const ModalD = ({ toggle, modalD, delMovie, activeItem }) => {
    const [actual, setActual] = useState(activeItem);

  return (
      <Modal isOpen={modalD} toggle={toggle}>
      <ModalHeader toggle={toggle}>Advertencia</ModalHeader>
      <ModalBody>
        ¿Está seguro de eliminar la pelicula {actual.name}?
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={toggle}>
            Close
          </Button>
        <Button color='danger' onClick={() => delMovie(actual._id)}>
          Eliminar
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalD;