import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Filter from "../ui/Filter"
import { useState } from "react";
import Button from "../ui/Button";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperation from "../features/cabins/CabinTableOperation";
function Cabins() {

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperation>
          <Filter filterField={"discount"} options={[
            {value:"all" , label:"All"},
            {value:"no-discount" , label:"No discount"},
            {value:"discount" , label:"With discount"},

          ]}/>
        </CabinTableOperation>
    </Row>
      <Row type="vertical">
        <CabinTable />
        <AddCabin/>
      </Row>
    </>
  );
}

export default Cabins;
