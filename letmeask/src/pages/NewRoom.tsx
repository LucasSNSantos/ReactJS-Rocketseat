import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import Logo from '../assets/images/logo.svg'
import GoogleIcon from '../assets/images/google-icon.svg';
import '../styles/auth.scss'
import { Button } from '../Components/Button';


export function NewRoom(){
    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"  />
                <strong>Crie Salas de Q&amp;A ao vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <h2>Criar uma Nova Sala</h2>
                    <form>
                        <input
                        type="text"
                        placeholder="Nome da Sala"
                        />
                        <Button type="submit">
                            Criar Sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente?
                        <Link to="/">Clique aqui!</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}