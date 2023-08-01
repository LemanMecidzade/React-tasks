import {useState} from 'react';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Checkbox from '../../components/Checkbox/Checkbox';
import Button from '../../components/Button/Button';
import HomePage  from '../Home-Page/Home-Page';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        if (username == 'root' && password == 'pwd') {
            console.log("Logged in!");
        } else {
            console.log("Invalid credentials!")
        }
    };

    return (
        <div>
            <Title />
            <Input type="text" placeholder="User Name" onChange={handleUsernameChange} />
            <Input type="password" placeholder="Password" onChange={handlePasswordChange} />
            <Checkbox />
            <Button onClick={handleLogin} />
        </div>
    );
};

export default LoginPage;
