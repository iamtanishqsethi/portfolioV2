import useFetchProjectsData from "./useFetchProjectsData";
import {BASE_URL} from "./constants";
import {toast} from "react-hot-toast";

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

            })
            if(!response.ok){
                throw new Error('Failed to delete project')
            }
            reFetchProjects();
            toast.success(`Successfully deleted project `);
            return await response.json();
        }catch (error){
            console.error(error)
            console.log(error)
            toast.error(`Error while deleting project `);
        }
    }
    return deleteProject;
}
export default useDeleteProject;