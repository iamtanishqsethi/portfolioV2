import useFetchMiniProjectsData from "./useFetchMiniProjectsData";
import {BASE_URL} from "./constants";

const useUpdateSingleMiniProject=()=>{
    const {reFetchMiniProjects}=useFetchMiniProjectsData()

    const updateMiniProject=async (updatedData,id)=>{
        try{
            const response=await fetch(`${BASE_URL}/api/miniProjects/`+id,{
                method:"PUT",
                credentials: "include",
                body: JSON.stringify(updatedData),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if(!response.ok){
                throw new Error('Unable to Update Mini Project');
            }
            reFetchMiniProjects()
        }catch(e){
            console.log(e)
            console.error(e)
        }
    }
    return updateMiniProject;
}
export default useUpdateSingleMiniProject;