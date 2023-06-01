import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextareaCareer = (props) => {
    return (
        <div className="form-control xl:w-1/2 2xl:w-1/3 w-full">
            <label className="label">
                <span className="label-text">{props.label}</span>
            </label>
            <ReactQuill
                value={props.value}
                onChange={props.onChange}
                placeholder="Type content here..."
                className="bg-base-200"
            />
            {props.errors && (
                <label className="label">
                    <span className="label-text-alt text-red-500">
                        {props.errors}
                    </span>
                </label>
            )}
        </div>
    );
};

export default TextareaCareer;
