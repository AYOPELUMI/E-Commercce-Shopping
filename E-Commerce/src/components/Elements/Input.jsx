import { useRef, useState } from "react";
import { HiEye } from "react-icons/hi";
import { RiEyeCloseFill } from "react-icons/ri";
import "./Input.scss";

export function Input (props) {
	const{
		type,
		className,
		placeHolder,
		checkedValueFunction,
		required,
		disabled,
		labelFor,
		labelClassName,
		value,
		updateState,
		index,
		span,
		errorMsg
	} = props

	// const [inputValue, setValue] = useState("")
	const [focusBoolean, setFocusBoolean] = useState(false)
	// const [divClickBoolean, setDivClickBoolean] = useState(false)
	const inputRef = useRef(null);
	const [showPassword, setShowPassword] = useState(false)
	
	let style = {}
	const handleChange = (e) => {
	
		if (type == "checkbox" || span) {
			let value = e.target.checked
			checkedValueFunction([index,value])
		}
		else{
			updateState(e.target.value)
		}
	}

	const handleOnFocus = () =>{
		setFocusBoolean(true)
		// setDivClickBoolean(true)
	}
	const handleDivClick =() => {
		// setDivClickBoolean(true)
		// handleclick(!divClickBoolean)
		console.log("i passed thru here")
		inputRef.current.focus()		
	}

	// const handleBlur = (e) => {
	// 	if (!value) {
	// 		setFocusBoolean(false)
	// 		// setDivClickBoolean(false)
	// 	}
	// 	else{
	// 		setFocusBoolean(true)
	// 		// updateState(inputValue)
	// 		// setDivClickBoolean(true)
	// 	}
	// }
	// useEffect(() =>{
	// 	if (value) {
	// 		setFocusBoolean(true)
	// 		setDivClickBoolean(true)
	// 	}
	// 	else{
	// 		setFocusBoolean(false)
	// 		setDivClickBoolean(false)
	// 	}

	// },[value])
	const handleShowPassword = () =>{
		setShowPassword(!showPassword)
		console.log("i pass here")
	}


		style={
			fontSize: value ? "12px" : null,
			transform:  value!= "" && value!= null && value!= undefined ? "translateY(-50px)" : "translateY(100%)",
			zIndex : value ? "2" : "1",
			left : value ? "-2px" :"12px",
			opacity : value? '0' : '1',
			color: className == "error" ? "red" : undefined
		}
	

	return(
		<label className={labelClassName ? labelClassName : undefined}>
			{labelFor}
			{errorMsg ? <p className="errorMsg" style={{
				fontSize: type== "password" ? "12px" : undefined,
				position : "static" 
			}}>{errorMsg}</p> : null}
			<div>		
				<input
					type={showPassword ? "text" : type} 
					required={required} 
					// onBlur={span ? null : handleBlur}  
					onFocus={handleOnFocus} 
					className={className ? className : undefined} 
					onChange={handleChange} 
					value={value}
					index={index}
					name={span}
					id={span}
					disabled={disabled}
					placeholder = {placeHolder}
				/>
				{type == "password" ? showPassword ? <HiEye className="passWordIcon"  onClick={handleShowPassword}/> : <RiEyeCloseFill onClick={handleShowPassword} className="passWordIcon"/> : null}
			</div>
				{span ? span: null}
		</label>
	)
}