import Image from 'next/image';
import React, { useState } from 'react';
import { useGetUsersQuery } from '../../graphql/generated/schema';

function Users() {
  const { data, error, loading } = useGetUsersQuery();

  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error('Error al cargar usuarios:', error);
    return <p>Error al cargar usuarios</p>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data?.users.map((user) => (
          <li key={user.uuid}>
            {user.firstname}
          </li>

        ))}
      </ul>
    </div>
  );
}

export default Users;
