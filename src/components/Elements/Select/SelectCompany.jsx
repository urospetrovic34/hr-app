import React from 'react'
import './Select.css'
import { Link } from 'react-router-dom'
import { customStyles, customStylesDark } from './customStyles'
import Select from 'react-select'
import ThemeContext from '../../../context/useTheme'

export const SelectCompany = (props) => {
    const { value, value3 } = React.useContext(ThemeContext);
    const [stateValue] = value;
    const [stateValue3] = value3;

    return (
        <div>
            <div>
                <Select isDisabled={props.menuDisabled} isSearchable={true} defaultValue={props.options[0]} options={props.options} styles={stateValue ? customStylesDark : customStyles} onChange={props.handleCompanyChange} style={stateValue} className="custom-select"/>
            </div>
            <div className="small-text-right">
                <Link to="#" className="small-text-anchor" onClick={props.handleNewCompany} style={stateValue3}>{props.textChange ? "Add a company" : "Select an existing company"}</Link>
            </div>
        </div>
    )
}
