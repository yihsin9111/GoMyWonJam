const request = require('request');
const cheerio = require('cheerio');

const sendData = (data, ws) =>{
    ws.send(JSON.stringify(data));
    //console.log('send data called in getFunc.');
}

const loginLine = (query_String, ws) => {
    // let options = qs.stringify({ // POST的參數  用Qs是要轉成form-urlencoded 因為LINE不吃JSON格式
    //     grant_type: 'authorization_code',
    //     code: value.code,
    //     redirect_uri: 'http://localhost:3001/forlogin',
    //     client_id: '1657771320',
    //     client_secret: '87e9ecd48401b88aa9feab300724ea3a'
    //   })
 
    // let result

    // console.log("options: ", options);

    // await axios.post('https://api.line.me/oauth2/v2.1/token', options, { headers: { 'Content-Type': 'application/x-www-form-urlencoded'}}).then((res) => {
    //     console.log("res: ", res);
    //     if(res){
    //         result = res.data.id_token;
    //         console.log("result: ", result)
    //         const decode = jwtDecode(result);
    //         console.log("decode: ", decode);
    //         const sub = decode.sub;
    //         const name = decode.name;
    //         GetUserData(sub);
    //         const ifM=checkManager(name, sub);
    //         getTBill(sub);
    //         setIflog(true);
            
    //     }
    //   })
  //console.log(city)
  var options = {
    url: 'https://api.line.me/oauth2/v2.1/token',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    qs: {
        s: query_String
    }
  }


    //console.log(stores)
    let a =[]
    stores.map((item, index)=>{
        if(index!=0){
            a[index-1] = {
                name: item.id+"\t"+item.store+"門市\t"+item.address,
                id: item.id}
        }
    })
    //stores.shift()
    // return(stores)
    sendData(["GotStores", a], ws);
}

export { getStores };


