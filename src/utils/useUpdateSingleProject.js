import useFetchProjectsData from "./useFetchProjectsData";
import {BASE_URL} from "./constants";

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
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error('Unable to Update Project');

            }
            reFetchProjects()
            return await response.json()
        }catch(error){
            console.error(error)
            console.log(error)
        }
    }
    return updateProject;
}
export default useUpdateSingleProject;