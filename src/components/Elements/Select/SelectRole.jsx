import React from 'react'
import './Select.css'
import Select from 'react-select'
import { customStyles, customStylesDark } from './customStyles'
import ThemeContext from '../../../context/useTheme'

export const SelectRole = (props) => {
    const { value } = React.useContext(ThemeContext);
    const [stateValue] = value;

    return (
        <div>
            <Select style={stateValue} defaultValue={props.options[0]} className="custom-select" styles={stateValue ? customStylesDark : customStyles} options={props.options} onChange={props.handleRoleChange}/>
        </div>
    )
}
