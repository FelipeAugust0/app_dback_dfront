//Passar as props para a function 
function CadastrarCategoria({categoria, setCategoria}){
    
    //criação das variaveis de estado
    const [nome,setNome] = useState("")

    //Função que funcionará quando o usuario enviar o formulário

    const handleSubmit = (e) =>{
        //evita que o formulario seja submetido de forma padrão
        e.preventDefault();
        //cria um objeto atribuindo a ele um id unico e o nome digitado
        const NewNome = {id:Date.now(),nome}

        //aqui o setCategoria modifica a lista adicionando um novo nome
        setCategoria([...categoria, NewNome])

        //Limpa os campos
        setNome("")

    }

    return(
        <div className="CadastrodeCategoria">
            <h2>Cadastrar categoria</h2>
            
            <form onChange={handleSubmit}>
        <input
        type="text"
        placeholder="Nome"
        onChange={(e)=>setNome(e.target.value)}
        
        
        />
        <button type="submit">Salvar</button>


            </form>

        </div>
    )

}
export default CadastrarCategoria