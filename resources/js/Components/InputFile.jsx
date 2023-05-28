const InputFile = (props) => {
    return (
        <>
            <label htmlFor={props.id} className="label">
                <span className="label-text">{props.label}</span>
            </label>
            <input
                type="file"
                id={props.id}
                className="file-input file-input-primary bg-base-200 w-full max-w-lg"
                onChange={props.onChange}
            />
            <label className="label">
                <span className="label-text-alt text-red-500">
                    {props.iserror}
                </span>
            </label>
        </>
    );
};

export default InputFile;
