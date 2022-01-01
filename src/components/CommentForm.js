import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as style from '../styles/styles.module.css';

export default function CommentForm({ post }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    axios
      .post('/.netlify/functions/postComment', { ...data, post })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    e.target.reset();
  };
  return (
    <form
      className={style.commentForm}
      onSubmit={handleSubmit(onSubmit)}
      data-netlify='true'
    >
      <input
        type='text'
        name='text'
        placeholder='message'
        autoComplete='off'
        {...register('text')}
      ></input>
      <input
        type='text'
        name='user'
        placeholder='user'
        autoComplete='off'
        {...register('user')}
      ></input>
      <input className={style.formSubmitBtn} type='submit' value='post' />
    </form>
  );
}
