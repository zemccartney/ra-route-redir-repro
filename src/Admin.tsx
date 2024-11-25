import {
  Admin as RAAdmin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
export default function Admin() {
  return (
    <RAAdmin layout={Layout} dataProvider={dataProvider} authProvider={authProvider} basename="/admin">
      <Resource name="posts" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
      <Resource name="users" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    </RAAdmin>
  );
}
