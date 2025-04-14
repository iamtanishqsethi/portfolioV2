import useFetchMiniProjectsData from "./useFetchMiniProjectsData";
import {BASE_URL} from "./constants";
import {toast} from "react-hot-toast";

const useHandleNewMiniProject = () => {
    const {reFetchMiniProjects}=useFetchMiniProjectsData()

    const addNewMiniProject = async (data)=>{
        try{
            const response=await fetch(`${BASE_URL}/api/miniProjects`,{
                method:"POST",
                body:JSON.stringify(data),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },

            })
            if (!response.ok){
                throw new Error('Failed to Add New Mini Project')
            }
            toast.success('Added MiniProject')
            reFetchMiniProjects()
        }catch(err){
            console.log(err)
            console.error(err)
            toast.error('Failed to Add Mini Project')
        }
    }

    return addNewMiniProject
}
export default useHandleNewMiniProject