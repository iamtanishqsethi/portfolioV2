import useFetchProjectsData from "./useFetchProjectsData";
import {BASE_URL} from "./constants";
import {toast} from "react-hot-toast";

const useUpdateSingleProject=()=>{
    const {reFetchProjects}=useFetchProjectsData()

    const updateProject=async (updatedData,id)=>{
        try{
            const response = await fetch(`${BASE_URL}/api/projects/` + id, {
                method: 'PUT',
                body: JSON.stringify(updatedData),
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },

            });
            if (!response.ok) {
                throw new Error('Unable to Update Project');

            }
            reFetchProjects()
            toast.success(`Successfully Updated Project`);
            return await response.json()
        }catch(error){
            console.error(error)
            console.log(error)
            toast.error(`Error Updating Project: ${error}`);
        }
    }
    return updateProject;
}
export default useUpdateSingleProject;