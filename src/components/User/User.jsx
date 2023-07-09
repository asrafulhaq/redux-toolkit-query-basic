import { useState } from "react";
import { useCreateUserMutation } from "../../app/api/apiSlice";

const User = () => {
  const [createUser, { data, isLoading, isSuccess, isError, error }] =
    useCreateUserMutation();

  const [input, setInput] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (isLoading) {
    console.log("Loading . . . ");
  }

  if (isSuccess) {
    console.log(data);
  }

  if (isError) {
    console.log(error.error);
  }

  const handleUserCreate = (e) => {
    e.preventDefault();
    createUser(input);
  };

  return (
    <div>
      <form onSubmit={handleUserCreate}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleInput}
          value={input.name}
        />
        <input
          type="text"
          placeholder="Name"
          name="email"
          onChange={handleInput}
          value={input.email}
        />
        <input
          type="text"
          placeholder="Name"
          name="password"
          onChange={handleInput}
          value={input.password}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default User;
