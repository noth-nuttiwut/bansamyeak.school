import { createChatBotMessage } from 'react-chatbot-kit';
import BotOptions from './BotOptions';

const config = {
    initialMessages: [
        createChatBotMessage("สวัสดี มีอะไรให้ฉันช่วยไหม", {
          widget: "BOptions",
        }),
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
            widgetName: "BOptions",
            widgetFunc: (props) => <BotOptions {...props} />
        },
        {
            widgetName: "Coptions",
            widgetFunc: (props) => <Options {...props} />,
          },
    ],
};

export default config;