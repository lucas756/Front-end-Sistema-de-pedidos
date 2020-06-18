/*import React from 'react';

import * as Yup from 'yup';

import { toast } from 'react-toastify';

import { Form, Input } from '@rocketseat/unform';



import api from '~/services/api';
import history from '~/services/history';

export default function AddOrder() {
  const schema = Yup.object().shape({
    restaurante_id: Yup.number().required(),
    cliente_id: Yup.number().required(),
    descricao_pedido: Yup.string().required(),
  });

  async function handleSubmit({ restaurante_id, cliente_id, descricao_pedido }) {
    try {
      await api.post(`/pedidos`, {
        restaurante_id,cliente_id, descricao_pedido
      });
      toast.success('Pedido created successful');
      history.push('/orders');
    } catch ({ response }) {
      toast.error(response.data.error);
      
    }
  }

  return (
    
  );
}
*/

import React from 'react';

import * as Yup from 'yup';

import { toast } from 'react-toastify';

import OrderForm from '~/components/OrderForm';

import api from '~/services/api';
import history from '~/services/history';

export default function Add() {
  const schema = Yup.object().shape({ 
    restaurante_id: Yup.number().required(),
    cliente_id: Yup.number().required(),
    descricao_pedido: Yup.string().required(),
  });

  async function handleSubmit(data) {
    try {
      await api.post('/pedidos', data);

      toast.success('Cliente registered successful');
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
