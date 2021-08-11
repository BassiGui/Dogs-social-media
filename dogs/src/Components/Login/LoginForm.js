import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
//import { TOKEN_POST, USER_GET } from '../../api';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  //context para pegar dados globais
  const { userLogin, error, loading } = React.useContext(UserContext);

  //função de submit do formulario de login
  async function handleSubmit(e) {
    e.preventDefault();
    //validando se os valores são verdadeiros para executar o POST
    if (username.validate() && password.validate()) {
      //enviando usuario e senha para o token e pegando url da API e o Metodo utilizado
      userLogin(username.value, password.value);
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
