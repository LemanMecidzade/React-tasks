const Input = ({type,placeholder,onChange}) => { //{props} //{...props}
    //const props = {...}
    return (
        <div>
            <input type={type} placeholder={placeholder} onChange={onChange} className="inputs"/>
        </div>
    );
};

export default Input;