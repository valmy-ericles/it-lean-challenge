import { Modal } from "../../Modal"
import { InputBase } from "../../Input"
import { ButtonDefault } from "../../Buttons/DefaultButton"
import { Form, WrapActionModalButtons, WrapInputs } from "./styles"

export const ViewPostModal = ({ title, show, onClose, post }) => {
  return (
    <Modal
      title={title}
      active={show}
      hideModal={() => onClose()}
      size="lg"
    >
      <Form>
        <WrapInputs>
          <InputBase
            name="title"
            label="Título"
            type="text"
            placeholder="Digite o título do posto"
            defaultValue={post?.title}
          />
          <InputBase
            type="textarea"
            label="Descrição"
            name="description"
            placeholder="Digite a descrição do post..."
            rows={12}
            defaultValue={post?.body}
          />
        </WrapInputs>

        <WrapActionModalButtons>
          <ButtonDefault color="#14181A" onClick={() => onClose()}>
            Fechar
          </ButtonDefault>
        </WrapActionModalButtons>
      </Form>
    </Modal>
  )
}