import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SingIn from '~/pages/SingIn';
import SingUp from '~/pages/SingUp';

import Orders from '~/pages/Orders';
import NewOrder from '~/pages/Orders/AddOrder';
import EditOrder from '~/pages/Orders/EditOrder';

import Deliverymen from '~/pages/Deliverymen';
import NewDeliveryman from '~/pages/Deliverymen/Add';
import EditDeliveryman from '~/pages/Deliverymen/Edit';

import Recipients from '~/pages/Recipients';
import NewRecipient from '~/pages/Recipients/Add';
import EditRecipient from '~/pages/Recipients/Edit';

import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/SingUp" component={SingUp} />

      <Route path="/orders" exact component={Orders} isPrivate />
      <Route path="/orders/new" component={NewOrder} isPrivate />
      <Route path="/orders/edit" component={EditOrder} isPrivate />

      
      <Route path="/deliverymen/new" exact component={NewDeliveryman} isPrivate />
      <Route path="/deliverymen/edit" component={EditDeliveryman} isPrivate />

      <Route path="/produtos" exact component={Recipients} isPrivate />
      <Route path="/produto/novo" exact component={NewRecipient} isPrivate />
      <Route path="/recipients/edit" component={EditRecipient} isPrivate />

      <Route path="/problems" component={Problems} isPrivate />
    </Switch>
  );
}
 