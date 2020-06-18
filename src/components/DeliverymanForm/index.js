/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import { Form } from '@unform/web';

import { Container, BackButton, Content } from './styles';

import Input from '~/components/Input';
import Button from '~/components/Button';

import history from '~/services/history';

export default function DeliverymanForm({ title, onSubmit, ...rest }) {
  const loading = useSelector(state => state.deliveryman.loading);

  return (
    <Container>
      <Form onSubmit={onSubmit} {...rest}>
        <header>
          <h2>Cadastro de Clientes</h2>

          <div>
            <BackButton
              onClick={() => history.push('/orders')}
              type="button"
            >
              <MdChevronLeft size={28} color="#fff" /> <strong>VOLTAR</strong>
            </BackButton>
            <Button type="submit">
              {loading ? (
                'Salvando...'
              ) : (
                <>
                  <MdCheck size={24} color="#fff" />
                  <strong>CADASTR</strong>
                </>
              )}
            </Button>
          </div>
        </header>

        <Content>

        
        <strong>Nome</strong>
          <Input placeholder="Exemplo Entregador" name="name" />

          <strong>Endereço</strong>
          <Input placeholder="Exemplo Entregador" name="endereço" />

          <strong>telefone</strong>
          <Input placeholder="Exemplo Entregador" name="telefone" />

          <strong>restaurante</strong>
          <Input placeholder="Exemplo Entregador" name="restaurante_id" />
    
    
        </Content>
      </Form>
    </Container>
  );
}

DeliverymanForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
