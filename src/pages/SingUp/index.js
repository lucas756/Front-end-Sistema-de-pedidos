import { Form, Input } from '@rocketseat/unform';

import React from 'react';

import * as Yup from 'yup';

import { toast } from 'react-toastify';


import api from '~/services/api';
import history from '~/services/history';

export default function Add() {
  const schema = Yup.object().shape({ 
    name: Yup.string().required('O nome é obrigatório'),
  });

  async function handleSubmit(data) {
    try {
      await api.post('/restaurante', data);

      toast.success('Deliveryman registered successful');
      history.push('/');
    } catch ({ response }) {
      toast.error(response.data.error);
    }
  }

  return (

    
    

   <Form onSubmit={handleSubmit} schema={schema}>
     <h1>Pedidos</h1>
     <a href="/">Login</a>
   <strong>Nome</strong>
   <Input name="name" type="text" placeholder="Lucas" />
   <strong>Nome</strong>
   <Input name="name" type="text" placeholder="Lucas" />
   <strong>Nome</strong>
   <Input name="name" type="text" placeholder="Lucas" />
   <strong>Nome</strong>
   <Input name="name" type="text" placeholder="Lucas" />
   <strong>Nome</strong>
   <Input name="name" type="text" placeholder="Lucas" />
  

   <button type="submit">{'Acessar'}</button>
 </Form>

    
  );
}
