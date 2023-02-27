// import TableForm from "@/components/post/TableForm";


import WriteFormContainer from "@/containers/write/WriteFormContainer";

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
        <WriteFormContainer/>
        // <TableForm onAddPost = {addPostHandler}/>
    )
}

export default NewPostPage;