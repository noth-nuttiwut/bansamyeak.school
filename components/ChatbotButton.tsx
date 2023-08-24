
'use client'

import ChatBot from "@/libs/react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

function customMessage(message: string, url: string) {
    return (
        <div className="chat chat-start left-0">
            <div className="chat-bubble bg-[#EF6C00]">
                <a className='link link-primary' target='_blank' href={url}> คลิกที่ลิงค์นี้...</a>
            </div>
        </div>

    )
}

export default function ChatbotButton() {
    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#fb923c',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#fb923c',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    };
    const botSteps = [
        {
            id: '1',
            message: 'สวัสดี',
            trigger: '2',
        },
        {
            id: '2',
            message: 'มีอะไรให้ฉันช่วยไหม',
            trigger: '3',
        },
        {
            id: '3',
            options: [
                { value: 1, label: 'Q&A', trigger: '4' },
                { value: 2, label: 'ช่องทางร้องเรียน', trigger: '5' },
                { value: 3, label: 'พิมพ์พูดคุย', trigger: '6' },
            ],
            trigger: '6',
            
        },
        {
            id: '4',
            component: customMessage("ไปที่ url นี้", "https://docs.google.com/forms/d/e/1FAIpQLScK8lEpJIA1eps9Qt-p9cEdvxsYerkS5nQcBa6_wGnDSLW9Ig/viewform?fbclid=IwAR1-8MsvyM-Jqi3bzxoLdz7qn21U60dR4r3t5OewaIPpMA0JjgTErv24W7o"),
            trigger: "2",
        },
        {
            id: '5',
            component: (
                customMessage("ไปที่ url นี้", "https://docs.google.com/forms/d/e/1FAIpQLSd6PrtNT2ZN4GmG92yjgtUmKpNqIhWnS66JNRpelyCID_7AKA/viewform?fbclid=IwAR18B7nwkts3HLOAPHcdbgG_6B3_DUSeBAnkr2oceWaUeY1DKuCKv_iji2s")
            ),
            trigger: "2",
        },
        {
            id: '6',
            user: true,
            trigger: "2",

        },
    ]
    return (
        <div className='flex flex-col justify-end gap-4 z-auto'>
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="พูดคุยกับแชตบอท"
                    floating={true}
                    steps={botSteps}
                />
            </ThemeProvider>

        </div>
    )

}