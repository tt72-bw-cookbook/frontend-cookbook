import * as Yup from "yup";

/**
 * Schema to check for new users on sign up.
 * Users cannot submit a signup request until all fields pass.
 */
export default Yup.object().shape({
	username: Yup.string().required("must choose a username to sign up"),
	password: Yup.string().required("must set a password to sign up"),
	email: Yup.string().email().required("must provide a valid email to sign up"),
})


/**
 * The following code was an attempt to add password confirmation validation with Yup.
 *
 * Turns out that shit is far more complicated than it should be.
 */
// function equalTo(ref, msg) {
// 	return Yup.mixed().test({
// 		name: 'equalTo',
// 		exclusive: false,
// 		message: msg || '${path} must be the same as ${reference}',
// 		params: {
// 			reference: ref.path,
// 		},
// 		test: function (value) {
// 			console.log({ value: value, this: this, ref: ref })
// 			console.log(this.resolve(ref))
// 			console.log(value === this.resolve(ref))
// 			return value === this.resolve(ref);
// 		},
// 	});
// }
// Yup.addMethod(Yup.string, 'equalTo', equalTo);
// passwordConfirm: yup.string()
// 	.oneOf([yup.ref('password'), null], "Passwords must match"),
// passwordConfirm: yup.string().test("passwords-match", "Passwords must match", function (value) {
// 	console.log(this);
// 	// console.log(value);
// 	return this.parent ? this.parent.password === value : false;
// }),
// passwordConfirm: Yup.string().equalTo(Yup.ref('password'), 'Passwords must match').required('Required'),