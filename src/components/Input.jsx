import PropTypes from "prop-types";

// This Input component is able to reuse the logic of react-hook-form by means of these props
const Input = ({ label, placeholder, register, name, minLength, required, maxLength, errors }) => {
	return (
		<>
			<label htmlFor="" className="font-medium">
				{label}
			</label>
			<input
				type="text"
				placeholder={placeholder}
				{...register(name, {
					required: {
						value: required?.value,
						message: required?.message,
					},
					minLength: {
						value: minLength?.value,
						message: minLength?.message,
					},
					maxLength: {
						value: maxLength?.value,
						message: maxLength?.message,
					},
				})}
				className="w-full my-2 px-3 py-2 text-gray-500 bg-gray-700 outline-none border border-neutral-600 focus:border-neutral-300 shadow-sm rounded-lg"
			/>
			{errors && <span className=" my-1 block text-red-500 font-semibold">{errors.message}</span>}
		</>
	);
};

Input.propTypes = {
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	register: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	minLength: PropTypes.object,
	maxLength: PropTypes.object,
	required: PropTypes.object.isRequired,
	errors: PropTypes.object,
};

export default Input;
