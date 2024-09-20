import * as yup from "yup"

export const userValidationSchema = yup.object().shape({
    coment: yup.string().required("nome obrigatorio"),
    id: yup.number(),
    date: yup.date().nullable().typeError('Campo obrigatorio'),
    cliente: yup.string().required("Horario obrigatorio"),
    tentatives: yup.string().required("Numeros de tentativas obrigatorio"),
    subject: yup.string().required("Assunto obrigatorio"),
    collaborator: yup.string().required("Assunto obrigatorio"),
})