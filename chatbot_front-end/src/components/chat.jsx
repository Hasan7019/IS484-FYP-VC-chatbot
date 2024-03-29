"use client";
import React, { useState } from 'react';

const ChatBar = ({ handleNewChat, sendMsg }) => {
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSend = () => {
        sendMsg(message);
        setMessage('');
    }

    return (
        <div className="fixed bottom-0 left-0 m-12 w-full">
            <button className="left-0 bg-[#7dd3fc] rounded-lg px-4 py-1 mx-2" onClick={handleNewChat}>
                New Chat
            </button>
            <input id="chat" type="text" placeholder="Ask me anything..." className='bg-[#e5e5e5] rounded-lg px-4 py-1 w-3/5' value={message} onChange={handleChange} />
            <button className="mx-2 right-5 bg-[#7dd3fc] rounded-lg px-4 py-1" onClick={handleSend}>Send</button>
        </div>
    );
}

const handleNewChat = async () => {
    // Add logic for creating a new chat here
    console.log('Creating a new chat...');
    const sendMsgElements = document.getElementsByClassName('send-msg');
    
    // Remove all send messages
    while (sendMsgElements.length > 0) {
        sendMsgElements[0].remove();
    }
}

const WlcMsg = () => {
    return (
        <div id="allmsg" className='grid grid-cols-2 gap-y-4 mx-2'>
            <div className="bg-[#dcc1ff] rounded-lg px-2 py-1 col-start-1 col-end-2">
                <h1>Hi, how may I help you today?</h1>
            </div>
            <div className="">
            </div>
        </div>
    );
}

const sendMsg = (msg) => {
    console.log('Sending message:', msg);
    // Add logic for sending the message here
    document.getElementById('allmsg').innerHTML +=
        `<div className="">
        </div>
        <div class="send-msg bg-[#e7e5e4] rounded-lg px-2 py-1 col-end-3 col-span-1 text-wrap">
            <h1>${msg}</h1>
        </div>`
}

// Create a upload document button component
const UploadDocument = () => {
    return (
        <div className="fixed bottom-0 left-0 m-12 w-full">
            <input id="upload" type="file" />
            <button className="mx-2 right-5 bg-[#7dd3fc] rounded-lg px-4 py-1" onClick={handleSend}>Send</button>
        </div>
    );
}

const NewChat = () => {
    return (
        <>
            <div>
            <WlcMsg />
            <ChatBar handleNewChat={handleNewChat} sendMsg={sendMsg} />
            </div>
        </>
    );
}

export default NewChat;
