import styled from "styled-components";
import { Carousel } from "react-bootstrap"
import { useContext } from "react";
import { UserContext } from "../../App";
import { BannerCard } from "./BannerCard";
import { ICarouselItem } from "../../interfaces/ICarouselItem";

const StyledContainer = styled.div`
    padding-bottom: var(--app-padding-default);

    & > *{
        max-width: 700px;
        margin: 0 auto;
    }
`;

export function BannerCarousel(){
    const [state, dispatch] = useContext(UserContext);
    const carouselItems: Array<ICarouselItem> = [
        {
            title: "Jackpot!",
            subtitle: state.jackpotAmount > 0 ?(state.jackpotAmount).toLocaleString() + ' TON' : 'Loading...',
            backgroundImageUrl: "banner_2.jpeg"
        },
        {
            title: "Provably Fair",
            subtitle: "Trust Every Play!",
            backgroundImageUrl: "banner_1.jpg"
        }
    ];

    return (
        <StyledContainer>
            <Carousel controls={false} indicators={false} interval={state.carouselInvervalInMs}>
                {carouselItems.map(i => 
                    <Carousel.Item key={i.title}>
                        <BannerCard
                            title={i.title}
                            subtitle={i.subtitle}
                            backgroundImageUrl={i.backgroundImageUrl}></BannerCard>
                    </Carousel.Item>)
                }
            </Carousel>
        </StyledContainer>
    )
}