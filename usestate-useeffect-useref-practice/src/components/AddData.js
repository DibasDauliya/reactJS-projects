import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const AddData = () => {
  const [person, setPerson] = useState({
    username: "",
    email: "",
    age: "",
  });
  const [people, setPeople] = useState([]);

  const submitData = (e) => {
    // const newPerson = { username, email, id: new Date().getTime().toString() };

    const newPerson = { ...person, id: uuidv4() };
    setPeople([...people, newPerson]);

    setPerson({
      username: "",
      email: "",
      age: "",
    });

    e.preventDefault();
  };
  return (
    <main>
      <form onSubmit={submitData}>
        <input
          required
          aria-required="true"
          placeholder="Enter you name"
          type="text"
          value={person.username}
          onChange={(e) => setPerson({ ...person, username: e.target.value })}
        />
        <input
          required
          aria-required="true"
          placeholder="Enter your email"
          type="email"
          value={person.email}
          onChange={(e) => setPerson({ ...person, email: e.target.value })}
        />
        <input
          required
          aria-required="true"
          placeholder="Enter your age"
          type="number"
          value={person.age}
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
        />
        <button type="submit">Sumbit Data</button>
      </form>
      <hr />
      <div>
        {people.map(({ username, email, id, age }) => (
          <div key={id}>
            <h1>Username: {username}</h1>
            <h1>Age: {age}</h1>
            <p>Email: {email}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
