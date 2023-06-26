import { Container } from "./style";
import { FiX, FiPlus } from "react-icons/fi"

export function NoteItem({ value, onClick, isNew, ...rest }) {
    return (
        <Container isNew={isNew}>
            <input
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />
            <button
                type="button"
                onClick={onClick}
                className={isNew ? "buttonAdd" : "buttonDelete"}
            >
                {isNew ? <FiPlus size={8} /> : <FiX size={8} />}
            </button>
        </Container>
    )
}