import {useState, useEffect} from 'react';
const client = new WebSocket('ws://localhost:4000');

const useAdd = () => {

    const sendData =  async(data) =>{
        await client.send(JSON.stringify(data));
        console.log('data send. data:', JSON.stringify(data));
    };

    const AddUser = (name, address)=>{
        sendData(["AddUser",{name:name, address:address}]);
    };

    return {AddUser};
};

export default useAdd;