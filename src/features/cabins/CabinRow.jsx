/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import useDelete from "./DeleteCabin";
import useDeleteCabin from "./DeleteCabin";
import useCreateCabin from "./createCabin";
import { FaCopy, FaPen, FaTrash } from "react-icons/fa6";
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  margin: 1rem;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0 0.5rem;
`;
const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
export default function CabinRow({ cabin }) {
  const [editRow, setEditRow] = useState(false);
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  } = cabin;

  const { isCreating, createCabin } = useCreateCabin();
  const { deleteCabin, isDeleting } = useDeleteCabin();
  function handleDuplicate() {
    createCabin({
      name: `copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      description,
      image,
    });
  }
  return (
    <>
      <TableRow>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{`${discount ? formatCurrency(discount) : `__`}`}</Discount>
        <ButtonContainer>
          <Button
            disabled={isCreating}
            onClick={handleDuplicate}
            title="duplicate"
          >
            <FaCopy />
          </Button>
          <Button onClick={() => setEditRow((set) => !set)} title="edit">
            {editRow ? "Close" : <FaPen />}
          </Button>
          <Button
            disabled={isDeleting}
            onClick={() => deleteCabin(cabinId)}
            title="delete"
          >
            {isDeleting ? "Deleting..." : <FaTrash />}
          </Button>
        </ButtonContainer>
      </TableRow>
      {editRow && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}
