interface Radio{
    className: string;
    name: string;
    id: string;
    label: string; 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Radio(props: Radio) {
    const { label, id, onChange, className, name } = props;
    return (
        <div>
            <input type="radio" onChange={(e) => onChange(e)} id={id} className={className} name={name} />
            <label htmlFor="id">{label}</label>
        </div>
    );
}

export default Radio;