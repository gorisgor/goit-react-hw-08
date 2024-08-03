import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import EditContactForm from "../EditContactForm/EditContactForm";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const notifyDelete = () => {
    toast("Contact successfully deleted", {
      duration: 4000,
      position: "top-center",
      style: {
        border: "1px solid black",
        backgroundColor: "#ff7d00",
      },
    });
  };

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

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
        <button
          className={css.btn}
          type="button"
          onClick={() => {
            setOpenEditModal(true);
          }}
        >
          Edit
        </button>
        <button
          className={css.btn}
          type="button"
          onClick={() => {
            setOpenDeleteModal(true);
          }}
        >
          Delete
        </button>
      </div>

      <Modal
        show={openDeleteModal}
        size="md"
        onClose={() => setOpenDeleteModal(false)}
        className={css.overlay}
        popup
      >
        <Modal.Body className={css.body}>
          <div className={css.content}>
            <h3>Are you sure you want to delete this contact?</h3>
            <div className={css.footer}>
              <Button
                className={css.btnyes}
                onClick={() => (
                  setOpenDeleteModal(false), handleDelete(), notifyDelete()
                )}
              >
                Yes, I'm sure
              </Button>
              <Button
                className={css.btnno}
                onClick={() => setOpenDeleteModal(false)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={openEditModal}
        size="md"
        onClose={() => setOpenEditModal(false)}
        className={css.overlay}
        popup
      >
        <Modal.Body className={css.body}>
          <EditContactForm
            contact={contact}
            closeModal={() => setOpenEditModal(false)}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
