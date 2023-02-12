// import TableForm from "@/components/post/TableForm";

import TableForm from "@/components/write/TableForm"

function NewPostPage() {

    // const addPostHandler = async(data: any) => {
    //     const response = await fetch('api/new-table', {
    //         method: 'POST',
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })

    //     console.log(await response.json())
    //     console.log(data)

    // } 

    return (    
        <TableForm/>
        // <TableForm onAddPost = {addPostHandler}/>
    )
}

export default NewPostPage;