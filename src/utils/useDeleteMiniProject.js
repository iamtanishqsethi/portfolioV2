import useFetchMiniProjectsData from "./useFetchMiniProjectsData";
import {BASE_URL} from "./constants";
import {toast} from "react-hot-toast";

const useDeleteMiniProject=()=>{
    const {reFetchMiniProjects}=useFetchMiniProjectsData()

    const deleteMiniProjects=async (id)=>{
        try{
            const response=await fetch(`${BASE_URL}/api/miniProjects/${id}`,{
                method:"DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
            })
            if(!response.ok){
                throw new Error('Failed to delete project')
            }
            reFetchMiniProjects()
            toast.success(`Successfully deleted MiniProject `)
            return await response.json();

        }catch(error){
            console.log(error)
            console.error(error)
            toast.error(`Error while deleting MiniProject ${error}`);
        }
    }
    return deleteMiniProjects
}
export default useDeleteMiniProject