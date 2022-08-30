export const createData = (data) =>{
    return{
        type:"CREATE",
        payload:{
            id:Math.random(),
            data:data
        }
    }
}
export const viewData = (id) =>{
    return{
        type:"VIEW",
        payload:{
           id,
        }
    }
}
export const editData = (id,data) =>{
    return{
        type:"EDIT",
        id,
        data
        
    }
}
export const deleteData = (id) =>{
    return{
        type:"DELETE",
        id
    }
}