
'use client'

import { useState } from 'react'
import Chatbot from 'react-chatbot-kit'
import config from '@/libs/config'
import MessageParser from '@/libs/MessageParser'
import ActionProvider from '@/libs/ActionProvider'
import { BiSolidBot } from 'react-icons/bi';

export default function ChatbotButton() {
    const [show, setShow] = useState(false)
    return (
        <div className='flex flex-col justify-end gap-4'>
            {
                show ? <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                /> : <></>
            }
            <button className="btn btn-circle bg-blue-700 w-16 h-16 right-0 text-white" onClick={() => setShow(!show)}>
                <h1><BiSolidBot /> </h1>
            </button>
        </div>
    )
}