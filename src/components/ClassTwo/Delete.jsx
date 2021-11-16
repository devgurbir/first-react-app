function DeleteButton({ id, onClick }){
    return(
        <button name = {id} onClick = {onClick}>Delete Task#{id}</button>
    )
}

export default DeleteButton