import { Field, Form, Formik, FormikHelpers } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FC } from "react";
import { SearchBarProfile, FormValuesProfile } from "./SearchBar.types";

const notify = () => toast("You have not entered anything!");

const SearchBar: FC<SearchBarProfile> = ({ onSearch }) => {
  const handleSubmit = (
    values: FormValuesProfile,
    { resetForm }: FormikHelpers<FormValuesProfile>
  ): void => {
    const { search } = values;
    if (search.trim() === "") {
      notify();
      return;
    }
    onSearch(search);
    resetForm();
  };

  return (
    <>
      <header className={css.container}>
        <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
          <Form className={css.form}>
            <Field
              className={css.input}
              type="text"
              name="search"
              placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
            <Toaster position="top-right" />
          </Form>
        </Formik>
      </header>
    </>
  );
};

export default SearchBar;
