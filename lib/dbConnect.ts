import mongoose from 'mongoose'

let connection: any = null

async function dbConnect() {
    
    // MongoDB에 연결되어 있을 경우 또 다시 연결 되는 걸 막는다.
    if (connection) {
        return
    }

    // MongoDB와 Mongoose 연결
    try {
        mongoose.set("strictQuery", false);
        connection = await mongoose.connect(process.env.DB_URL);
        const db = mongoose.connection

        // User 모델과 Post 모델을 미리 로드합니다.
        await import('./models/user');
        await import('./models/post');
        await import('./models/comment');


    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
    }
}

export default dbConnect