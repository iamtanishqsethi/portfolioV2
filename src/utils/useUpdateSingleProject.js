import useFetchProjectsData from "./useFetchProjectsData";

const useUpdateSingleProject=()=>{
    const {reFetchProjects}=useFetchProjectsData()

    const updateProject=async (updatedData,id)=>{
        try{
            const response = await fetch("http://localhost:3300/api/projects/" + id, {
                method: 'PUT',
                body: JSON.stringify(updatedData),
                headers: {
                    'Content-Type': 'application/json',
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