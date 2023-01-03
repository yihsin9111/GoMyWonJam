import TemporaryBillModel from "../models/TemporaryBill";

const sendData = (data, ws) =>{
    ws.send(JSON.stringify(data));
    console.log('send data called in getFunc.');
}

const renewTBill = (lineId, ws) => {
    console.log("renew TBill");
    TemporaryBillModel.find({userLineId: lineId}, async function(err, obj){
        if(obj.length){
            console.log('Bill found. adding item to bill...');
            obj[0].items = []
            await obj[0].save();
            sendData(["bill", obj[0]], ws);

        }
        else{
            console.log('Bill not found ;_;');
        }
    })
}

const AddItemToTBill = (lineId, item ,ws) => {
    console.log('adding item to bill...', item, lineId);
    TemporaryBillModel.find({userLineId: lineId}, async function(err, obj){
        if(obj.length){
            console.log('Bill found. adding item to bill...');
            obj[0].items = [...obj[0].items, item]
            await obj[0].save();
            sendData(["bill", obj[0]], ws);
        }
        else{
            console.log('Bill not found ;_;');
        }
        
    })
}

const getTBill = (lineId, ws) => {
    TemporaryBillModel.find({userLineId: lineId}, async function(err, obj){
        if(obj.length){
            console.log(obj[0]);
            sendData(["bill", obj[0]], ws);
        }
        else{
            const newTBill = await new TemporaryBillModel({
                userLineId: lineId,
                items: []
            });
            newTBill.save();
            console.log(newTBill);
            sendData(["bill", newTBill], ws);
            console.log('Bill not found ;_;');
        }
        
    })
}

const DeleteItemFromTBill = (payload, ws)=>{
    TemporaryBillModel.find({userLineId:payload.lineId}, async function(err, obj){
        if(obj.length){
            obj[0].items.splice(payload.i,1);
            await obj[0].save();
            console.log(obj[0]);
            sendData(["bill",obj[0]],ws);
        }
        else{
            console.log('bill not found. unable to delete item.')
        }
    })
}

export {renewTBill, AddItemToTBill, getTBill, DeleteItemFromTBill}
