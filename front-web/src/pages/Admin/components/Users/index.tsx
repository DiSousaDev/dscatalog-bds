import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Users = () => {
    return (
        <div>
            <Switch>
                <Route path="/admin/users" exact>
                    <h1>Exibir a listagem de usuários</h1>
                </Route>
                <Route path="/admin/users/create">
                    <h1>Criar novo usuário</h1>
                </Route>
                <Route path="/admin/users/:userId">
                    <h1>Editar um usuário</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default Users;