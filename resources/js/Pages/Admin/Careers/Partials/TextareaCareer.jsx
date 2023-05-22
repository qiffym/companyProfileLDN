const TextareaCareer = (props) => {
    return (
        <div className="form-control xl:w-1/2 2xl:w-1/3 w-full">
            <label htmlFor={props.id}>
                <span className="label-text">{props.label}</span>
            </label>
            <textarea
                name={props.name}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                placeholder="Type here.."
                className="textarea textarea-bordered bg-base-200"
                cols="30"
                rows="10"
            ></textarea>
            <label className="label">
                <span className="label-text-alt text-error">
                    {props.iserror}
                </span>
            </label>
        </div>
    );
};

export default TextareaCareer;
