const Input = ({type,placeholder,onChange}) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} onChange={onChange} className="inputs"/>
        </div>
    );
};

export default Input;