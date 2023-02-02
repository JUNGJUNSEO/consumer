import TableForm from "@/components/post/TableForm";

function NewPostPage() {

    const addPostHandler = async(data: any) => {
        const response = await fetch('api/new-table', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log(await response.json())
        console.log(data)

    } 

    return (    
  
        <TableForm onAddPost = {addPostHandler}/>
    )
}

export default NewPostPage;