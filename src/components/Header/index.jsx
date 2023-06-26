import { Container } from "./style";
import { RedButton } from "../RedButton";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth"

export function Header({ newplate, type, children }) {
    const { signOut } = useAuth();
    const navigate = useNavigate()

    function handleHome() {
        navigate("/")
    }


    function handleMenu() {
        let headerRoutes = {
            admHeader: "admmenu",
            appHeader: "menu"
        }

        const route = headerRoutes[type] || "/"
        navigate(route)

    }

    function handleNewPlate() {
        navigate("/newplate")
    }

    function onClickSignOut() {
        signOut()
        navigate("/")
    }

    return (
        <Container>
            <div className={type}>

                <button
                    className="menuButton"
                    onClick={handleMenu}
                >
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 1.00023C0 0.447944 0.447715 0.000228882 1 0.000228882H23C23.5523 0.000228882 24 0.447944 24 1.00023C24 1.55251 23.5523 2.00023 23 2.00023H1C0.447715 2.00023 0 1.55251 0 1.00023ZM0 9.00023C0 8.44794 0.447715 8.00023 1 8.00023H23C23.5523 8.00023 24 8.44794 24 9.00023C24 9.55251 23.5523 10.0002 23 10.0002H1C0.447715 10.0002 0 9.55251 0 9.00023ZM0 17.0002C0 16.4479 0.447715 16.0002 1 16.0002H23C23.5523 16.0002 24 16.4479 24 17.0002C24 17.5525 23.5523 18.0002 23 18.0002H1C0.447715 18.0002 0 17.5525 0 17.0002Z" fill="white" />
                    </svg>
                </button>

                <div className="titleContainer">
                    <button onClick={handleHome}>
                        <div className="iconAndTitle">
                            <div className="titleSpan">
                                <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5391 0L26.5294 7.5V22.5L13.5391 30L0.548681 22.5V7.5L13.5391 0Z" fill="#065E7C" />
                                </svg>

                                <span>food explorer</span>
                            </div>
                        </div>
                        {type === "admHeader" ? <span className="adminSpan"> admin </span> : null}
                    </button>
                </div>

                {children}

                {
                    type === "admHeader" ?

                        <RedButton
                            onClick={handleNewPlate}
                            style="headerAdmRedButton"
                            newplate={newplate}
                        >
                        </RedButton>
                        :
                        <RedButton
                            style="headerClientRedButton"
                            newplate={newplate}
                        >
                            <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.5 8.00023C5.5 7.44794 5.94772 7.00023 6.5 7.00023H19.5C20.0523 7.00023 20.5 7.44794 20.5 8.00023C20.5 8.55251 20.0523 9.00023 19.5 9.00023H6.5C5.94772 9.00023 5.5 8.55251 5.5 8.00023Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.5 12.0002C5.5 11.4479 5.94772 11.0002 6.5 11.0002H19.5C20.0523 11.0002 20.5 11.4479 20.5 12.0002C20.5 12.5525 20.0523 13.0002 19.5 13.0002H6.5C5.94772 13.0002 5.5 12.5525 5.5 12.0002Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.585787 0.586016C0.960859 0.210943 1.46957 0.000228882 2 0.000228882H24C24.5304 0.000228882 25.0391 0.210943 25.4142 0.586016C25.7893 0.961089 26 1.4698 26 2.00023V21.0002C26 21.3468 25.8205 21.6687 25.5257 21.8509C25.2309 22.0331 24.8628 22.0497 24.5528 21.8947L21 20.1183L17.4472 21.8947C17.1657 22.0354 16.8343 22.0354 16.5528 21.8947L13 20.1183L9.44721 21.8947C9.16569 22.0354 8.83431 22.0354 8.55279 21.8947L5 20.1183L1.44721 21.8947C1.13723 22.0497 0.769085 22.0331 0.474269 21.8509C0.179452 21.6687 0 21.3468 0 21.0002V2.00023C0 1.4698 0.210714 0.961088 0.585787 0.586016ZM24 2.00023L2 2.00023L2 19.3822L4.55279 18.1058C4.83431 17.965 5.16569 17.965 5.44721 18.1058L9 19.8822L12.5528 18.1058C12.8343 17.965 13.1657 17.965 13.4472 18.1058L17 19.8822L20.5528 18.1058C20.8343 17.965 21.1657 17.965 21.4472 18.1058L24 19.3822V2.00023Z" fill="white" />
                            </svg>
                        </RedButton>
                }


                {/*display:none em resolução abaixo de 1024px*/}
                <svg className="requestSvg" width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.5 8.00023C5.5 7.44794 5.94772 7.00023 6.5 7.00023H19.5C20.0523 7.00023 20.5 7.44794 20.5 8.00023C20.5 8.55251 20.0523 9.00023 19.5 9.00023H6.5C5.94772 9.00023 5.5 8.55251 5.5 8.00023Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.5 12.0002C5.5 11.4479 5.94772 11.0002 6.5 11.0002H19.5C20.0523 11.0002 20.5 11.4479 20.5 12.0002C20.5 12.5525 20.0523 13.0002 19.5 13.0002H6.5C5.94772 13.0002 5.5 12.5525 5.5 12.0002Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.585787 0.586016C0.960859 0.210943 1.46957 0.000228882 2 0.000228882H24C24.5304 0.000228882 25.0391 0.210943 25.4142 0.586016C25.7893 0.961089 26 1.4698 26 2.00023V21.0002C26 21.3468 25.8205 21.6687 25.5257 21.8509C25.2309 22.0331 24.8628 22.0497 24.5528 21.8947L21 20.1183L17.4472 21.8947C17.1657 22.0354 16.8343 22.0354 16.5528 21.8947L13 20.1183L9.44721 21.8947C9.16569 22.0354 8.83431 22.0354 8.55279 21.8947L5 20.1183L1.44721 21.8947C1.13723 22.0497 0.769085 22.0331 0.474269 21.8509C0.179452 21.6687 0 21.3468 0 21.0002V2.00023C0 1.4698 0.210714 0.961088 0.585787 0.586016ZM24 2.00023L2 2.00023L2 19.3822L4.55279 18.1058C4.83431 17.965 5.16569 17.965 5.44721 18.1058L9 19.8822L12.5528 18.1058C12.8343 17.965 13.1657 17.965 13.4472 18.1058L17 19.8822L20.5528 18.1058C20.8343 17.965 21.1657 17.965 21.4472 18.1058L24 19.3822V2.00023Z" fill="white" />
                </svg>
                {/*display:none em resolução acima de 1024px*/}

                <button type="button" onClick={onClickSignOut} className="logoutSvg">
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.2891 11.75L27.5391 17M27.5391 17L22.2891 22.25M27.5391 17H13.5391M13.5391 28H6.53906C6.27385 28 6.01949 27.8946 5.83196 27.7071C5.64442 27.5196 5.53906 27.2652 5.53906 27V7C5.53906 6.73478 5.64442 6.48043 5.83196 6.29289C6.01949 6.10536 6.27385 6 6.53906 6H13.5391" stroke="white" trokewidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    {/*display:none em resolução abaixo de 1024px*/}

                </button>
            </div>
        </Container>
    )
}