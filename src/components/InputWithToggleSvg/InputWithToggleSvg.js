import Input from '../Input';
import s from './InputWithToggleSvg.module.scss';

const InputWithToggleSvg = ({ onChange, value, placeholder, ...params }) => (
    <label className={s.Label}>
        <input
            className={s.Input}
            onChange={onChange}
            value={value}
            placeholder=" "
            {...params}
        />
        <span className={s.Placeholder}>{placeholder}</span>
    </label>
);

export default InputWithToggleSvg;
