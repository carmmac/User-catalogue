import React from "react";
import styles from "./user-profile.module.scss";

const UserProfile = () => {
  return (
    <div className="wrapper--profile">
      <h1 className="visually-hidden">User profile page</h1>
      <div className={styles.header}>
        <h2 className="title">Профиль пользователя</h2>
        <button className="btn  btn--edit">Редактировать</button>
      </div>
      <form className={styles.form}>
        <fieldset className={styles.formField}>
          <label className={styles.label}>Name</label>
          <input className={styles.input} placeholder="Иван Иванов"></input>
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>User name</label>
          <input className={styles.input}placeholder="Ivan"></input>
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>E-mail</label>
          <input className={styles.input}placeholder="example@mail.com"></input>
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>Street</label>
          <input className={styles.input}placeholder="ул. Пример"></input>
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>City</label>
          <input className={styles.input}placeholder="Москва"></input>
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>Zip code</label>
          <input className={styles.input}placeholder="1234234"></input>
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>Phone</label>
          <input className={styles.input}placeholder="89991112233"></input>
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>Website</label>
          <input className={styles.input}placeholder="www.example.com"></input>
        </fieldset>

        <fieldset className={styles.formField}>
          <label className={styles.label}>Comment</label>
          <textarea className={styles.commentArea}></textarea>
        </fieldset>
      </form>
      <button className={`btn  btn--submit  ${styles.submitBtn}`}>Отправить</button>
    </div>
  );
};

export default UserProfile;
