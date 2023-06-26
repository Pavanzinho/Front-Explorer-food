import { Container } from "./style"


export function Footer() {
    return (
        <Container>

            <div className="footerContentContainer">
                <div className="footerTitle">
                    <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5391 0L26.5294 7.5V22.5L13.5391 30L0.548681 22.5V7.5L13.5391 0Z" fill="#065E7C" />
                    </svg>

                    <span>food explorer</span>
                </div>

                <div className="messageOfRightsReserved">
                    <span>© 2023 - Todos os direitos reservados</span>
                </div>

            </div>


        </Container>
    )

}