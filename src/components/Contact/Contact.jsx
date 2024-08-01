import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deleteContact } from "../../redux/contacts/operations";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";


export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const notify = ()=>{toast('Contact successfully deleted', {
    duration: 4000,
    position: 'top-center',
    style: {
      border: '1px solid black',
      backgroundColor: '#ff7d00'
    },
  })}

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={css.container}>
      <div className={css.info}>
        <FaUser className={css.icon} />
        <p>{name}</p>
      </div>
      <div className={css.info}>
        <FaPhoneAlt className={css.icon} />
        <p>{number}</p>
      </div>
      <div className={css.btnLine}>
      <button className={css.btn} type="button" >
        Edit
      </button>
      <button className={css.btn} type="button" onClick={() => { setOpenModal(true) }}>
        Delete
      </button>
      </div>

      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} className={css.overlay} popup>
        <Modal.Body className={css.body}>
          <div className={css.content} >
            <h3 >
              Are you sure you want to delete this contact?
            </h3>
            <div className={css.footer}>
              <Button className={css.btnyes} onClick={() => (setOpenModal(false), handleDelete(), notify())}>
                Yes, I'm sure
              </Button>
              <Button className={css.btnno} onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

