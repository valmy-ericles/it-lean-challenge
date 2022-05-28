import { Modal } from "../../Modal"
import { InputBase } from "../../Input"
import { ButtonDefault } from "../../Buttons/DefaultButton"
import { Form, WrapActionModalButtons, WrapInputs } from "./styles"

type PostProps = {
  title: string;
  body: string;
  userId: number;
}

interface ViewPostModalProps {
  title: string;
  show: boolean;
  onClose: () => void;
  post: PostProps;
}

export const ViewPostModal = ({ title, show, onClose, post }: ViewPostModalProps) => {
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
            value={post?.title}
          />
          <InputBase
            type="textarea"
            label="Descrição"
            name="description"
            placeholder="Digite a descrição do post..."
            rows={12}
            value={post?.body}
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