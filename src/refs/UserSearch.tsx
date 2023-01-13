import React, { useState, useRef, useEffect } from 'react';

const users = [
  {
    name: 'ANup',
    age: 28,
  },
  {
    name: 'ajay',
    age: 29,
  },
  {
    name: 'Apoorva',
    age: 26,
  },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((el) => el.name === name);
    setUser(foundUser);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      UserSearch
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  );
};

export default UserSearch;
