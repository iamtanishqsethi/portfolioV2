import useFetchMiniProjectsData from "./useFetchMiniProjectsData";

const useUpdateSingleMiniProject=()=>{
    const {reFetchMiniProjects}=useFetchMiniProjectsData()

    const updateMiniProject=async (updatedData,id)=>{
        try{
            const response=await fetch("http://localhost:3300/api/miniProjects/"+id,{
                method:"PUT",
                credentials: "include",
                body: JSON.stringify(updatedData),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if(!response.ok){
                throw new Error('Unable to Update Mini Project');
            }
            reFetchMiniProjects()
        }catch(e){
            console.log(e)
            console.error(e)
        }
    }
    return updateMiniProject;
}
export default useUpdateSingleMiniProject;