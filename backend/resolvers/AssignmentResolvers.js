import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import assignment from '../models/Assignment';

export default{
    Query:{
        assignment: async (parent, {id}, {models: {Assignments }, me }, info) => {
            return assignment;
        },   
        assignment: async (parent, {id}, {models: {Assignments }, me }, info) => {
            const assignment = await Assignments.findById({_id: id}).exec();
            return assignment;    
        }
    }
}