import React from 'react';

import * as Yup from 'yup';

import { toast } from 'react-toastify';

import DeliverymanForm from '~/components/DeliverymanForm';

import api from '~/services/api';
import history from '~/services/history';

export default function Add() {
  const schema = Yup.object().shape({ 
    name: Yup.string().required('o nome é obrigatorio'),
    endereço: Yup.string().required('o endereço é obrigatorio'),
    telefone: Yup.string().required('o telefone é obrigatorio'),
    restaurante_id: Yup.number().required('O id do restuarante é obrigatorio'),
  });

  async function handleSubmit(data) {
    try {
      await api.post('/clientes', data);

      toast.success('Cliente registered successful');
      history.push('/orders');
    } catch ({ response }) {
      toast.error(response.data.error);
    }
  }

  return (
    <DeliverymanForm
      title="Cadastro de entregadores"
      onSubmit={handleSubmit}
      schema={schema}
    />
  );
}
