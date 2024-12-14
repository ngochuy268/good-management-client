import './css/Signin.scss';

export const GenderField = ({ value, onChange }) => (
    <div className="formInputWithErr">
        <div className="gender-container">
            <label className="gender-label">性別</label>
            <div className="gender-selection">
                <label className="gender-option">
                    <input
                        type="radio"
                        name="gender"
                        value="男"
                        checked={value === '男'}
                        onChange={onChange}
                    />
                    <span className="checkmark"></span>
                    男
                </label>
                <label className="gender-option">
                    <input
                        type="radio"
                        name="gender"
                        value="女"
                        checked={value === '女'}
                        onChange={onChange}
                    />
                    <span className="checkmark"></span>
                    女
                </label>
            </div>
        </div>
    </div>
);