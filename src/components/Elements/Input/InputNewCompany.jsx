import React from 'react'
import './InputNewCompany.css'
import ThemeContext from '../../../context/useTheme'

export const InputNewCompany = (props) => {
    const { value } = React.useContext(ThemeContext);
    const [stateValue] = value;

    return (
        <div>
            <input className="input-new-company" type="text" placeholder="Enter Company Name" name="company_name" onChange={props.handleCompanyName} style={stateValue}/>
        </div>
    )
}
