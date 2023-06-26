import { Container } from "./style";
import { Header } from "../../components/Header";
import { RedButton } from "../../components/RedButton";
import { Footer } from "../../components/Footer";

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../service/api";


export function Details() {
    const navigate = useNavigate()
    const [data, setData] = useState(null)
    const [ingredients, setIngredients] = useState([])
    const location = useLocation()
    const { plate } = location.state


    function handleBack() {
        navigate(-1)
    }

    function handleEditFood(id) {

        navigate(`/editfood/${id}`, { state: { id } })
    }

    useEffect(() => {
        async function fetchIngredients() {
            const response = await api.get("ingredients/client")
            console.log(response.data)
            const ingredients = response.data;

            const ingredientsOfPlate = ingredients.filter((ingredient) => ingredient.plate_id === plate.id)
            setIngredients(ingredientsOfPlate)

        }

        fetchIngredients()
    }, [])


    return (
        <Container>
            < Header type="appHeader">
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
            <main>
                <div className="backContainer">

                    <button
                        type="button"
                        className='backButton'
                        onClick={handleBack}
                    >

                        <div className="backImg">
                            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 0.293122C12.0976 0.683646 12.0976 1.31681 11.7071 1.70734L2.41421 11.0002L11.7071 20.2931C12.0976 20.6836 12.0976 21.3168 11.7071 21.7073C11.3166 22.0979 10.6834 22.0979 10.2929 21.7073L0.292893 11.7073C-0.0976311 11.3168 -0.0976311 10.6836 0.292893 10.2931L10.2929 0.293122C10.6834 -0.0974022 11.3166 -0.0974022 11.7071 0.293122Z" fill="white" />
                            </svg>

                        </div>
                        <span>voltar</span>
                    </button>

                </div>


                <div className="foodFlexDirectionControl">
                    <div className="foodImg">
                        <img src={`${api.defaults.baseURL}/files/${plate.avatar}`} alt="" />
                    </div>

                    <div className="foodDescription">
                        <h1>{plate.plate_title}</h1>
                        <p>{plate.plate_description}</p>

                        <div className="tagsContainer">

                            {
                                ingredients.map((ingredient) => {
                                    return (
                                        <div
                                            key={String(ingredient.id)}
                                            className="tag"
                                        >
                                            <span>{ingredient.name}</span>
                                        </div>

                                    )
                                })
                            }

                        </div>

                        <div className="orderQuantity">

                            <div className="adjusterQuantityFood">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4 13C4 12.4477 4.33579 12 4.75 12H21.25C21.6642 12 22 12.4477 22 13C22 13.5523 21.6642 14 21.25 14H4.75C4.33579 14 4 13.5523 4 13Z" fill="white" />
                                </svg>

                                <div className="numbersOfQuantity">
                                    <span>0</span>
                                    <span>1</span>
                                </div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4 13C4 12.5858 4.33579 12.25 4.75 12.25H21.25C21.6642 12.25 22 12.5858 22 13C22 13.4142 21.6642 13.75 21.25 13.75H4.75C4.33579 13.75 4 13.4142 4 13Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13 4C13.4142 4 13.75 4.33579 13.75 4.75V21.25C13.75 21.6642 13.4142 22 13 22C12.5858 22 12.25 21.6642 12.25 21.25V4.75C12.25 4.33579 12.5858 4 13 4Z" fill="white" />
                                </svg>


                            </div>

                            <RedButton style="clientDetailsRedButton">
                                {/* onClick={() => handleEditFood(plate.id)} */}

                                <div>
                                    <span>pedir ∙ R$ </span>
                                    <span>{plate.plate_price}</span>
                                </div>

                            </RedButton>
                        </div>
                    </div>

                </div>

            </main>
            <Footer />


        </Container>
    )
}