import useFetchProjectsData from "./useFetchProjectsData";
import {BASE_URL} from "./constants";

const useDeleteProject=()=>{
    const {reFetchProjects}=useFetchProjectsData()

    const deleteProject=async (id)=>{
        try {
            const response = await fetch(`${BASE_URL}/api/projects/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                credentials: 'include'
            })
            if(!response.ok){
                throw new Error('Failed to delete project')
            }
            reFetchProjects();
            return await response.json();
        }catch (error){
            console.error(error)
            console.log(error)
        }
    }
    return deleteProject;
}
export default useDeleteProject;