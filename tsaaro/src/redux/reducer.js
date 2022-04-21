const initialState={
    websiteData:{}
}
const ChangeSite=(state=initialState,action)=>{
    console.log("............",action.type)

    switch (action.type) {
        case "CHANGE_WEBSITE":
            return {...state,websiteData:action.payload}
        default:
           return state;
    }


}
export default ChangeSite;