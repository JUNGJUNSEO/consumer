import ErrorPage from '../404'
import UserLayout from "@/components/user/UserLayout"
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { MongoClient } from 'mongodb'



const UserPage: NextPage<{ userId: string }> = ({ userId }) => {

    const router = useRouter()
    const [user, setUser] = useState("")

    useEffect(() => {
        const fetchUser = async() => {
            const user = '서정준'
            setUser(user)
        }
    }, [userId])

    if(!user) {
        return <ErrorPage/>
    }

    return (
        <div>
            <h1>Welcome to {user}'s page</h1>
        </div>
    )

}


UserPage.getLayout = UserLayout




UserPage.getInitialProps = async ({ res, query }) => {
    const { userId } = query
  
    if (!userId) {
      if (res) {
        res.statusCode = 404
        res.end('User not found')
      } else {
        // In the client, navigate to the 404 error page
        Router.push('/404')
      }
    }

    const client = await MongoClient.connect(process.env.DB_URL);
    const db = client.db();
    const users = db.collection('users');
    

    client.close()
  
    const user = await getUserFromDB(userId)
  
    return { userId, user }
  }

export default UserPage