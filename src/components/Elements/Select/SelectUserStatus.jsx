import React from 'react'
import './Select.css'
import { customStyles, customStylesDark } from './customStyles'
import Select from 'react-select'
import ThemeContext from '../../../context/useTheme'

export const SelectUserStatus = (props) => {
    const {value2} = React.useContext(ThemeContext);
    const [stateValue2] = value2;

    return (
        <div>
            <Select defaultValue={props.options[0]} className="custom-select" styles={stateValue2 ? customStylesDark : customStyles} options={props.options} onChange={props.handleStatusChange}/>
        </div>
    )
}
