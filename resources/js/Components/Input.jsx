const Input = (props) => {
    return (
        <>
            <label className="label">
                <span className="label-text">{props.label}</span>
            </label>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                className="input input-bordered w-full max-w-lg"
                value={props.value}
                onChange={props.onChange}
            />
            <label className="label">
                <span className="label-text-alt text-red-500">
                    {props.onError}
                </span>
            </label>
        </>
    );
};

export default Input;
