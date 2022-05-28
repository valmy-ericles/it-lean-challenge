import { Modal } from "../../Modal"
import { InputBase } from "../../Input"
import { SpinnerCircular } from "spinners-react"
import { ButtonDefault } from "../../Buttons/DefaultButton"

import { Form, WrapActionModalButtons, WrapInputs } from "./styles"

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { api } from "../../../services/api";

const postFormSchema = yup.object().shape({
  title: yup.string()
    .required('Título obrigatório'),
  description: yup.string()
    .required('Descrição obrigatório')
    .min(10, "Descrição precisa ter no mínimo 10 caracteres"),
})

export const EditPostModal = ({ show, onClose, postToEdit, updatePostFromList }) => {
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(postFormSchema)
  })

  setValue("title", postToEdit?.title || "")
  setValue("description", postToEdit?.body || "")

  const { errors } = formState

  const handleSubmitPost = async (data) => {
    const { title, description } = data

    try {
      await api.put(`/posts/${postToEdit.id}`, {
        title,
        body: description,
        userId: 1,
      })

      const updatedPost = {
        id: postToEdit.id,
        title,
        body: description,
        userId: 1,
      }

      updatePostFromList(updatedPost)
      onClose()

      toast.success("Post editado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (err) {
      return err
    }
  }

  return (
    <Modal
      title="Editar Post"
      active={show}
      hideModal={() => onClose()}
      size="lg"
    >
      <Form onSubmit={handleSubmit(handleSubmitPost)}>
        <WrapInputs>
          <InputBase
            name="title"
            label="Título"
            type="text"
            placeholder="Digite o título do posto"
            {...register("title")}
            error={errors.title}
          />
          <InputBase
            type="textarea"
            label="Descrição"
            name="description"
            placeholder="Digite a descrição do post..."
            rows={12}
            {...register("description")}
            error={errors.description}
          />
        </WrapInputs>

        <WrapActionModalButtons>
          <div>
            <ButtonDefault color="#14181A" onClick={() => onClose()}>
              Cancelar
            </ButtonDefault>
            <ButtonDefault color="#D22730" type="submit">
              {formState.isSubmitting ? <SpinnerCircular size={30} color="white" secondaryColor="#D22730" /> : 'Salvar'}
            </ButtonDefault>
          </div>
        </WrapActionModalButtons>
      </Form>
    </Modal>
  )
}