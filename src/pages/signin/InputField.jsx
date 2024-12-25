import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/Signin.scss';

export const InputField = ({ icon, type, name, placeholder, value, onChange }) => (
    <div className="formInputWithErr">
        <div className='formInput'>
            <div className='inputGroupAppend'>
                <span className='inputGroupText'>
                    <FontAwesomeIcon icon={icon} />
                </span>
            </div>
            <input
                type={type}
                name={name}
                className='inputForm'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    </div>
);