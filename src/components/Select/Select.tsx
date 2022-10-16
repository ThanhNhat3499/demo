interface SelectProps{
    className: string;
    name: string;
    id: string;
    label: string; 
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Select(props: SelectProps) {
    const {label, id, onChange, className, name} = props;
    return (
        <div>
            <div>
                <span>{label}</span>
                <select onChange={(e) => onChange(e)} id={id} className={className} name={name}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
        </div>
    )
}

export default Select;