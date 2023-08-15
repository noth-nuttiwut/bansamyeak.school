import React from "react";


const BotOptions = () => {
    const options = [
        { text: "Q&A", handler: () => { }, id: 1 },
        { text: "ช่องทางร้องเรียน", handler: () => { }, id: 2 },
    ];

    return (
        <div className="flex flex-col gap-2">
            {
                options.map((option) => (
                    <button
                        className="btn btn-xs btn-primary"
                        key={option.id}
                        onClick={option.handler}
                    >
                        {option.text}
                    </button>
                ))
            }
        </div>
    )

};

export default BotOptions;