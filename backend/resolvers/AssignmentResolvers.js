import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import assignment from '../models/Assignment';

export default{
    Query:{  
        assignment: async (parent, {id}, {models: {Assignments }, me }, info) => {
            const assignment = await Assignments.findById({_id: id}).exec();
            return assignment;    
        }
    },
    Mutator:{
        CreateAssignment: async(parent, assignmentInput, {models : Assignment}, info) =>{
            const assignment = new Assignment(assignmentInput);
            await assignment.save();
            return assignment;
        }
    }
}
