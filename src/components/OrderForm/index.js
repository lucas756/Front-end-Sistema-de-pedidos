/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';

import { Form } from '@unform/web';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import PropTypes from 'prop-types';
import Input from '~/components/Input';

import { Container, Content, InputView, BackButton, TInput } from './styles';

import RecipientInput from './RecipientInput';
import DeliverymanInput from './DeliverymanInput';
import Button from '../Button';

import history from '~/services/history';

export default function OrderForm({ title, onSubmit, ...rest }) {
  const loading = useSelector(state => state.order.loading);

  return (
    <Container>
      <Form onSubmit={onSubmit} {...rest}>
        <header>
          <h2>Cadastro de Pedidos</h2>

          <div>
            <BackButton type="button" onClick={() => history.push('/orders')}>
              <MdChevronLeft size={28} color="#fff" /> <strong>VOLTAR</strong>
            </BackButton>
            <Button type="submit">
              {loading ? (
                'Salvando...'
              ) : (
                <>
                  <MdCheck size={24} color="#fff" />
                  <strong>SALVAR</strong>
                </>
              )}
            </Button>
          </div>
        </header>

        <Content>

          

          <strong>restaurante</strong>
          <Input placeholder="Exemplo Entregador" name="restaurante_id" />

          <strong>cliente_id</strong>
          <Input placeholder="Exemplo Entregador" name="cliente_id" />

          <strong>descricao_pedido</strong>
          <Input placeholder="Exemplo Entregador" name="descricao_pedido" />

       

    
        </Content>
      </Form>
    </Container>
  );
}

OrderForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
