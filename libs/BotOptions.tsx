import React from "react";


const BotOptions = () => {
    const options = [
        { text: "ข้อมูลของโรงเรียน", handler: () => { }, id: 1 },
        { text: "ข้อมูลผู้บริหาร", handler: () => { }, id: 2 },
        { text: "ที่อยู่ของโรงเรียน", handler: () => { }, id: 3 },
        { text: "ติดต่อสอบถาม", handler: () => { }, id: 4 },
    ];

    return (
        <div className="flex flex-col gap-2 w-10/12">
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