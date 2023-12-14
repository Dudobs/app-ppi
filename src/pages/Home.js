import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

    const [users, setUsers]=useState([])

    useEffect(()=>{
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:8080/users');
        setUsers(result.data)
    }

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
                <th scope="col">Id</th>
                </tr>
            </thead>
            <tbody>

            {users.map((user, index) => (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.id}</td>
                </tr>
            ))}


            </tbody>
        </table>
        </div>
    </div>
  )
}
