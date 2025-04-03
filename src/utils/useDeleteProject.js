import useFetchProjectsData from "./useFetchProjectsData";

const useDeleteProject=()=>{
    const {reFetchProjects}=useFetchProjectsData()

    const deleteProject=async (id)=>{
        try {
            const response = await fetch(`http://localhost:3300/api/projects/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
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