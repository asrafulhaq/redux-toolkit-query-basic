import { useGetAllUserQuery } from "../../app/api/apiSlice";

const UserList = () => {
  const { data, isError, isLoading, isSuccess, error } = useGetAllUserQuery();

  let content = "";

  if (isLoading) {
    content = <h1>Loading . . . </h1>;
  }

  if (isError) {
    content = <h1>{error.error}</h1>;
  }

  if (isSuccess) {
    content = data.map((item, index) => {
      return <h1 key={index}>{item.name}</h1>;
    });
  }

  return content;
};

export default UserList;
