
import { Container } from "./style";
import { Header } from "../../components/Header";

import { Footer } from "../../components/Footer"
import { AdmFoodCard } from "../../components/AdmFoodCard";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useEffect } from "react";
import { api } from "../../service/api";
import { useLocation } from "react-router-dom";
import Banner from "../../assets/Banner.png"




export function AdmHome() {
    const { user } = useAuth();
    const navigate = useNavigate()

    const [search, setSearch] = useState("")
    const [ingredients, setIngredients] = useState();
    const [plates, setPlates] = useState([]);
    const [platePrice, setPlatePrice] = useState("");
    const [plateDescription, setPlateDescription] = useState("");;

    const [left1, setLeft1] = useState(0)
    const [left2, setLeft2] = useState(0)
    const [left3, setLeft3] = useState(0)


    function handleTranslateForLeft1() {
        setLeft1((preview) => (preview) = left1 - 100)

    }

    function handleTranslateForRight1() {
        setLeft1((preview) => (preview) = left1 + 100)

        if (left1 == 0) {
            setLeft1((preview) => (preview) = 0)
        }
    }

    function handleTranslateForLeft2() {
        setLeft2((preview) => (preview) = left2 - 100)

    }

    function handleTranslateForRight2() {
        setLeft2((preview) => (preview) = left2 + 100)

        if (left2 == 0) {
            setLeft2((preview) => (preview) = 0)
        }
    }

    function handleTranslateForLeft3() {
        setLeft3((preview) => (preview) = left3 - 100)

    }

    function handleTranslateForRight3() {
        setLeft3((preview) => (preview) = left3 + 100)

        if (left3 == 0) {
            setLeft3((preview) => (preview) = 0)
        }
    }

    function handleDetails(plate) {
        navigate(`admdetails/${plate.id}`, { state: { plate } })
    }

    useEffect(() => {
        async function fetchPlates() {
            try {

                let params;
                if (search.length) {
                    params = new URLSearchParams();
                    params.append("search", search);

                }

                const response = await api.get('plates', params ? {
                    params,
                } : undefined)

                setPlates(response.data)
            } catch (error) {
                console.error(error)

            }
        };
        fetchPlates()

    }, [search])

    return (
        <Container>
            < Header type="admHeader">
                <div className="searchInput">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.35585 3.98378C7.69012 3.09225 9.2588 2.61639 10.8635 2.61639H10.8636C13.0154 2.61653 15.079 3.47139 16.6006 4.99295C18.1221 6.5145 18.977 8.57814 18.9771 10.7299V10.73C18.9771 12.3347 18.5013 13.9034 17.6097 15.2377C17.4533 15.4718 17.2852 15.6969 17.1065 15.9123L22.0303 20.8361C22.3231 21.129 22.3231 21.6038 22.0303 21.8967C21.7374 22.1896 21.2625 22.1896 20.9696 21.8967L16.0458 16.9729C15.4234 17.4896 14.7239 17.9131 13.9685 18.226C12.4859 18.8401 10.8545 19.0007 9.28063 18.6877C7.70675 18.3746 6.26105 17.6019 5.12634 16.4672C3.99163 15.3325 3.21889 13.8868 2.90582 12.3129C2.59276 10.739 2.75344 9.10762 3.36753 7.62505C3.98163 6.14248 5.02157 4.87531 6.35585 3.98378ZM10.8635 4.11639C9.55544 4.1164 8.27679 4.50428 7.1892 5.23099C6.1016 5.9577 5.25392 6.9906 4.75335 8.19907C4.25279 9.40755 4.12182 10.7373 4.377 12.0202C4.63219 13.3031 5.26207 14.4816 6.187 15.4065C7.11193 16.3314 8.29036 16.9613 9.57327 17.2165C10.8562 17.4717 12.186 17.3407 13.3944 16.8402C14.6029 16.3396 15.6358 15.4919 16.3625 14.4043C17.0892 13.3167 17.4771 12.0381 17.4771 10.73M10.8635 4.11639C12.6175 4.11652 14.2996 4.81335 15.5399 6.05361C16.7802 7.29387 17.477 8.97599 17.4771 10.73" fill="#C4C4CC" />
                    </svg>

                    <input
                        type="text"
                        placeholder="Busque por pratos ou ingredientes"
                        onChange={event => setSearch(event.target.value)}
                    />
                </div>
            </Header>

            <div className="bannerContainer">
                <div className="bannerImg">
                    <img src={Banner} alt="" />
                </div>
                <div className="bannerText">
                    <h1>Sabores inegualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>
            </div>

            <main>
                <h2>Sobremesas </h2>

                <section className="typeOfFoodList" >
                    <div className="buttonMoveForLeft">
                        <button onClick={handleTranslateForLeft1} type="button">
                            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 0.293122C12.0976 0.683646 12.0976 1.31681 11.7071 1.70734L2.41421 11.0002L11.7071 20.2931C12.0976 20.6836 12.0976 21.3168 11.7071 21.7073C11.3166 22.0979 10.6834 22.0979 10.2929 21.7073L0.292893 11.7073C-0.0976311 11.3168 -0.0976311 10.6836 0.292893 10.2931L10.2929 0.293122C10.6834 -0.0974022 11.3166 -0.0974022 11.7071 0.293122Z" fill="white" />
                            </svg>

                        </button>
                    </div>

                    <div className="cardsFoodContainer" style={{ position: 'relative', left: `${left1}px` }}>

                        {
                            plates
                                .filter(plate => plate.plate_category == "sobremesas")
                                .map((plate) => (
                                    < AdmFoodCard
                                        key={String(plate.id)}
                                        className={"admFoodCard"}
                                        onClick={() => handleDetails(plate)}
                                        data={plate}
                                    // consigo acessar colunas de plates em details sem fazer outro get.

                                    />
                                ))
                        }
                    </div>

                    <div className="buttonMoveForRight">
                        <button onClick={handleTranslateForRight1} type="button">
                            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.293122C0.683417 -0.0974022 1.31658 -0.0974022 1.70711 0.293122L11.7071 10.2931C12.0976 10.6836 12.0976 11.3168 11.7071 11.7073L1.70711 21.7073C1.31658 22.0979 0.683417 22.0979 0.292893 21.7073C-0.0976311 21.3168 -0.0976311 20.6836 0.292893 20.2931L9.58579 11.0002L0.292893 1.70734C-0.0976311 1.31681 -0.0976311 0.683646 0.292893 0.293122Z" fill="white" />
                            </svg>

                        </button>
                    </div>
                </section>

                <h2>Refeições </h2>

                <section className="typeOfFoodList" >
                    <div className="buttonMoveForLeft">
                        <button onClick={handleTranslateForLeft2} type="button">
                            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 0.293122C12.0976 0.683646 12.0976 1.31681 11.7071 1.70734L2.41421 11.0002L11.7071 20.2931C12.0976 20.6836 12.0976 21.3168 11.7071 21.7073C11.3166 22.0979 10.6834 22.0979 10.2929 21.7073L0.292893 11.7073C-0.0976311 11.3168 -0.0976311 10.6836 0.292893 10.2931L10.2929 0.293122C10.6834 -0.0974022 11.3166 -0.0974022 11.7071 0.293122Z" fill="white" />
                            </svg>

                        </button>
                    </div>

                    <div className="cardsFoodContainer" style={{ position: 'relative', left: `${left2}px` }}>
                        {
                            plates
                                .filter(plate => plate.plate_category == "refeições")
                                .map((plate) => (
                                    < AdmFoodCard
                                        key={String(plate.id)}
                                        className={"admFoodCard"}
                                        onClick={() => handleDetails(plate)}
                                        data={plate}
                                    // consigo acessar colunas de plates em details sem fazer outro get.

                                    />
                                ))
                        }
                    </div>

                    <div className="buttonMoveForRight">
                        <button onClick={handleTranslateForRight2} type="button">
                            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.293122C0.683417 -0.0974022 1.31658 -0.0974022 1.70711 0.293122L11.7071 10.2931C12.0976 10.6836 12.0976 11.3168 11.7071 11.7073L1.70711 21.7073C1.31658 22.0979 0.683417 22.0979 0.292893 21.7073C-0.0976311 21.3168 -0.0976311 20.6836 0.292893 20.2931L9.58579 11.0002L0.292893 1.70734C-0.0976311 1.31681 -0.0976311 0.683646 0.292893 0.293122Z" fill="white" />
                            </svg>

                        </button>
                    </div>
                </section>

                <h2>Pratos principais </h2>

                <section className="typeOfFoodList" >
                    <div className="buttonMoveForLeft">
                        <button onClick={handleTranslateForLeft3} type="button">
                            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 0.293122C12.0976 0.683646 12.0976 1.31681 11.7071 1.70734L2.41421 11.0002L11.7071 20.2931C12.0976 20.6836 12.0976 21.3168 11.7071 21.7073C11.3166 22.0979 10.6834 22.0979 10.2929 21.7073L0.292893 11.7073C-0.0976311 11.3168 -0.0976311 10.6836 0.292893 10.2931L10.2929 0.293122C10.6834 -0.0974022 11.3166 -0.0974022 11.7071 0.293122Z" fill="white" />
                            </svg>

                        </button>
                    </div>

                    <div className="cardsFoodContainer" style={{ position: 'relative', left: `${left3}px` }}>
                        {
                            plates
                                .filter(plate => plate.plate_category == "pratos principais")
                                .map((plate) => (
                                    < AdmFoodCard
                                        key={String(plate.id)}
                                        className={"admFoodCard"}
                                        onClick={() => handleDetails(plate)}
                                        data={plate}
                                    // consigo acessar colunas de plates em details sem fazer outro get.

                                    />
                                ))
                        }
                    </div>

                    <div className="buttonMoveForRight">
                        <button onClick={handleTranslateForRight3} type="button">
                            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.293122C0.683417 -0.0974022 1.31658 -0.0974022 1.70711 0.293122L11.7071 10.2931C12.0976 10.6836 12.0976 11.3168 11.7071 11.7073L1.70711 21.7073C1.31658 22.0979 0.683417 22.0979 0.292893 21.7073C-0.0976311 21.3168 -0.0976311 20.6836 0.292893 20.2931L9.58579 11.0002L0.292893 1.70734C-0.0976311 1.31681 -0.0976311 0.683646 0.292893 0.293122Z" fill="white" />
                            </svg>

                        </button>
                    </div>
                </section>
            </main>

            <Footer />

        </Container>
    )
}