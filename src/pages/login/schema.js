import * as Yup from "yup";

export default Yup.object().shape({
	username: Yup.string().required("username is required to log in"),
	password: Yup.string().required("password is required to log in")
})