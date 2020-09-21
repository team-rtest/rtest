import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import assignment from '../models/Course';
export default{
    Query:{
        course: async (parent, {id}, {models: {Course }, me }, info) => {
            return course;
        },
        course: async (parent, {id}, {models: {Course }, me }, info) => {
            const course = await Course.findbyId({_id: id}).exec();
            return course;
        }

    }
}
