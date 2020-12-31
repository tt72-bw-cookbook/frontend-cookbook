import * as yup from "yup";

export default yup.object().shape({
	username: yup.string().required("must choose a username to sign up"),
	password: yup.string().required("must set a password to sign up"),
	email: yup.string().email().required("must provide a valid email to sign up"),
})