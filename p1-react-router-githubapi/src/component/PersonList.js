import { useParams } from "react-router";
import { useFetch } from "../useFetch";
import { Person } from "./Person";

export const PersonList = () => {
  const { username } = useParams();
  const { isLoading, items } = useFetch(
    `https://api.github.com/users/${username}`
  );

  // console.log(items.data);

  return (
    <>
      {isLoading ? (
        <div className="center">Loading</div>
      ) : (
        <Person {...items.data} />
      )}
    </>
  );
};
