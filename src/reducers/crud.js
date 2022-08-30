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
    // const newArray = state.datalist.map((data,id)=>{
    //   if (id===action.payload.id) {
    //     return {
    //       ...state,

    //     };
    //   } else {
    //     return {
    //       ...state,data
    //     }
    //     console.log(newArray,"asda");

    //   }
    // })

    //  const newArray = oldArray.map((item,index)=>{if(index===payload.id} return newObj; else return item})

    default:
      return state;
  }
};

export default crud;
