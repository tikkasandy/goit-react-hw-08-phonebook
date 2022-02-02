import RegisterForm from 'components/RegisterForm';
import AuthChange from 'components/AuthChange';

const RegisterView = () => (
    <>
        <RegisterForm />
        <AuthChange name="Have an account?" to="/login" button="Log In" />
    </>
);

export default RegisterView;
