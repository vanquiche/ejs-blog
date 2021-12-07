import React from 'react';
import { useForm } from 'react-hook-form';
import * as style from '../styles/styles.module.css';

export default function ContactForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className={style.contactForm} onSubmit={handleSubmit(onSubmit)}>
      <label for='name'>Name</label>
      <input
        name='name'
        type='text'
        placeholder='Dalai Lama'
        autoComplete='off'
        {...register('name')}
      />
      <label for='email'>Email</label>
      <input
        name='email'
        type='email'
        placeholder='dlama@email.com'
        autoComplete='off'
        {...register('email')}
      />
      <label for='message'>Message</label>
      <textarea
        name='message'
        rows='8'
        placeholder='hello friend'
        {...register('message')}
      ></textarea>
      <input className={style.formSubmitBtn} type='submit' value='send' />
    </form>
  );
}
