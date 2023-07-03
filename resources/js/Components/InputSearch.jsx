import { SearchIcon } from '@iconicicons/react';

const InputSearch = (props) => {
    return (
        <div className="join">
            <button
                type="submit"
                disabled={props.disabled}
                className="btn btn-warning join-item rounded-l-box shadow"
            >
                <SearchIcon />
            </button>
            <input
                type="search"
                value={props.value}
                onChange={props.onChange}
                placeholder="Search..."
                className="input focus:outline-none w-72 join-item rounded-r-box shadow"
            />
        </div>
    );
};

export default InputSearch;
