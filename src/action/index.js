export const createData = (data) =>{
    return{
        type:"CREATE",
        payload:{
            id:Math.random(),
            data:data
        }
    }
}
export const editData = (id) =>{
    return{
        type:"EDIT",
        id,
        
    }
}
export const deleteData = (id) =>{
    return{
        type:"DELETE",
        id
    }
}