import http from 'http'
import express from 'express'
import mongoose from 'mongoose'
import WebSocket from 'ws'
import mongo from './src/mongo'
import wsConnect from './src/wsConnect'

mongo.connect()

const app = express()                               //create app middleware
const server = http.createServer(app)               //use http protocol to create server
const wss = new WebSocket.Server({server})   //
const db = mongoose.connection

db.once('open', ()=> {
    console.log("MongoDB connected!");
    wss.on('connection', (ws)=>{
        //web socket connection logic
        ws.box = ''; //record active ChatBox name
       // wsConnect.initData(ws); //init data in the very beginning
        ws.onmessage = (e)=>{wsConnect.onMessage(wss, ws, e);}
    });
})

const PORT = process.env.PORT || 4000;
server.listen(PORT, ()=>{console.log(`GoMyWonJam listening on port ${PORT}!`)})