import React from 'react';

import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { MdVisibility, MdEdit, MdDeleteForever } from 'react-icons/md';


import { Form } from '@unform/web';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

import { Modal, Text } from '../styles';

import Badge from '~/components/Badge';
import Menu from '~/components/Menu';
import ConfirmBox from '~/components/ConfirmBox';

import api from '~/services/api';

import { showOrderRequest } from '~/store/modules/order/actions';

export default function OrderItem({ orders }) {
  const dispatch = useDispatch();

  async function handleShowOrder(id) {
    console.log(id);
    const response = await api.get(`/pedidos/${id}`);

    const order = {
      ...response.data,
    };

    confirmAlert({
      customUI: () => (
        <Modal>
          <div>
            <strong>Informações do Pedido</strong>
            <span>
              Pedido: 
            </span>
            <p>
              {order.descricao_pedido}
            </p>
            <strong>Informações do cliente</strong>
            <span>
              Nome:
            </span>
            <p>
              {order.cliente.name}
            </p>
            <span>
              Endereço:
            </span>
            <p>
              {order.cliente.endereço}
            </p>
            <span>
              Telefone: 
            </span>
            <p>
              {order.cliente.telefone}
            </p>
            
          </div>
        </Modal>
      ),
    });
  }

  async function handleShowForm(id) {
    console.log(id);
    const response = await api.get(`/pedidos/${id}`);

    const order = {
      ...response.data,
    };

    confirmAlert({
      customUI: () => (
        <Modal>
         <div>
         <Form >
        <header>
          <h2>Edição de Pedidos</h2>

          <div>
         
            <button type="submit">
             
                <>
                
                  <strong>SALVAR</strong>
                </>
              
            </button>
          </div>
        </header>

        

          

    
          <strong>cliente_id</strong>
          <input placeholder="Exemplo Entregador" name="cliente_id" value={order.cliente.name} />
          <p></p>

          <strong>descricao_pedido</strong>
          <input placeholder="Exemplo Entregador" name="descricao_pedido" />

       

    
        
      </Form>
         </div>
        </Modal>
      ),
    });
  }

  


  return (
    <tbody>
      {orders.map(ord => (
        <tr key={ord.id}>
          <td>
            <span>#{ord.id}</span>
          </td>
          <td>
            <span>{ord.cliente.name}</span>
          </td>
          <td>
            <span>{ord.descricao_pedido}</span>
          </td>
          <td>
            <span>{ord.situacao == false ? 'Não Está Pronto' : 'Já Está Pronto'}</span>
          </td>
          <td>
            <div>
              <Menu>
             
          <li>
            <button
             type="button"
             onClick={() => handleShowForm(ord.id)}
            >
            <MdEdit size={20} color="#4D85EE" />
               Editar
            </button>
             </li>
             <li>
            <button type="button" >
              <MdDeleteForever size={20} color="#DE3B3B" />
                Cancelar
              </button>
            </li>
          
                <li>
                  <button
                    type="button"
                    onClick={() => handleShowOrder(ord.id)}
                  >
                    <MdVisibility size={20} color="#7d40e7" />
                    Visualizar
                  </button>
                </li>
              </Menu>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
