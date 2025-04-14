import useFetchMiniProjectsData from "./useFetchMiniProjectsData";
import {BASE_URL} from "./constants";

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
                credentials: 'include',
            })
            if (!response.ok){
                throw new Error('Failed to Add New Mini Project')
            }
            reFetchMiniProjects()
        }catch(err){
            console.log(err)
            console.error(err)
        }
    }

    return addNewMiniProject
}
export default useHandleNewMiniProject