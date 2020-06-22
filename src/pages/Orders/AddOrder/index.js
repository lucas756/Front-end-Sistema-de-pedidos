import React from 'react';

import * as Yup from 'yup';

import { toast } from 'react-toastify';

import OrderForm from '~/components/OrderForm';

import api from '~/services/api';
import history from '~/services/history';

export default function Add() {
  const schema = Yup.object().shape({ 
    cliente_id: Yup.number().required(),
    descricao_pedido: Yup.string().required(),
  });

  async function handleSubmit(data) {
    try {
      await api.post('/pedidos', data);

      toast.success('Pedido Cadastrado com sucesso');
      history.push('/orders');
    } catch ({ response }) {
      toast.error(response.data.error);
    }
  }

  return (
    <OrderForm
      title="Cadastro de encomendas"
      schema={schema}
      onSubmit={handleSubmit}
    />
  );
}
