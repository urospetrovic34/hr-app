export const customStyles = {
    control: (provided,state) => ({
        ...provided,
        minHeight: '45px',
        height: '45px',
        border:'none',
        boxShadow: 'none',
        borderRadius: '2px',
        cursor:'pointer',
        marginTop: '5px'
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding:'0px',
        marginLeft:'5px',
        marginTop:'-5px'
    }),
    input: (provided, state) => ({
        ...provided,
    }),
    indicatorSeparator: (state) => ({
        display: 'none'
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: '45px',
    }),
    dropdownIndicator: () => ({
        color:'#001628',
        marginRight:'7px',
    }),
    option:(styles, { data, isDisabled, isFocused, isSelected }) => ({
        cursor:'pointer',
        height: '45px',
        display:'flex',
        alignItems:'center',
        justifyContent: 'flex-start',
        paddingLeft:'7px',
        backgroundColor:isFocused ? '#001628' : 'white',
        color:isFocused ? '#99D9D9' : '#001628'
    }),
    menu:(provided, state) => ({
        ...provided,
        padding:'0px',
        maxHeight: '225px',
        overflow: 'hidden'
    }),
    menuList:(provided, state) => ({
        ...provided,
        padding:'0px',
        borderRadius: '2px',
        maxHeight: '225px',
        overflow: 'hidden'
    })
}

export const customStylesDark = {
    control: (provided,state) => ({
        ...provided,
        minHeight: '45px',
        height: '45px',
        border:'none',
        boxShadow: 'none',
        borderRadius: '2px',
        cursor:'pointer',
        backgroundColor: '#001628',
        marginTop: '5px'
    }),
    dropdownIndicator: () => ({
        color:'#99D9D9',
        marginRight:'7px'
    }),
    option:(styles, { data, isDisabled, isFocused, isSelected }) => ({
        cursor:'pointer',
        height: '45px',
        display:'flex',
        alignItems:'center',
        justifyContent: 'flex-start',
        paddingLeft:'7px',
        backgroundColor:isFocused ? '#001628' : '#001628',
        color:isFocused ? 'white' : '#99D9D9'
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding:'0px',
        marginLeft:'5px',
        marginTop:'-5px'
    }),
    singleValue : (provided, state) => ({
        gridArea: '1/1/2/3',
        marginLeft: '2px',
        marginRight: '2px',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        color: '#99D9D9'
    }),
    input: (provided, state) => ({
        ...provided,
    }),
    indicatorSeparator: (state) => ({
        display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: '45px',
    }),
    menu:(provided, state) => ({
        ...provided,
        padding:'0px',
        maxHeight: '225px',
        overflow: 'hidden',
    }),
    menuList:(provided, state) => ({
        ...provided,
        padding:'0px',
        borderRadius: '2px',
        maxHeight: '225px',
        overflow: 'hidden',
    })
}