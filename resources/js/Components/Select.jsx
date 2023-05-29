import { WarningTriangle } from './svg';

const Select = (props) => {
    return (
        <div className="form-control w-full max-w-2xl">
            <label htmlFor={props.id} className="label">
                <span className="label-text">{props.label}</span>
            </label>
            <select
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                className="select select-bordered bg-base-200"
            >
                <option disabled value="">
                    — Select Category —
                </option>
                {props.items.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
            <label className="label text-red-500">
                <span className="label-text-alt flex items-center text-red-500">
                    {props.errors}
                </span>
            </label>
        </div>
    );
};

export default Select;
