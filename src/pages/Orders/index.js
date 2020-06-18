/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import { MdAdd, MdSearch } from 'react-icons/md';

import { Container } from './styles';

import OrderItem from './OrderItem';
import ShimmerLoader from '~/components/ShimmerLoader';
import EmptyList from '~/components/EmptyList';
import Header from '~/components/Header';
import Pagination from '~/components/Pagination';

import api from '~/services/api';
import history from '~/services/history';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState('');
  const [lengthOrders, setLengthOrders] = useState(0);

  async function loadOrders(page) {
    setLoading(true);
    const orders = await api.get(`/pedidos`, {
      params: {
        page,
      },
    });

    console.log(orders)
    const data = orders.data.map(order => ({
      ...order,
      disabled: order.end_date,
    }));

    setLengthOrders(orders.data.length);
    setOrders(data);
    setLoading(false);
  }

  useEffect(() => {
    loadOrders(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleNavigate() {
    history.push('/orders/new');
  }

  return (
    <Container>
      <Header>
        <h2>Gerenciando Pedidos</h2>

        <div>
          
          <button onClick={handleNavigate} type="button">
            <MdAdd size={22} color="#fff" /> CADASTRAR
          </button>
        </div>
      </Header>
      {loading ? (
        <ShimmerLoader />
      ) : (
        <table>
          {!orders.length ? (
            <EmptyList />        
          ) : (
            <>
              <thead>
                <tr>
                  <th>
                    <strong>ID</strong>
                  </th>
                  <th>
                    <strong>Cliente</strong>
                  </th>
                  <th>
                    <strong>Pedido</strong>
                  </th>
                  <th> 
                    <strong>Estado</strong>
                  </th>
                
                </tr>
              </thead>

              {!orders.length ? (
                <strong>não há encomendas cadastradas</strong>
              ) : (
                <OrderItem orders={orders} />
              )}
            </>
          )}
        </table>
      )}
      <Pagination loadItems={loadOrders} itemsLenght={lengthOrders} />
    </Container>
  );
}
