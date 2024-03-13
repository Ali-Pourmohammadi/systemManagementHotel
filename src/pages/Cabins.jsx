import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { useState } from "react";
import Button from "../ui/Button";
import AddCabin from "../features/cabins/AddCabin";
function Cabins() {

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filter / sort</p>
      </Row>
      <Row type="vertical">
        <CabinTable />
        <AddCabin/>
      </Row>
    </>
  );
}

export default Cabins;
