
import LoginForm from 'components/LoginForm';
import AuthChange from 'components/AuthChange';

const LoginView = () => {
    return (
        <>
            <LoginForm />
            <AuthChange name="Don't have an account?" to="/register" button="Create new account" />
        </>
    );
};

export default LoginView;
