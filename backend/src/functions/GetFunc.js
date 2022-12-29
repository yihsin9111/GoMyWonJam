import UserModel from '../models/User'

const AddUser = (name, address) => {
    UserModel.find({name:name}, async function(err, obj){
        if(obj.length){
            console.log('user name already taken.');
        }
        else{
            console.log('registering new user...');
            await new UserModel({name:name, address:address}).save();
        }
    })
}

export {AddUser}