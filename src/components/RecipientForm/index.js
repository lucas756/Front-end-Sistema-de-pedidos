/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { Form } from '@unform/web';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import {
  Container,
  Content,
  TInput,
  InputContainer,
  BackButton,
} from './styles';

import Button from '../Button';
import MaskInput from '../MaskInput';

import history from '~/services/history';

export default function RecipientForm({ title, onSubmit, ...rest }) {
  const loading = useSelector(state => state.recipient.loading);

  return (
    <Container>
      <Form onSubmit={onSubmit} {...rest}>
        <header>
          <h2>{title}</h2>

          <div>
            <BackButton
              onClick={() => history.push('/recipients')}
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
                    <strong>SALVAR</strong>
                  </>
                )}
            </Button>
          </div>
        </header>

        <Content>
          <main>
            <InputContainer>
              <strong>Nome</strong>
              <TInput name="name" placeholder="Nome do Produto" />
            </InputContainer>

            <InputContainer>
              <strong>Valor</strong>
              <TInput name="preco" placeholder="Valor do Produto" />
            </InputContainer>
          </main>

          <main>
            <InputContainer>
              <strong>Descrição</strong>
              <TInput name="descricao" placeholder="Descrição do Produto" />
            </InputContainer>
          </main>
        </Content>
      </Form>
    </Container>
  );
}

RecipientForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
