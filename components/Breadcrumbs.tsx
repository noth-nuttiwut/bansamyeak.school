"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

const Breadcrumbs = () => {
    const pathname = usePathname()

    const paths = pathname.split("/")

    const ITAitems = [
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
        {
            code: "O7",
            title: "สารบ้านสามแยก",
            goto: "/ITA/O7"
        },
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
        },
        {
            code: "O14",
            title: "คู่มือหรือมาตรฐานการปฏิบัติงาน",
            goto: "/ITA/O14"
        },
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
        },
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
        },
        {
            code: "O23",
            title: "นโยบายหรือแผนการบริหารทรัพยากรบุคคล",
            goto: "/ITA/O23"
        },
        {
            code: "O24",
            title: "การดำเนินการตามนโยบายหรือแผนการบริหารทรัพยากรบุคคล",
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
        },
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
        },
        {
            code: "O30",
            title: "การเปิดโอกาสให้เกิดการมีส่วนร่วม",
            goto: "/ITA/O30"
        },
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
        },

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

    const pageItmes = [
        {
            th: "งานวิชาการ",
            en: "academic"
        },
        {
            th: "ทำเนียบบุคลากร",
            en: "staff"
        },
        {
            th: "งานงบประมาณ",
            en: "budget"
        },
        {
            th: "งานบุคคล",
            en: "human"
        },
        {
            th: "งานบริหารทั่วไป",
            en: "general-management"
        },
        {
            th: "รายชื่อคณะผู้บริหาร",
            en: "board-of-directors"
        },
        {
            th: "ภาพกิจกรรม",
            en: "gallery"
        },
        {
            th: "ประวัติโรงเรียน",
            en: "history"
        },
        {
            th: "ตราสัญลักษณ์",
            en: "emblem"
        },
        {
            th: "ปรัชญาโรงเรียน",
            en: "philosophy"
        },
        {
            th: "วิสัยทัศน์และพันธกิจ",
            en: "vision-mission"
        }

        

        
    ]

    return (
        <div className="text-sm breadcrumbs">
            <ul>
                {
                    paths.map((p, i) => {
                        const pathname = decodeURI(p)
                        const isOUrl = pathname.startsWith("O")
                        const isTranslate = pageItmes.filter(el => el.en == pathname).length > 0
                        
                        const displayName = isOUrl ? `${pathname} ${ITAitems.filter(el => el.code == pathname)[0]?.title}` : isTranslate ? pageItmes.filter(el => el.en == pathname)[0]?.th :  pathname
                        return <li key={i + 999}><Link href={
                            i == 0 ?
                                "/" :
                                isOUrl ?
                                    `/ITA/${pathname}`
                                    : `/${pathname}`
                        }>

                            {
                                i == 0 ? "หน้าแรก" : isOUrl || i > 2 ?
                                    <p className="w-fit xl:w-fit md:w-fit xs:w-44 xs:truncate">
                                        {
                                            displayName ?? ""
                                        }
                                    </p>
                                : displayName ?? ""
                            }

                            </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Breadcrumbs