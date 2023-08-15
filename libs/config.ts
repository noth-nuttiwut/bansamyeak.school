import { createChatBotMessage } from 'react-chatbot-kit';
import BotOptions from './BotOptions';

const config = {
    botName: "สิริกัญญา",
    initialMessages: [
        createChatBotMessage("สวัสดี มีอะไรให้ฉันช่วยไหม", {
            widget: "BotOptionsWidget",
        })
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
        },
        chatButton: {
            backgroundColor: "#376B7E",
        },
    },
    widgets: [
        {
            widgetName: "BotOptionsWidget",
            widgetFunc: () => BotOptions,
        },
    ],
};

export default config;