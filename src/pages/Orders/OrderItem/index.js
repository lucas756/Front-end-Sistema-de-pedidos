import React from 'react';


import PropTypes from 'prop-types';

import { MdVisibility, MdEdit, MdDeleteForever } from 'react-icons/md';

import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

import { Modal } from '../styles';

import Badge from '~/components/Badge';
import Menu from '~/components/Menu';
import ConfirmBox from '~/components/ConfirmBox';

import api from '~/services/api';

import { showOrderRequest } from '~/store/modules/order/actions';

export default function OrderItem({ orders }) {

  
  

  return (
    <tbody>
      {orders.map(ord => (
        <tr key={ord.id}>
          <td>
            <span>#{ord.id}</span>
          </td>
          <td>
            <span>{ord.cliente_id}</span>
          </td>
          <td>
            <span>{ord.descricao_pedido}</span>
          </td>
          <td>
            <span>{ord.situacao == false ? 'Não Está Pronto' : 'Já Está Pronto'}</span>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
