import {useState} from 'react';

import './styles.scss';


export const Button = props => {

	const{
		type,
		btnDisabled,
		className,
		onClick,
		children,
		displayWord,
		disabled
	} = props
	
  return (
  	<>
  		<button 
  			type={type} 
  			onClick={onClick} 
  			className={className ? className : undefined}
  			disabled={disabled || btnDisabled}>
				{displayWord}
  			{disabled ? <i className="loadingIcon"></i> : children}
  		</button>
  	</>
  )
}


