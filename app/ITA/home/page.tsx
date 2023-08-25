import ITABanner from "@/components/ITA/ITABanner"
import SectionMenu from "@/components/ITA/SectionMenu"
export default function Home() {

  const sectionItems = {
    section1: [
      {
        code: "O1",
        title: "โครงสร้าง",
        goto: "/ITA/O1"
      },
      {
        code: "O2",
        title: "ข้อมูลผู้บริหาร",
        goto: "/ITA/O2"
      },
      {
        code: "O3",
        title: "อำนาจหน้าที่",
        goto: "/ITA/O3"
      },
      {
        code: "O4",
        title: "แผนยุทธศาสตร์ หรือแผนพัฒนาสถานศึกษา",
        goto: "/ITA/O4"
      },
      {
        code: "O5",
        title: "ข้อมูลการติดต่อ",
        goto: "/ITA/O5"
      },
      {
        code: "O6",
        title: "กฏหมายที่เกี่ยวข้อง",
        goto: "/ITA/O6"
      },
    ],
    section2: [
      {
        code: "O7",
        title: "สารบ้านสามแยก",
        goto: "/ITA/O7"
      }
    ],
    section3: [
      {
        code: "O8",
        title: "Q&A",
        goto: "/ITA/O8"
      },
      {
        code: "O9",
        title: "Social Network",
        goto: "/ITA/O9"
      },
      {
        code: "O10",
        title: "นโยบายคุ้มครองข้อมูลส่วนบุคคล",
        goto: "/ITA/O10"
      },
    ],
    section4: [
      {
        code: "O11",
        title: "แผนดำเนินงานและการใช้งบประมาณประจำปีการศึกษา",
        goto: "/ITA/O11"
      },
      {
        code: "O12",
        title: "รายงานการกำกับติดตามการดำเนินงานและการใช้งบประมาณประจำปีการศึกษา 2566",
        goto: "/ITA/O12"
      },
      {
        code: "O13",
        title: "รายงานผลการดำเนินงานประจำปีการศึกษา 2565",
        goto: "/ITA/O13"
      }
    ],
    section5: [
      {
        code: "O14",
        title: "คู่มือหรือมาตรฐานการปฏิบัติงาน",
        goto: "/ITA/O14"
      }
    ],
    section6: [
      {
        code: "O15",
        title: "คู่มือหรือมาตราฐานการให้บริการ",
        goto: "/ITA/O15"
      },
      {
        code: "O16",
        title: "ข้อมูลเชิงสถิติการให้บริการ",
        goto: "/ITA/O16"
      },
      {
        code: "O17",
        title: "รายงานผลการสำรวจความพึงพอใจการให้บริการ",
        goto: "/ITA/O17"
      },
      {
        code: "O18",
        title: "E-Service",
        goto: "/ITA/O18"
      }
    ],
    section7: [
      {
        code: "O19",
        title: "แผนการจัดซื้อจัดจ้างหรือแผนการจัดหาพัสดุ",
        goto: "/ITA/O19"
      },
      {
        code: "O20",
        title: "ประกาศต่าง ๆ เกี่ยวกับการจัดซื้อจัดจ้างหรือจัดหาพัสดุ",
        goto: "/ITA/O20"
      },
      {
        code: "O21",
        title: "สรุปผลการจัดซื้อจัดจ้างหรือจัดหาพัสดุรายเดือน",
        goto: "/ITA/O21"
      },
      {
        code: "O22",
        title: "รายงานผลการจัดซื้อจัดจ้างหรือจัดหาพัสดุประจำปี",
        goto: "/ITA/O22"
      }
    ],
    section8: [
      {
        code: "O23",
        title: "นโยบายหรือแผนการบริหารทรัพยากรบุคคล",
        goto: "/ITA/O23"
      },
      {
        code: "O24",
        title: "การดำเนินการตามนโบายหรือแผนการบริหารทรัพยากรบุคคล",
        goto: "/ITA/O24"
      },
      {
        code: "O25",
        title: "หลักเกณฑ์การบริหารและพัฒนาทรัพยากรบุคคล",
        goto: "/ITA/O25"
      },
      {
        code: "O26",
        title: "รายงานผลการบริหารและพัฒนาทรัพยากรบุคคลประจำปี",
        goto: "/ITA/O26"
      }
    ],
    section9: [
      {
        code: "O27",
        title: "แนวปฏิบัติการจัดการเรื่องร้องเรียนการทุจริตและประพฤติมิชอบ",
        goto: "/ITA/O27"
      },
      {
        code: "O28",
        title: "ช่องทางแจ้งเรื่องร้องเรียนการทุจริตและประพฤติมิชอบ",
        goto: "/ITA/O28"
      },
      {
        code: "O29",
        title: "ข้อมูลเชิงสถิติเรื่องร้องเรียนการทุจริตและประพฤติมิชอบ",
        goto: "/ITA/O29"
      }
    ],
    section10: [
      {
        code: "O30",
        title: "การเปิดโอกาสให้เกิดการมีส่วนร่วม",
        goto: "/ITA/O30"
      }
    ],
    section11: [
      {
        code: "O31",
        title: "ประกาศเจตนารมณ์นโยบาย No Gift Policy จากการปฏิบัติหน้าที่",
        goto: "/ITA/O31"
      },
      {
        code: "O32",
        title: "การสร้างวัฒนธรรม No Gift Policy",
        goto: "/ITA/O32"
      },
      {
        code: "O33",
        title: "รายงานผลตามนโยบาย No Gift Policy",
        goto: "/ITA/O33"
      },
      {
        code: "O34",
        title: "การประเมินความเสี่ยงการทุจริตและประพฤติมิชอบ ประจำปี",
        goto: "/ITA/O34"
      },
      {
        code: "O35",
        title: "การดำเนินการเพื่อจัดการความเสี่ยงการทุจริตและประพฤติมิชอบ",
        goto: "/ITA/O35"
      },
      {
        code: "O36",
        title: "แผนปฏิบัติการป้องกันการทุจริต",
        goto: "/ITA/O36"
      },
      {
        code: "O37",
        title: "รายงานการกำกับติดตามการดำเนินการป้องกันการทุจริตประจำปี รอบ 6 เดือน",
        goto: "/ITA/O37"
      },
      {
        code: "O38",
        title: "รายงานผลการดำเนินการป้องกันการทุจริต ประจำปี",
        goto: "/ITA/O38"
      }
    ],
    section12: [
      {
        code: "O39",
        title: "ประมวลจริยธรรมสำหรับเจ้าหน้าที่ของรัฐ",
        goto: "/ITA/O39"
      },
      {
        code: "O40",
        title: "การขับเคลื่อนจริยธรรม",
        goto: "/ITA/O40"
      },
      {
        code: "O41",
        title: "การประเมินจริยธรรมเจ้าหน้าที่ของรัฐ",
        goto: "/ITA/O41"
      },
      {
        code: "O42",
        title: "มาตรการส่งเสริมคุณธรรมและความโปร่งใสภายในหน่วยงาน",
        goto: "/ITA/O42"
      },
      {
        code: "O43",
        title: "การดำเนินการตามมาตรการส่งเสริมคุณธรรมและความโปร่งใสภายในหน่วยงาน",
        goto: "/ITA/O43"
      },
    ]


  }



  return (
    <div className="flex flex-col items-center min-h-fit gap-4 bg-gradient-to-b from-orange-100 to-orange-50">
      <ITABanner title="แบบตรวจการเปิดเผยข้อมูลสาธารณะ (Open Data Integrity and Transparency Assessment: OIT)" />

      {/* section 1 : ข้อมูลพื้นฐาน */}
      <SectionMenu items={sectionItems.section1} sectionName="ข้อมูลพื้นฐาน" bgGradient="bg-gradient-to-r from-rose-700 to-orange-500" />

      {/* section 2 : การประชาสัมพันธ์ */}
      <SectionMenu items={sectionItems.section2} sectionName="การประชาสัมพันธ์" bgGradient="bg-gradient-to-r from-orange-700 to-yellow-500" />

      {/* section 3 : การปฏิสัมพันธ์ข้อมูล */}
      <SectionMenu items={sectionItems.section3} sectionName="การปฏิสัมพันธ์ข้อมูล" bgGradient="bg-gradient-to-r from-rose-600 to-orange-400" />

      {/* section 4 : การดำเนินงาน */}
      <SectionMenu items={sectionItems.section4} sectionName="การดำเนินงาน" bgGradient="bg-gradient-to-r from-purple-600 to-pink-600" />

      {/* section 5 : การปฏิบัติงาน */}
      <SectionMenu items={sectionItems.section5} sectionName="การปฏิบัติงาน" bgGradient="bg-gradient-to-r from-purple-600 to-pink-600" />

      {/* section 6 : การให้บริการ */}
      <SectionMenu items={sectionItems.section6} sectionName="การให้บริการ" bgGradient="bg-gradient-to-r from-purple-600 to-pink-600" />

      {/* section 7 : การจัดซื้อจัดจ้าง */}
      <SectionMenu items={sectionItems.section7} sectionName="การจัดซื้อจัดจ้าง" bgGradient="bg-gradient-to-r from-teal-700 to-green-500" />

      {/* section 8 : การบริหารและพัฒนาทรัพยากรบุคคล */}
      <SectionMenu items={sectionItems.section8} sectionName="การบริหารและพัฒนาทรัพยากรบุคคล" bgGradient="bg-gradient-to-r from-rose-600 to-pink-400" />

      {/* section 9 : การส่งเสริมความโปร่งใส */}
      <SectionMenu items={sectionItems.section9} sectionName="การส่งเสริมความโปร่งใส" bgGradient="bg-gradient-to-r from-sky-800 to-teal-500" />

      {/* section 10 : การเปิดโอกาสให้เกิดการมีส่วนร่วม */}
      <SectionMenu items={sectionItems.section10} sectionName="การเปิดโอกาสให้เกิดการมีส่วนร่วม" bgGradient="bg-gradient-to-r from-amber-600 to-yellow-500" />

      {/* section 11 : การดำเนินการเพื่อป้องกันการทุจริต */}
      <SectionMenu items={sectionItems.section11} sectionName="การดำเนินการเพื่อป้องกันการทุจริต" bgGradient="bg-gradient-to-r from-amber-600 to-yellow-500" />

      {/* section 12 : มาตรการส่งเสริมคุณธรรมและความโปร่งใส */}
      <SectionMenu items={sectionItems.section12} sectionName="มาตรการส่งเสริมคุณธรรมและความโปร่งใส" bgGradient="bg-gradient-to-r from-amber-600 to-yellow-500" />


    </div>
  )
}
