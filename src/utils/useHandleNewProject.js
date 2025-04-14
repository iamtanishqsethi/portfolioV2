import useFetchProjectsData from "./useFetchProjectsData";
import {BASE_URL} from "./constants";
import {toast} from "react-hot-toast";
const useHandleNewProject=()=>{
    const {reFetchProjects}=useFetchProjectsData()

    const addNewProject=async (data)=>{
        try{
            const response=await fetch(`${BASE_URL}/api/projects/`,{
                method:"POST",
                body:JSON.stringify(data),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },

            })
            if (!response.ok){
                throw new Error('Failed to Add New Project')
            }
            toast.success('Successfully added project')
            reFetchProjects()
        }catch (error){
            console.log(error)
            console.error(error)
            toast.error('Failed to Add New Project')
        }
    }
    return addNewProject;
}
export default useHandleNewProject;