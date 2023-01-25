import MainTemplate from "@/components/main/MainTemplate"
import Header from "@/components/base/Header"
import HomeLayout from "@/components/home/HomeLayout"
import TableItem from "@/components/table/TableItem"

function Homepage(){
  return (
    <HomeLayout>
      <Header></Header>
      <TableItem/>
    </HomeLayout>
      
   
    
  )
}


export default Homepage