import { Container } from "./style";
import { Header } from "../../components/Header";
import { RedButton } from "../../components/RedButton";
import { Footer } from "../../components/Footer";
import { NoteItem } from "../../components/NoteItem";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { api } from "../../service/api";
import { useEffect } from "react";


export function AdmEditFood() {
    const navigate = useNavigate()
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarUrl, setAvatarUrl ] = useState(" ")
    const [plates, setPlates] = useState([]);
   

    const [plateTitle, setPlateTitle] = useState("");
    const [plateDescription, setPlateDescription] = useState("");
    const [platePrice, setPlatePrice] = useState("");
    const [plateCategory, setPlateCategory] = useState("");
    const location = useLocation()
    const { id } = location.state
   
    function setStates(response){
        setPlates(response.data)
        setPlateTitle(response.data.plate_title)
        setPlatePrice(response.data.plate_price)
        setPlateDescription(response.data.plate_description);
        setPlateCategory(response.data.plate_category)
        setAvatarUrl(response.data.plates.avatar)
    }


    useEffect(() => {
        async function fetchPlates() {
            try {

                let params;
                params = new URLSearchParams();
                params.append("id", id);

            const response = await api.get(`/plates/${id}`)
            setStates(response);

            } catch (error) {
                console.error(error)

            }
        };
        
        async function fetchIngredients() {
            const response = await api.get("ingredients")
            const ingredients = response.data;  
            const ingredientsOfPlate = ingredients.filter((ingredient) => ingredient.plate_id === plates.id)
            setIngredients(ingredientsOfPlate)

            
        };
        
        fetchPlates();
        fetchIngredients();
    }, [id])

    function handleInsertAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file);
    }

    function handleAddIngredient() {

        if (newIngredient == "") {
            alert("Não é possivel cadastrar um campo vazio")
        }
        else {
            setIngredients(ingredient => [...ingredient, newIngredient]);
            setNewIngredient("");
        }
    }

    async function handleUpdatePlate() {
        if (!plateTitle) {
            alert("Digite um nome para seu prato")
            return
        }

        if (newIngredient) {
            alert(`você inseriu um texto no campo de ingredientes, mas não ciclou em "adicionar". Clique em "adicionar" ou deixe o campo vazio`)
            return
        }

        if (!platePrice) {
            alert("Defina um preço para seu prato")
            return
        }

        try {
            let avatarToSend;
            if(avatarFile){
                avatarToSend=avatarFile
            }else if(avatarUrl) {
                const response =await fetch(avatarUrl)
                const data= await response.blob()
                avatarToSend = new File([data], "avatar.jpg")
            }
                           
                const formData = new FormData();
                //criando objeto para enviar dados de um formulário por meio de um requisição HTTP.
                formData.append("plate_title", plateTitle);
                formData.append("plate_category", plateCategory);
                formData.append("plate_description", plateDescription);
                formData.append("plate_price", platePrice);
                ingredients.forEach(ingredient => formData.append("ingredients", ingredient));
                formData.append("avatar", avatarToSend)
                //  FormData  permite o envio de dados de formulário que incluem tanto campos de texto simples quanto arquivos binários, como imagens.
                console.log(formData)

                await api.put(`/plates/${id}`, formData, {
                    headers: {
                        'Content-type': 'multipart/form-data'
                    }
                });
            
            alert("Prato atualizado com sucesso")
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Erro ao inserir prato na tabela")
            }
        }
    }

    function handleBack() {
        navigate(-1)
    }

    function handleDeleteIngredient(deleted) {
        setIngredients(prevState => prevState.filter((ingredient) => ingredient !== deleted))
    }

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

            <main>
                <button
                    id="buttonBack"
                    onClick={handleBack}
                >
                    <div className="backImg">
                        <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 0.293122C12.0976 0.683646 12.0976 1.31681 11.7071 1.70734L2.41421 11.0002L11.7071 20.2931C12.0976 20.6836 12.0976 21.3168 11.7071 21.7073C11.3166 22.0979 10.6834 22.0979 10.2929 21.7073L0.292893 11.7073C-0.0976311 11.3168 -0.0976311 10.6836 0.292893 10.2931L10.2929 0.293122C10.6834 -0.0974022 11.3166 -0.0974022 11.7071 0.293122Z" fill="white" />
                        </svg>

                    </div>

                    <span>voltar</span>

                </button>

                <h1>Novo prato</h1>

                <form action="newPlateForm">

                    <fieldset>
                        <div className="definingDisplay">
                            <label htmlFor="foodAvatarInput">
                                Imagem do prato
                                <div className="inputContainer">
                                    <button className="choseImg" type="button">
                                        <div className="inputFileContent">
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.2929 1.21697C11.6834 0.826441 12.3166 0.826441 12.7071 1.21697L17.9571 6.46697C18.3476 6.85749 18.3476 7.49065 17.9571 7.88118C17.5666 8.2717 16.9334 8.2717 16.5429 7.88118L12 3.33829L7.45711 7.88118C7.06658 8.2717 6.43342 8.2717 6.04289 7.88118C5.65237 7.49065 5.65237 6.85749 6.04289 6.46697L11.2929 1.21697Z" fill="white" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 0.924072C12.5523 0.924072 13 1.37179 13 1.92407V15.9241C13 16.4764 12.5523 16.9241 12 16.9241C11.4477 16.9241 11 16.4764 11 15.9241V1.92407C11 1.37179 11.4477 0.924072 12 0.924072Z" fill="white" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M1 14.9241C1.55228 14.9241 2 15.3718 2 15.9241V22.9241H22V15.9241C22 15.3718 22.4477 14.9241 23 14.9241C23.5523 14.9241 24 15.3718 24 15.9241V22.9241C24 23.4545 23.7893 23.9632 23.4142 24.3383C23.0391 24.7134 22.5304 24.9241 22 24.9241H2C1.46957 24.9241 0.960861 24.7134 0.585787 24.3383C0.210714 23.9632 0 23.4545 0 22.9241V15.9241C0 15.3718 0.447715 14.9241 1 14.9241Z" fill="white" />
                                            </svg>

                                            <span>Selecionar imagem</span>

                                            <input
                                                type="file"
                                                id="avatar"
                                                onChange={handleInsertAvatar}
                                            />
                                        </div>
                                    </button>
                                </div>
                            </label>

                            <label htmlFor="nameFoodInput">
                                Nome
                                <div className="inputContainer">
                                    <input
                                        type="text"
                                        name="nameFoodInput"
                                        id="inputTextContainer"
                                        placeholder="Ex: Salada Ceasar"
                                        onChange={(event) => setPlateTitle(event.target.value)}
                                        value={plateTitle}
                                        
                                    />

                                </div>
                            </label>

                            <label>
                                Categoria
                                <div className="inputContainer dark900">
                                    <select value= {plateCategory} id="foodCategory" onChange={(event)=>setPlateCategory(event.target.value)}>
                                        <option value="refeições">Refeições</option>
                                        <option value="sobremesas">Sobremesas</option>
                                        <option value="pratos principais">Pratos principais</option>
                                    </select>
                                </div>
                            </label>
                        </div>

                        <div className="definingDisplay2">
                            <label>
                                Ingredientes
                                <div className="ContainerOfIngredientsBox">
                                    <div id="ingredientsContainer">

                                        {
                                            ingredients.map((ingredient, index) => (

                                                <NoteItem
                                                    key={index}
                                                    value={ingredient.name}
                                                    onClick={() => { handleDeleteIngredient(ingredient) }}
                                                    onChange={(e) => setNewIngredient(e.target.value)}
                                                  

                                                />
                                            ))
                                        }

                                        < NoteItem
                                            isNew
                                            onClick={handleAddIngredient}
                                            placeholder="Adicionar"
                                            value={newIngredient}
                                            onChange={e => setNewIngredient(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </label>

                            <label htmlFor="nameFoodInput">
                                Preço
                                <div className="inputContainer">
                                    <input
                                        type="text"
                                        name="nameFoodInput"
                                        id="inputTextContainer"
                                        placeholder="R$ 00,00 "
                                        onChange={event => setPlatePrice(event.target.value)}
                                        value={platePrice}
                                    />
                                </div>
                            </label>
                        </div>

                        <label htmlFor="nameFoodInput" className="textAreaLabel">
                            Descrição
                            <div className="textAreaContainer">
                                <textarea
                                    name="foodDescription"
                                    id="description"
                                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                    onChange={event => setPlateDescription(event.target.value)}
                                    value={plateDescription}
                                >
                                </textarea>
                            </div>
                        </label>

                        <RedButton
                            style="editPlateRedButton"
                            onClick={handleUpdatePlate}>
                        </RedButton>
                    </fieldset>
                </form>
            </main>

            <Footer />
        </Container>
    )
}
