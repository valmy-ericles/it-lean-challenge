import { InputBase } from "../Input"
import { ButtonWrapper, Form } from "./styles"
import { ButtonDefault } from "../Buttons/DefaultButton"
import { SpinnerCircular } from "spinners-react"

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { api } from "../../services/api";

const postFormSchema = yup.object().shape({
  title: yup.string()
    .required('Título obrigatório'),
  description: yup.string()
  .required('Descrição obrigatório')
  .min(10, "Descrição precisa ter no mínimo 10 caracteres"),
})

export const NewPostForm = ({ addNewPostOnList }) => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(postFormSchema)
  })
  
  const { errors } = formState

  const handleSubmitPost = async (data) => {
    const { title, description } = data

    try {
      await api.post('/posts', {
        title,
        body: description,
        userId: 1,
      })

      const newPost = {
        id: Math.floor(Math.random() * 200),
        title,
        body: description,
      }

      addNewPostOnList(newPost)
      reset()
      
      toast.success("Post criado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (err) {
      return err
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitPost)}>
      <span>Novo Post</span>
      <InputBase
        name="title"
        type="text"
        placeholder="Digite o título do posto"
        {...register("title")}
        error={errors.title}
      />
  
      <InputBase
        type="textarea"
        name="description"
        placeholder="Digite a descrição do post..."
        rows={6}
        {...register("description")}
        error={errors.description}
      />

      <ButtonWrapper>
        <ButtonDefault color="#27D26B" type="submit">
          { formState.isSubmitting 
            ? <SpinnerCircular size={30} color="white" secondaryColor="#27D26B"/> 
            : 'Salvar' 
          }
        </ButtonDefault>
      </ButtonWrapper>
    </Form>
  )
}