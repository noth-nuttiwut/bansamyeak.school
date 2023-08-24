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
        title: "ข่าวประชาสัมพันธ์",
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
      }
    ],
    section4: [
      {
        code: "O10",
        title: "แผนดำเนินการประจำปี",
        goto: "/ITA/O10"
      },
      {
        code: "O11",
        title: "รายงานการกำกับติดตาม การดำเนินงาน ประจำปีรอบ 6 เดือน",
        goto: "/ITA/O11"
      },
      {
        code: "O12",
        title: "รายงานผลการดำเนินงานประจำปี",
        goto: "/ITA/O12"
      }
    ],
    section5: [
      {
        code: "O13",
        title: "คู่มือหรือมาตราฐานการปฏิบัติงาน",
        goto: "/ITA/O13"
      }
    ],
    section6: [
      {
        code: "O14",
        title: "คู่มือหรือมาตราฐานการให้บริการ",
        goto: "/ITA/O14"
      },
      {
        code: "O15",
        title: "ข้อมูลเชิงสถิติการให้บริการ",
        goto: "/ITA/O15"
      },
      {
        code: "O16",
        title: "รายงานผลการสำรวจความพึงพอใจการให้บริการ",
        goto: "/ITA/O16"
      },
      {
        code: "O17",
        title: "E-Service",
        goto: "/ITA/O17"
      }
    ],
    section7: [
      {
        code: "O18",
        title: "แผนการใช้จ่ายงบประมาณประจำปี",
        goto: "/ITA/O18"
      },
      {
        code: "O19",
        title: "รายงานการกับกำติดตามการใช้จ่ายงบประมาณรอบ 6 เดือน",
        goto: "/ITA/O19"
      },
      {
        code: "O20",
        title: "รายงานผลการใช้จ่ายงบประมาณประจำปี",
        goto: "/ITA/O20"
      }
    ],
    section8: [
      {
        code: "O21",
        title: "แผนการจัดซื้อจัดจ้างหรือแผนการจัดหาพัสดุ",
        goto: "/ITA/O21"
      },
      {
        code: "O22",
        title: "ประกาศต่างๆ เกี่ยวกับการจัดซื้อจัดจ้างหรือการจัดหาพัสดุ",
        goto: "/ITA/O22"
      },
      {
        code: "O23",
        title: "สรุปผลการจัดซื้อจัดจ้างหรือการจัดหาพัสดุรายเดือน",
        goto: "/ITA/O23"
      },
      {
        code: "O24",
        title: "รายงานผลการจัดซื้อจัดจ้างหรือการจัดหาพัสดุประจำปี",
        goto: "/ITA/O24"
      }
    ]

  }



  return (
    <div className="flex flex-col items-center min-h-fit gap-4 bg-gradient-to-b from-orange-100 to-orange-50">
      <ITABanner title="แบบตรวจการเปิดเผยข้อมูลสาธารณะ (Open Data Integrity and Transparency Assessment: OIT)" />


      {/* section 1 : ข้อมูลพื้นฐาน */}
      <SectionMenu items={sectionItems.section1} sectionName="ข้อมูลพื้นฐาน" />

      {/* section 2 : การประชาสัมพันธ์ */}
      <SectionMenu items={sectionItems.section2} sectionName="การประชาสัมพันธ์" bgGradient="bg-gradient-to-r from-blue-700 to-cyan-500" />

      {/* section 3 : การปฏิสัมพันธ์ข้อมูล */}
      <SectionMenu items={sectionItems.section3} sectionName="การปฏิสัมพันธ์ข้อมูล" bgGradient="bg-gradient-to-r from-indigo-500 to-purple-500" />

      {/* section 4 : การดำเนินงาน */}
      <SectionMenu items={sectionItems.section4} sectionName="การดำเนินงาน" bgGradient="bg-gradient-to-r from-pink-700 to-red-400" />

      {/* section 5 : การปฏิบัติงาน */}
      <SectionMenu items={sectionItems.section5} sectionName="การปฏิบัติงาน" />

      {/* section 6 : การให้บริการ */}
      <SectionMenu items={sectionItems.section6} sectionName="การให้บริการ" bgGradient="bg-gradient-to-r from-orange-700 to-yellow-500" />

      {/* section 7 : แผนการใช้จ่ายงบประมาณประจำปี */}
      <SectionMenu items={sectionItems.section7} sectionName="แผนการใช้จ่ายงบประมาณประจำปี" bgGradient="bg-gradient-to-r from-emerald-500 to-cyan-600" />
      
      {/* section 8 : การจัดซื้อจัดจ้างหรือการจัดหาพัสดุ */}
      <SectionMenu items={sectionItems.section8} sectionName="การจัดซื้อจัดจ้างหรือการจัดหาพัสดุ" bgGradient="bg-gradient-to-r from-purple-600 to-pink-400" />

    </div>
  )
}
