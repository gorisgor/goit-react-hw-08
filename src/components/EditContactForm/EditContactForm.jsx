import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { editContact } from "../../redux/contacts/operations";
import css from "./EditContactForm.module.css";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Minimum 3 letters")
    .max(30, "Maximum 30 letters")
    .required("Name is required"),
  number: Yup.string()
    .trim()
    .min(9, "Minimum 9 digits")
    .required("A phone number is required"),
});

export default function EditContactForm({ contact, closeModal }) {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const updatedContact = { id: contact.id, ...values };
    dispatch(editContact(updatedContact));
    actions.resetForm();
    closeModal();
    toast("Contact successfully updated", {
      duration: 4000,
      position: "top-center",
      style: {
        border: "1px solid black",
        backgroundColor: "#00ff15",
      },
    });
  };

  return (
    <Formik
      initialValues={{
        name: contact.name,
        number: contact.number,
      }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.container}>
        <div className={css.fieldGroup}>
          <label>Name</label>
          <Field className={css.input} name="name" type="text" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.fieldGroup}>
          <label>Number</label>
          <Field className={css.input} type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <div className={css.buttonGroup}>
          <button className={css.btn} type="submit">
            Update contact
          </button>
          <button
            className={`${css.btnCancel}`}
            type="button"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
}
