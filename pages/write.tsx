import Post from "@/components/post/Post"
import { withSessionSsr } from "@/lib/withSession"
import { NextPage } from "next";

interface WritePageProps {
    user: {
        loggedIn: boolean,
        id: string
    }
}

const WritePage: NextPage<WritePageProps> = ({ user }) => {

    return (
        <div>
            <Post/>
        </div>
    )
}
export default WritePage;

// export const getServerSideProps = withSessionSsr(
//     async function getServerSideProps({ req }) {
//       const user = req.session.user;
    
//       if (!user.loggedIn) {
//         return {
//             redirect: {
//                 destination: "/",
//                 permanent: false,
//             },
//         };
//       }
  
//     return {
//         props: {
//             user: req.session.user,
//         },
//     };
//     },
// );