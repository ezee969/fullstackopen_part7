import React from 'react';
import { useParams } from 'react-router-dom';

//redux
import { useSelector } from 'react-redux';
import { selectUsers } from 'app/slices/usersSlice';

//components/ui
import { UserCard } from './components';

const UserList = () => {
  const { username } = useParams();
  const users = useSelector(selectUsers);
  const filteredUsers = users.filter((user) => user.username !== username);
  const userList = filteredUsers.map((user, i) => <UserCard key={i} data={user} />);

  return <div className="flex flex-col gap-2 border-t">{userList}</div>;
};

export default UserList;
