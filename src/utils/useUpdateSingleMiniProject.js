import useFetchMiniProjectsData from "./useFetchMiniProjectsData";
import {BASE_URL} from "./constants";
import {toast} from "react-hot-toast";

const useUpdateSingleMiniProject=()=>{
    const {reFetchMiniProjects}=useFetchMiniProjectsData()

    const updateMiniProject=async (updatedData,id)=>{
        try{
            const response=await fetch(`${BASE_URL}/api/miniProjects/`+id,{
                method:"PUT",
                body: JSON.stringify(updatedData),
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
            })
            if(!response.ok){
                throw new Error('Unable to Update Mini Project');
            }
            toast.success(`Successfully Updated Mini Project`);
            reFetchMiniProjects()
        }catch(e){
            console.log(e)
            console.error(e)
            toast.error(`Error Updating MiniProject ${e}`);
        }
    }
    return updateMiniProject;
}
export default useUpdateSingleMiniProject;