import PortfolioItem from "../PortfolioItem/PortfolioItem";
import "./PortfolioList.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import portfolio_1 from "../../assets/Image/our_portfolio/1.png"
import portfolio_2 from "../../assets/Image/our_portfolio/2.png"
import portfolio_3 from "../../assets/Image/our_portfolio/3.png"
import portfolio_4 from "../../assets/Image/our_portfolio/4.png"
import portfolio_5 from "../../assets/Image/our_portfolio/5.png"
import portfolio_6 from "../../assets/Image/our_portfolio/6.png"

// Функция для разбивки массива на части (чанки)
// array - массив с твоими услугами, size - по сколько штук выводить на одном слайде
const chunkArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
        chunked.push(array.slice(i, i + size));
    }
    return chunked;
};

function PortfolioList() {
    const items = [
        { title: 'TIRE REPLACEMENT', pic: portfolio_1 },
        { title: 'TIRE REPAIR', pic: portfolio_2 },
        { title: 'VALVE STEM CHANGE', pic: portfolio_3 },
        { title: 'SEASONAL CHANGE', pic: portfolio_4 },
        { title: 'FLEET SERVICE', pic: portfolio_5 },
        { title: 'BRAKE PADS CHANGE', pic: portfolio_6 },
        // Можешь спокойно добавлять сюда новые объекты, код сам раскидает их по новым слайдам!
    ];

    // Разбиваем массив на группы по 6 элементов для каждого слайда
    const groupedItems = chunkArray(items, 6);

    return(
        <div className="portfolioList__container">
            <div className="custom__container">
                <span className="gs-text__h2">
                    Our <span style={{color: "#FFBC00"}}>Portfolio</span>
                </span>
                
                <Splide 
                    options={{
                        type: 'loop',
                        arrows: false,
                        pagination: true, // Включил точки внизу, чтобы было видно, что есть еще слайды
                    }}
                >
                    {/* Перебираем группы по 6 штук и создаем для каждой свой SplideSlide */}
                    {groupedItems.map((group, slideIndex) => (
                        <SplideSlide key={slideIndex}>
                            <div className="img-wrapper" style={{ padding: "10px" }}> 
                                {/* Класс g-4 (gutter) добавляет красивые отступы между карточками по вертикали и горизонтали */}
                                <div className="row g-4">
                                    {/* Перебираем элементы внутри группы и выводим сами карточки */}
                                    {group.map((item, itemIndex) => (
                                        <div key={itemIndex} className="col-12 col-md-4">
                                            <PortfolioItem title={item.title} pic={item.pic} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
}

export default PortfolioList;