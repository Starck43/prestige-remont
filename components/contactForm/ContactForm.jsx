import { useState } from "react"
import axios from "axios"

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
    const [message, setMessage] = useState({ name: "", email: "", body: "" })
    const sendMessage = () => {
        axios({
            method: "POST",
            url: process.env.SERVER + process.env.API_ENDPOINTS.sendMessage,
            data: message,
        }).then(response => {
            response.status === 200
                ? console.log(response.data.message)
                : console.log(response.data.message)
        })
    }

    const changeMessage = (field, value) => {
        setMessage({ ...message, [field]: value })
        console.log(value)
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
                <Input
                    value={message.name}
                    placeholder="Ваше имя"
                    onChange={e => changeMessage("name", e.target.value)}
                />
                <Input
                    value={message.email}
                    placeholder="E-mail"
                    onChange={e => changeMessage("email", e.target.value)}
                />
                <textarea
                    value={message.body}
                    rows={4}
                    required
                    placeholder="Текст сообщения"
                    onChange={e => changeMessage("body", e.target.value)}
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
