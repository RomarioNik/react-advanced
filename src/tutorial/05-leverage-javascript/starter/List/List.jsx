import { people } from "../../../../data";
import { Person } from "../Person";

export const List = () => {
  return <Person people={people} />;
};
