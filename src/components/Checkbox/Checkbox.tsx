interface Checkbox {
    className: string;
    name: string;
    id: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Checkbox(props: Checkbox) {
    const { label, id, onChange, className, name } = props;
    return (
        <div>
            <input type='checkbox' onChange={(e) => onChange(e)} id={id} className={className} name={name} />
            <label htmlFor="id">{label}</label>
        </div>
    );
}

export default Checkbox;