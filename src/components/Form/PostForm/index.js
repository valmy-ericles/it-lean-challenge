import { InputBase } from "../Input"
import { ButtonWrapper, Form } from "./styles"
import { ButtonDefault } from "../Buttons/DefaultButton"

export const NewPostForm = () => {
  return (
    <Form>
      <span>Novo Post</span>
      <InputBase
        type="text"
        name="new_post"
        placeholder="Digite o título do posto"
      />
  
      <InputBase
        type="textarea"
        name="new_post"
        placeholder="Digite a descrição do post..."
        rows={6}
      />

      <ButtonWrapper>
        <ButtonDefault color="#27D26B">
          Salvar
        </ButtonDefault>
      </ButtonWrapper>
    </Form>
  )
}