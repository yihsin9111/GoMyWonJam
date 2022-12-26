import {AddUser} from './functions/UserFunc'

//helper functions
const sendData = (data, ws) =>{
    ws.send(JSON.stringify(data));
    console.log('send data called. (in wsConnect.js, line 5)');
}

export default {
    initData: (ws) => {
        console.log('data initialization called.')
    },
    onMessage: async (wss, ws, e) => {
        const [task, payload] = JSON.parse(e.data);
        switch (task) {
            case 'AddUser':{
                const {name, address} = payload; 
                AddUser(name, address);
                break;
            }
        }
    }
}
