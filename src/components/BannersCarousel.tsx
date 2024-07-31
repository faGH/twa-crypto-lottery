import styled from "styled-components";
import { Carousel } from "react-bootstrap"
import { BannerCard } from "./BannerCard"

const StyledContainer = styled.div`
    padding-bottom: var(--app-padding-default);
`;

export function BannerCarousel(props: {
    items: Array<{
        title: string,
        subtitle: string,
        backgroundImageUrl: string
    }>,
    interval?: number
}){
    return (
        <StyledContainer>
            <Carousel controls={false} indicators={false} interval={props.interval || 5000}>
                {props.items.map(i => 
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