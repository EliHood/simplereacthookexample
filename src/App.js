import React, {Component, useState, Fragment} from 'react';
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import logo from './logo.svg';
import './App.css';

const App = () => {

    const usersData = [
        {
            id: 1,
            name: 'Eli',
            username: 'ProOwl'
        }, {
            id: 2,
            name: 'Tod',
            username: 'barnowls servant'
        }, {
            id: 3,
            name: 'Jake',
            username: 'owlMaster'
        }
    ]

    const initialFormState = {
        id: null,
        name: '',
        username: ''
    }

    const addUser = user => {
        user.id = users.length + 1
        setUsers([
            ...users,
            user
        ])
    }

    // when edit is selected on a user, will turn on edit mode and set the current
    // user
    const editRow = user => {
        setEditing(true)

        setCurrentUser({id: user.id, name: user.name, username: user.username})
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)

        setUsers(users.map(user => (user.id === id
            ? updatedUser
            : user)))
    }
    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id))
    }
    const [currentUser,setCurrentUser] = useState(initialFormState)
    const [users, setUsers] = useState(usersData);
    const [editing,setEditing] = useState(false);

    return (
        <div className="container">
            <h1>React Hook CRUD Demo</h1>
            <div className="flex-row">
                <div className="flex-large">

                    {editing
                        ? (
                            <Fragment>
                                <h2>Edit user</h2>
                                <EditUserForm
                                    editing={editing}
                                    setEditing={setEditing}
                                    currentUser={currentUser}
                                    updateUser={updateUser}/>
                            </Fragment>

                        )
                        : (
                            <Fragment>
                                <h2>Add user</h2>
                                <AddUserForm addUser={addUser}/>
                            </Fragment>
                        )}
                </div>
                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
                </div>
            </div>

        </div>
    )
}

export default App;
