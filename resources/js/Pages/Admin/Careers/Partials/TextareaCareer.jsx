import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextareaCareer = (props) => {
    return (
        <div className="form-control xl:w-1/2 2xl:w-1/3 w-full">
            <label htmlFor={props.id}>
                <span className="label-text">{props.label}</span>
            </label>
            <div className="bg-base-200">
                <ReactQuill
                    theme="snow"
                    placeholder="Write the description here.."
                    className="h-40 mb-10"
                    {...props}
                />
            </div>
            <label className="label">
                <span className="label-text-alt text-error">
                    {props.iserror}
                </span>
            </label>
        </div>
    );
};

export default TextareaCareer;
