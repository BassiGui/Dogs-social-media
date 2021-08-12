import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import Error from '../../Helper/Error';
import { UserContext } from '../../UserContext';
import styles from './LoginForm.module.css';
import stylesBtnA from '../Forms/Button.module.css';

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
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      </div>
      <Link className={stylesBtnA.button} to="/login/criar">
        Cadastro
      </Link>
    </section>
  );
};

export default LoginForm;
