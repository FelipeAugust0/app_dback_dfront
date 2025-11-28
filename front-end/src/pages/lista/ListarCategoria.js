import { useState } from "react"

function ListarCategoria({categoria,setCategoria}){
    const[editarId,setEditarId] = useState("")
    const[newNome, setNewNome] = useState("")

    const handleSave=(id)=>{
        setCategoria(
            categoria.map((c)=>
            c.id === id ? {...c,name:newNome} : c)
        );
        setEditarId(null);

    }

    const handleEdit = (categoria) =>{
        setEditarId(categoria.id)
        setNewNome(categoria.nome)
    }

    const handleDelete =(id)=>{
    setCategoria(categoria.filter((c) => c.id !== id));
    };

    return(
        <div className="lista-categoria">
            <h2>Lista de Categorias</h2>
            {categoria.length === 0 ?(
                <p>Nenhum Categoria cadastrada</p>
            ):(
                <ul>
                    {categoria.map((categoria)=>(
                        <li key={categoria.id}>{editarId === categoria.id ? (
                            <>
                            <input
                            type="text"
                            onChange={(e)=>setNewNome(e.target.value)}
                            />
                            <button onClick={()=>handleSave(categoria.id)}>Salvar</button>
                            </>
                        ):(
                            <>
                            <span>
                            {categoria.nome}
                            </span>
                            <button onClick={()=>handleEdit(categoria)}>Editar</button>
                            <button onClick={()=>handleDelete(categoria.id)}>Deletar</button>
                            </>

                        )}</li>
                    )
                    )}
                </ul>
            )}

        </div>
    )

}
export default ListarCategoria