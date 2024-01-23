import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

        console.log(`DB host: ${connectionInstance.connection.host}`)
        // app.on("error", (error) => {
        //     console.log("Error: ", error);
        // })
        // app.listen(process.env.PORT, () => {
        //     console.log(`App listening on port ${process.env.PORT}`);
        // })
    } catch (error) {
        console.error("Error: ", error);
    }
}

export default connectDB;