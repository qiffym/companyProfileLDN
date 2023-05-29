const Input = (props) => {
    return (
        <>
            <label className="label">
                <span className="label-text">{props.label}</span>
            </label>
            <input
                {...props}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                className="input input-bordered bg-base-200 w-full max-w-2xl"
                value={props.value}
                defaultValue={props.defaultValue}
                onChange={props.onChange}
                disabled={props.disabled}
                readOnly={props.readOnly}
            />
            <label className="label">
                <span className="label-text-alt text-red-500">
                    {props.errors}
                </span>
            </label>
        </>
    );
};

export default Input;
