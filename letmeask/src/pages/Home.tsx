import illustrationImg from '../assets/images/illustration.svg';
import Logo from '../assets/images/logo.svg'
import GoogleIcon from '../assets/images/google-icon.svg';
import '../styles/auth.scss'
import { Button } from '../Components/Button';


export function Home(){
    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"  />
                <strong>Crie Salas de Q&amp;A ao vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={Logo} alt="Letmeask"/>
                    <button className="create-room"> 
                    <img src={GoogleIcon} alt="Logo do google"/>
                        Crie sua Sala com o Google
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form>
                        <input
                        type="text"
                        placeholder="Digite o Código da Sala"
                        />
                        <Button type="submit">
                            Entrar na Sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}