import { useState } from "react"

function TodoList({names}){
    const lista = names.map((name, index) => <li key={name + index}>{name}</li>)
    const [items,setItems] = useState(lista)
    const remover1 = ((e)=>{
        e.preventDefault()
        const change = items.splice(0,1);
        setItems(change)

    })
    const remover2 = ((e)=>{
        e.preventDefault()

        const change = items.splice(1,1);
        setItems(change)

    })
    const remover3 = ((e)=>{
        e.preventDefault()
        const change = items.splice(2,1);
        setItems(change)

    })

    return(
        <form>
            <ul>HERE WE HAVE A LIST: {items}</ul>
            <button type="remove" name="remove1" onClick={remover1}>Remove1</button> 
            <button type="remove" name="remove2" onClick={remover2}>Remove2</button> 
            <button type="remove" name="remove3" onClick={remover3}>Remove3</button> 
        </form>
    )
}
export default TodoList

// con lo splice creo un nuovo array in cui 
// metto il risultato dei bottoni ma non riesco a fare il contrario per far apparire
// invece dei componenti tolti solo quelli rimasti