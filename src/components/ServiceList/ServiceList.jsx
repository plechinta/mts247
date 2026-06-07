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



function ServiceList() {
    const serviceData = [
                        {title: 'installation service', 
                        desc: 'We come to you and install your tires on the spot — quickly and conveniently. No waiting lines, no visits to the service center. Our mobile team ensures safe and professional installation wherever you are.', 
                        pic: pic1, 
                        },
                        {title: 'Repair Services',
                        desc: 'Got a flat or a slow leak? We handle puncture repairs directly at your location. With professional sealing and quick response, you’ll be back on the road in no time.', 
                        pic: pic2, 
                        },
                        {title: 'Buy tires from us', 
                        desc: 'Switching between summer and winter tires has never been easier.Our team deliver or make changes your wheels on-site, checks pressure, and ensures everything is balanced for safe driving.', 
                        pic: pic3, 
                        },
                        {title: 'Rim Repair Service', 
                        desc: 'Damaged rims can affect both safety and comfort. We provide on-site rim repair and straightening services, restoring your wheels to proper condition without the need for a workshop visit.', 
                        pic: pic4, 
                        },
                        {title: 'DIAGNOSTICS & ERROR RESET', 
                        desc: 'Modern cars rely heavily on electronics. We provide full on-site computer diagnostics, error code scanning, and error reset (check-engine lights, AdBlue issues, electronic systems). Our service helps detect problems early and restore your car’s performance without a garage visit.', 
                        pic: pic5, 
                        },
                        {title: 'Help with a flat battery', 
                        desc: 'Car won’t start? We provide fast help with flat batteries — jump-start, charging, or complete replacement on the spot. Get back on the road without delay.', 
                        pic: pic6, 
                        },
                        {title: 'OIL & FILTER CHANGE', 
                        desc: 'Keep your car running smoothly with on-site oil and filter replacement. Our mobile service helps you maintain your engine without ever visiting a garage.', 
                        pic: pic7, 
                        },
                        {title: 'WRONG FUEL SERVICE', 
                        desc: 'Put the wrong fuel in your car? Don’t start the engine! We provide quick and safe fuel drain service right at your location. Our technicians will remove the contaminated fuel, clean the system, and refill it with the correct one — helping you get back on the road fast.', 
                        pic: pic8, 
                        },
                        {title: 'PRE -PURCHASE INSPECTION', 
                        desc: 'Buying a used car? We provide detailed inspections before purchase — checking tires, brakes, diagnostics, and overall condition. Avoid hidden problems and make smarter decisions.', 
                        pic: pic9, 
                        },
                        {title: 'TOWING & ROADSIDE assistance', 
                        desc: 'When your car can’t go any further, we’ll take care of it. Our towing service provides safe and reliable vehicle transport anytime, anywhere in Belgium. Whether it’s a breakdown, accident, or major technical issue, we’ll get your car to the right place quickly and stress-free.', 
                        pic: pic10, 
                        },
                        ]
    return (
        <div className="custom__container">
            {serviceData.map(item => (
                <ServiceItemList key={item.title} title={item.title} desc={item.desc} pic={item.pic}/>
            ))}
        </div>

    )
}

export default ServiceList;