import styled from "styled-components";
import { Carousel } from "react-bootstrap"
import { useContext } from "react";
import { UserContext } from "../../App";
import { BannerCard } from "./BannerCard";

const StyledContainer = styled.div`
    padding-bottom: var(--app-padding-default);
`;

export function BannerCarousel(){
    const [state, dispatch] = useContext(UserContext);

    return (
        <StyledContainer>
            <Carousel controls={false} indicators={false} interval={state.carouselInvervalInMs}>
                {state.carouselItems.map(i => 
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