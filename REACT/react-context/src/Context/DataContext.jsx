import React ,{createContext} from "react";

// create an instance of context


export const DataContext=createContext()


// provider component
function DataProvider(props){

    let data={
postApi:usePost(),
userApi:useUserApi()


    }
return(
<DataContext.Provider value={data}>

{props.children}

</DataContext.Provider>



)



}
export default DataProvider