const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const { 
    validateRegisterInput, 
    validateLoginInput 
} = require('../../util/validators.js');
const { SECRET_KEY } = require('../../config');
const User = require('../../models/User');

function generateToken(user){
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
        }, SECRET_KEY, { expiresIn: '1h'} 
        );

}
module.exports = {
    Mutation: {
        async login(_, { email, password }){
            const {errors, valid} = validateLoginInput(email, password);

            if(!valid){
                throw new UserInputError('Errors', { errors });
            }

            const user = await User.findOne({ email });

            if(!user){
                errors.general = "User not found";
                throw new UserInputError('User not found', { errors })
            }

            const match = await bcrypt.compare(password, user.password);
            if(!match){
                throw new UserInputError('Invalid credentials', { errors })
            }

            const token = generateToken(user);
            return {
                ...user._doc,
                id: user._id,
                token
            }
        },
        async register(
            _,
             { 
                registerInput: {firstName, lastName, email, password}
            }, 
             ){

                const { valid, errors } = validateRegisterInput(
                    firstName, 
                    lastName, 
                    email,
                     password);
                if(!valid){
                    throw new UserInputError('Errors', { errors });
                }

            const user = await User.findOne({ email });

            if(user){
                throw new UserInputError('Email already exists', {
                    errors: {
                        email: 'This email already exists'
                    }
                });
            }


            password = await bcrypt.hash(password, 12);
            const newUser = new User({
                firstName, 
                lastName,
                email,
                password,
                createdAt: new Date().toISOString()
            });

            const res = await newUser.save();

            const token = generateToken(res)
            return {
                ...res._doc,
                id: res._id,
                token
            }
        }
    }
}