const initialData = {
  datalist: [],
  editIem: {},
  saveItem: {},
};

const crud = (state = initialData, action) => {
  switch (action.type) {
    case "CREATE":
      const { id, data,isedit } = action.payload;
      let newDataList = []
      if(isedit){
         newDataList = state.datalist.map(item=>{
          if(item.id===id) return {id:item.id,data}
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

    case "EDIT":
      const newEditList = state.datalist.find((e) => e.id === action.id);
      return {
        ...state,
        editIem: newEditList.data,
      };
   
      case "VIEW":
        const viewData = state.datalist.find((e)=>e.id===action.payload.id);
        return{
          ...state,
          saveItem:viewData.data,
        }
    default:
      return state;
  }
};

export default crud;
