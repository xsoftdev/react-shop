import DropdownHeader from "./header.jsx";
import DropdownContent from "./content.jsx";

import s from './index.module.scss';

const Dropdown = ({ className, button, content, isOpen, toggleDropdown }) => {
    return (
        <div className={`${className} ${s.dropdown}`}>
            <DropdownHeader
                className="dropdown-header"
                isOpen={isOpen}
                toggleDropdown={toggleDropdown}
            >
                <div onClick={toggleDropdown}>
                    {button}
                </div>
            </DropdownHeader>
            {isOpen && (
                <div className={s.dropdown_content}>
                    <DropdownContent>
                        {content}
                    </DropdownContent>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
