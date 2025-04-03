import useFetchMiniProjectsData from "./useFetchMiniProjectsData";

const useDeleteMiniProject=()=>{
    const {reFetchMiniProjects}=useFetchMiniProjectsData()

    const deleteMiniProjects=async (id)=>{
        try{
            const response=await fetch(`http://localhost:3300/api/miniProjects/${id}`,{
                method:"DELETE",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if(!response.ok){
                throw new Error('Failed to delete project')
            }
            reFetchMiniProjects()
            return await response.json();

        }catch(error){
            console.log(error)
            console.error(error)
        }
    }
    return deleteMiniProjects
}
export default useDeleteMiniProject