import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(
      2,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .min(
      9,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  name: '',
  number: '',
};

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  // handleChange = event => {
  //   const { name, value } = event.currentTarget;

  // this.setState({
  //   [name]: value,
  // });

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  return (
    <Formik
      className="contactForm"
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor={nameInputId}>
          Name
          <Field
            type="text"
            name="name"
            id={nameInputId}
            // value={this.state.name}
            // onChange={this.handleChange}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="div"
          />
        </label>
        <label htmlFor={numberInputId}>
          Number
          <Field
            type="tel"
            name="number"
            id={numberInputId}
            // value={this.state.number}
            // onChange={this.handleChange}
          />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="div"
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
