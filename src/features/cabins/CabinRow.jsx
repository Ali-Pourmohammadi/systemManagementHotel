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
  const [editRowId, setEditRowId] = useState(null);
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;
  // const queryClient = useQueryClient();
  //   const { isLoading: isDeleting, mutate } = useMutation({
  //     mutationFn: deleteCabin,
  //     onSuccess: () => {
  //       toast.success("Cabin deleted successfully");
  //       queryClient.invalidateQueries({
  //         queryKey: ["cabin"],
  //       });
  //     },
  //     onError: () => {
  //       toast.error("Can't delete cabin!");
  //     },
  //   });
  const { deleteCabin, isDeleting } = useDeleteCabin();

  const toggleEditForm = (rowId) => {
    // Close any currently open row before opening the clicked row
    if (editRowId === rowId) {
      setEditRowId(null); // Close the currently open row if clicked again
    } else {
      setEditRowId(rowId); // Open the clicked row
    }
  };

  return (
    <>
      <TableRow>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <ButtonContainer>
          <Button onClick={() => toggleEditForm(cabinId)}>
            {editRowId === cabinId ? "Close" : "Edit"}
          </Button>
          <Button onClick={() => deleteCabin(cabinId)}>
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </ButtonContainer>
      </TableRow>
      {editRowId === cabinId && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}
