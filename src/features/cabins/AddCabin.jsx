import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
export default function AddCabin() {
  return (<div>

    <Modal>
      <Modal.Open opens="cabins-form">
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabins-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  </div>
  );
}

// export default function AddCabin() {
//   const [openModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal(true)}>Add Cabin</Button>
//       {openModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }
