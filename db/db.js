import mongoose from "mongoose";


function connect() {
    mongoose.connect("mongodb+srv://romeo:mongodbchat@cluster0.u5p49.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch(err => {
            console.log(err);
        })
}

export default connect;