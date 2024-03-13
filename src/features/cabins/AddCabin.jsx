import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "../cabins/CabinTable"
export default function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabins-form">
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabins-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens ="cabins-table">
        <Button>Show  cabin Table</Button>
      </Modal.Open>
      <Modal.Window name="cabins-table">
        <CabinTable/>
      </Modal.Window>
    </Modal>
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
