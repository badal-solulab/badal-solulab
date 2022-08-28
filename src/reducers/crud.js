/* eslint-disable default-case */
const initialData = {
  datalist: [],
  editIem:{

  },
  saveItem:[
   
  ]
};

// const [datalist,setdatalist]=useState([])

const crud = (state = initialData, action) => {
  switch (action.type) {
    case "CREATE":
      const { id, data } = action.payload;
      
      return {
        ...state,
        datalist: [
          ...state.datalist,
          {
            id: id,
            data: data,
          },
         
        ],
         };

      case "DELETE":
       const newList = state.datalist.filter((e)=>e.id !== action.id)
        return {
          ...state,
         datalist:newList
        };

      case "EDIT":
          const newEditList = state.datalist.find((e)=>e.id === action.id)
          console.log(newEditList);
           return {
             ...state,
             editIem:newEditList.data
           };
    default:
      return state;
  }
};

export default crud;
