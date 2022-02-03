
import LoginForm from 'components/LoginForm';
import AuthChange from 'components/AuthChange';
import s from './LoginView.module.scss'

const LoginView = () => {
    return (
        <div className={s.Login}>
            <LoginForm />
            <AuthChange name="Don't have an account?" to="/register" button="Create new account" />
        </div>
    );
};

export default LoginView;
