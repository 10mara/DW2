import Section from './Section'
import'./MainContent.css'

export default function MainContent(){
    return(
        <main className='conteudo'>
            <Section title= "Sobre nós">
                <p> Disciplina de dw2</p>
            </Section>
            <Section title="Contato"> 
                <p>
                    Vc pd nos contatar pelo e-mail:
                    <a href='samara@gmail.com'>samara@gmail.com</a>
                </p>
            </Section>
        </main>
    )
}