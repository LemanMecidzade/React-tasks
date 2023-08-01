const Input = ({type,placeholder,onChange}) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    );
};

export default Input;