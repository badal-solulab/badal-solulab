/* eslint-disable default-case */
const initialData = {
  datalist: [],
  editIem: {},
  saveItem: {},
};

// const [datalist,setdatalist]=useState([])

const crud = (state = initialData, action) => {
  switch (action.type) {
    case "CREATE":
      const { id, data } = action.payload;
      let newDataList = []
      if(data.idProps){
         newDataList = state.datalist.map(item=>{
          if(item.id===data.idProps) return {id:item.id,data}
          return item
        })
      } else{
        newDataList = [
          ...state.datalist,
          {
            id: id,
            data: data,
          },
        ]
      }
      return {
        ...state,
        datalist:newDataList
      };

    case "DELETE":
      const newList = state.datalist.filter((e) => e.id !== action.id);
      return {
        ...state,
        datalist: newList,
      };
    // case "VIEW":

    case "EDIT":
      const newEditList = state.datalist.find((e) => e.id === action.id);
      console.log(newEditList);
      console.log("payload", action.payload);
      return {
        ...state,
        editIem: newEditList.data,
      };
   
      case "VIEW":
        const viewData = state.datalist.find((e)=>e.id===action.payload.id);
        console.log(viewData);
        return{
          ...state,
          saveItem:viewData.data,
        }
    default:
      return state;
  }
};

export default crud;
