import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { useState } from "react";
import Button from "../ui/Button";
// import {CreateCabinForm} from "../features/cabins/CreateCabinForm";
function Cabins() {
  const [showForm , hideForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filter / sort</p>
      </Row>
      <Row type="vertical">
        <CabinTable />
        <Button onClick={()=> hideForm(!showForm)}>{showForm? "Close" : "Add new cabin"}</Button>
       { showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
