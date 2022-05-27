import { ButtonDefault } from "../../Buttons/DefaultButton"
import { Modal } from "../../Modal"
import { WrapActionModalButtons } from "./styles"
import { SpinnerCircular } from "spinners-react"
import { toast } from 'react-toastify';
import { api } from "../../../services/api";
import { useState } from "react";

export const DeletePostModal = ({ show, onClose, title, id, removePostFromList }) => {
  const [loading, setLoading] = useState(false)

  const deletePost = async () => {
    try {
      setLoading(true)
      await api.delete(`/posts/${id}`)
      
      setLoading(false)

      removePostFromList(id)

      onClose()

      toast.success("Post deletado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (err) {
      setLoading(false)
      return err
    }
  }

  return (
    <Modal
      title={title}
      active={show}
      hideModal={() => onClose()}
    >

      <WrapActionModalButtons>
        <ButtonDefault color="#14181A" onClick={() => onClose()}>
          Cancelar
        </ButtonDefault>
        <ButtonDefault color="#D22730" onClick={() => deletePost()}>
          {loading ? <SpinnerCircular size={30} color="white" secondaryColor="#D22730" /> : 'Deletar'}
        </ButtonDefault>
      </WrapActionModalButtons>
    </Modal>
  )
}