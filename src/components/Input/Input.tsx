interface InputProps{
    className?: string;
    name: string,
    id: string;
    label?: string; 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
};

function Input(props: InputProps) {
    const {label, id, onChange, className, name, placeholder} = props;
    return (
        <div>
            <div>
                <span>{label}</span>
                <input className={className} name={name} id={id} onChange={(e) => onChange(e)} placeholder={placeholder}/>
            </div>
        </div>
    )
}

export default Input;