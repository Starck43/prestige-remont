import Button from "@mui/material/Button"
import IconButton from "@mui/material/Button"
import CloseIcon from "@mui/icons-material/Close"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import DialogTitle from "@mui/material/DialogTitle"

import { Input } from "/components/UI/input"

import cls from "./ContactForm.module.sass"

export const ContactForm = ({ open, onCloseHandler }) => {
    const sendMessage = e => {
        e.preventDefault()
    }

    return (
        <Dialog
            open={open}
            onClose={onCloseHandler}
            aria-labelledby="modal-form-title"
            aria-describedby="modal-form-description"
            fullWidth
            maxWidth={"tablet"}
            className={cls.dialog}
        >
            <DialogTitleWithClose
                id="modal-modal-title"
                onClose={onCloseHandler}
            >
                Ваше сообщение
            </DialogTitleWithClose>
            <DialogContent dividers className="flex-column gap-2">
                <Input name="name" placeholder="Ваше имя" />
                <Input name="email" placeholder="E-mail" />
                <textarea
                    name="text"
                    rows={4}
                    required
                    placeholder="Текст сообщения"
                />
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={sendMessage}>
                    Отправить
                </Button>
                <Button onClick={onCloseHandler}>Отменить</Button>
            </DialogActions>
        </Dialog>
    )
}

const DialogTitleWithClose = props => {
    const { children, onClose, ...other } = props

    return (
        <DialogTitle
            sx={{
                m: 0,
                p: 2,
                display: "flex",
                justifyContent: "space-between",
            }}
            {...other}
        >
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        minWidth: "unset",
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    )
}
