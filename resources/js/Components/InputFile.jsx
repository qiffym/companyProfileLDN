const InputFile = (props) => {
    return (
        <>
            <label htmlFor={props.id} className="label">
                <span className="label-text">{props.label}</span>
            </label>
            <input
                type="file"
                id={props.id}
                className="file-input file-input-bordered bg-base-200 w-full max-w-2xl"
                onChange={props.onChange}
            />
            {props.errors && (
                <label className="label">
                    <span className="label-text-alt text-red-500">
                        {props.errors}
                    </span>
                </label>
            )}
        </>
    );
};

export default InputFile;
