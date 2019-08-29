import mongoose from "mongoose";
import '../models/pin';
//import config from '../../etc/config.json'

const Pin = mongoose.model('Pin');

export function makeConnection()
{
    mongoose.connect('mongodb://Deuse:r00tt00r@ds213968.mlab.com:13968/pin-app', 
    {useNewUrlParser: true }, (err) => {
        if(err) {
            console.log('Some problem with the connection ' +err);
        } else {
            console.log('The Mongoose connection is ready');
        }
    })
}

export async function getPins()
{
    return await Pin.find();
}

export async function createPin(data)
{
    const pin = new Pin(
    {
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return await pin.save();
}

export async function deletePin(id)
{
    return await Pin.findById(id).deleteOne();
}