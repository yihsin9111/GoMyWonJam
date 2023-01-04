import mongoose from 'mongoose'
const Schema = mongoose.Schema

const SequenceListSchema = Schema({
    BillId:String,
    Time:Number,
    Sequence:Array
}) 

const SequenceListModel = mongoose.model('SequenceList', SequenceListSchema)

export default SequenceListModel