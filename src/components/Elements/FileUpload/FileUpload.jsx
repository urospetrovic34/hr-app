import React from 'react'
import './FileUpload.css'
import ThemeContext from '../../../context/useTheme';

export const FileUpload = (props) => {
    const { value3 } = React.useContext(ThemeContext);
    const [stateValue3] = value3;

    return (
        <div className="file-upload">
            <button className={`file-upload-button ${props.wider && 'wider'}  ${props.widerHundert && 'wider-hundert'} ${props.widerFifty && 'wider-fifty'}`} onClick={props.handleFileClick}>Choose</button>
            <input type="file" ref={props.fileInput} onChange={props.handleFileChange} className="file-upload-input" accept="image/*"/>
            <label style={stateValue3}>{props.fileName}</label>
        </div>
    )
}
