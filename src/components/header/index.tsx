import logo from '../../assets/logo.svg'
import {Container, Content} from './styles'

export function Header(){
    return (
        <Container>
            <Content>
                <div className="details">
                    <h1>Pedidos</h1>
                    <h2>Acompanhamento de pedidos</h2>
                </div>
                <img src={logo} alt="Image logo" />
            </Content>
        </Container>
    )
}