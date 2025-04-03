import useFetchMiniProjectsData from "./useFetchMiniProjectsData";

const useHandleNewMiniProject = () => {
    const {reFetchMiniProjects}=useFetchMiniProjectsData()

    const addNewMiniProject = async (data)=>{
        try{
            const response=await fetch('http://localhost:3300/api/miniProjects',{
                method:"POST",
                body:JSON.stringify(data),
                headers:{"Content-Type":"application/json"},
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