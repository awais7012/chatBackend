import userModel from '../models/user.model.js';



export const createUser = async ({
    email, password
}) => {

    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    const hashedPassword = await userModel.hashPassword(password);
    const userEmail = await userModel.findOne({email})
    if(userEmail){
        resizeBy.status(401).send("User already registered")
    }
    const user = await userModel.create({
        email,
        password: hashedPassword
    });

    return user;

}

export const getAllUsers = async ({ userId }) => {
    const users = await userModel.find({
        _id: { $ne: userId }
    });
    return users;
}