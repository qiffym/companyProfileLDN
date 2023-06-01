const InputCareer = (props) => {
    return (
        <div className="form-control xl:w-1/2 2xl:w-1/3 w-full">
            <label htmlFor={props.id}>
                <span className="label-text">{props.label}</span>
            </label>
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                className="input input-bordered bg-base-200"
                {...props}
            />
            <label className="label">
                <span className="label-text-alt text-error">
                    {props.errors}
                </span>
            </label>
        </div>
    );
};

export default InputCareer;
