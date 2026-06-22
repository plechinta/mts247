import "./ServiceList.css"
import ServiceItemList from "../ServiceItemList/ServiceItemList.jsx"
import pic1 from "../../assets/Image/Services/1.jpg"
import pic2 from "../../assets/Image/Services/2.png"
import pic3 from "../../assets/Image/Services/3.png"
import pic4 from "../../assets/Image/Services/4.png"
import pic5 from "../../assets/Image/Services/5.png"
import pic6 from "../../assets/Image/Services/6.png"
import pic7 from "../../assets/Image/Services/7.png"
import pic8 from "../../assets/Image/Services/8.png"
import pic9 from "../../assets/Image/Services/9.png"
import pic10 from "../../assets/Image/Services/10.png"
import { useLang } from "../../context/LangContext.jsx"

const pics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10]

function ServiceList() {
    const { t } = useLang()
    const items = t('serviceList.items')

    return (
        <div className="custom__container">
            {items.map((item, i) => (
                <ServiceItemList key={i} title={item.title} desc={item.desc} pic={pics[i]} />
            ))}
        </div>
    )
}

export default ServiceList;
