import illustrationImg from '../assets/images/illustration.svg';
import Logo from '../assets/images/logo.svg'
import GoogleIcon from '../assets/images/google-icon.svg';

export function Home(){
    return(
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"  />
                <strong>Crie Salas de Q&amp;A ao vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={Logo} alt="Letmeask"/>
                    <button>
                    <img src={GoogleIcon} alt="Logo do google"/>
                        Crie sua Sala com o Google
                    </button>
                    <div>
                        OU entre em uma sala
                    </div>
                    <form>
                        <input
                        type="text"
                        placeholder="Digite o Código da Sala"
                        />
                        <button type="submit">
                            Entrar na Sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}