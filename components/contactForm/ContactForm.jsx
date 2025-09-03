import {useState} from "react"

import Button from "@mui/material/Button"
import IconButton from "@mui/material/Button"
import CloseIcon from "@mui/icons-material/Close"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import DialogTitle from "@mui/material/DialogTitle"
import CircularProgress from "@mui/material/CircularProgress"
import Alert from "@mui/material/Alert"

import {Input, TextArea} from "/components/UI/input"
import {sendPostMessage} from "/core/api/api"

import cls from "./ContactForm.module.sass"

export const ContactForm = ({open, onCloseHandler}) => {
    const [message, setMessage] = useState({
        name: undefined,
        email: undefined,
        body: undefined,
    })
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)
    const [validationErrors, setValidationErrors] = useState([])

    const sendMessage = async () => {
        const errors = []
        if (message.name?.length < 3) {
            errors.push("Имя должно быть не менее 3-х символов")
        }
        if (message.email?.length < 7) {
            errors.push("E-mail должно быть не менее 7-ми символов")
        }
        if (message.body?.length < 10) {
            errors.push("Сообщение должно быть не менее 10-ти символов")
        }
        if (message.body?.length > 250) {
            errors.push("Сообщение должно быть не более 250-ти символов")
        }

        const hasFilled = message.name && message.email && message.body
        if (!errors.length && hasFilled) {
            setValidationErrors([])
            setIsLoading(true)
            setData(null)
            const res = await sendPostMessage(message)
            setIsLoading(false)
            setData(res)
        } else {
            console.log(errors)
            if (!errors.length && !hasFilled) {
                errors.push("Необходимо заполнить все поля")
            }
            setValidationErrors(errors)

            setMessage({
                name: message.name ?? "",
                email: message.email ?? "",
                body: message.body ?? "",
            })
        }
    }

    const changeMessage = (field, value) => {
        setMessage({...message, [field]: value})
    }

    return (
        <Dialog
            open={open}
            onClose={onCloseHandler}
            aria-labelledby="modal-form-title"
            aria-describedby="modal-form-description"
            fullWidth
            maxWidth={"md"}
            className={cls.dialog}
        >
            <DialogTitleWithClose
                id="modal-modal-title"
                onClose={onCloseHandler}
            >
                Ваше сообщение
            </DialogTitleWithClose>
            <DialogContent
                dividers
                sx={{position: "relative"}}
                className="flex-column gap-1"
            >
                <Input
                    value={message.name}
                    minlength={7}
                    disabled={!!data}
                    placeholder="Ваше имя"
                    onChange={val => changeMessage("name", val)}
                    required={message.name === ""}
                />
                <Input
                    value={message.email}
                    minlength={3}
                    disabled={!!data}
                    placeholder="E-mail"
                    onChange={val => changeMessage("email", val)}
                    required={message.email === ""}
                />
                <TextArea
                    value={message.body}
                    rows={4}
                    disabled={!!data}
                    placeholder={"Текст сообщения"}
                    onChange={val => changeMessage("body", val)}
                    required={message.body === ""}
                />
                {validationErrors.length ? (
                    <Alert severity="warning">
                        {validationErrors.length === 1
                            ? validationErrors[0]
                            : validationErrors.map(error => (
                                <li key={error}>{error}</li>
                            ))}
                    </Alert>
                ) : (
                    data && <Alert severity={data.status}>{data.message}</Alert>
                )}
                {isLoading && (
                    <span className={cls.loader}>
                        <CircularProgress/>
                    </span>
                )}
            </DialogContent>
            <DialogActions sx={{my: 1, mx: 2}}>
                {!data && (
                    <Button
                        autoFocus
                        disabled={isLoading}
                        onClick={sendMessage}
                    >
                        Отправить
                    </Button>
                )}
                <Button onClick={onCloseHandler}>
                    {data && !isLoading ? "Закрыть" : "Отменить"}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

const DialogTitleWithClose = props => {
    const {children, onClose, ...other} = props

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
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </DialogTitle>
    )
}
