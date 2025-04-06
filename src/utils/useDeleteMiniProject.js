import useFetchMiniProjectsData from "./useFetchMiniProjectsData";
import {BASE_URL} from "./constants";

const useDeleteMiniProject=()=>{
    const {reFetchMiniProjects}=useFetchMiniProjectsData()

    const deleteMiniProjects=async (id)=>{
        try{
            const response=await fetch(`${BASE_URL}/api/miniProjects/${id}`,{
                method:"DELETE",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if(!response.ok){
                throw new Error('Failed to delete project')
            }
            reFetchMiniProjects()
            return await response.json();

        }catch(error){
            console.log(error)
            console.error(error)
        }
    }
    return deleteMiniProjects
}
export default useDeleteMiniProject