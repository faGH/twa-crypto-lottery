import styled from "styled-components";
import { Carousel } from "react-bootstrap"
import { BannerCard } from "./BannerCard"

const StyledContainer = styled.div`
    padding-bottom: var(--app-padding-default);
`;
const potSizeTon: string = (7594280).toLocaleString('en-US') + ' TON';

export function BannerCarousel(props: {}){
    return (
        <StyledContainer>
            <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                    <BannerCard
                        title="Jackpot!"
                        subtitle={potSizeTon}
                        backgroundImageUrl="banner_2.jpeg"></BannerCard>
                </Carousel.Item>
                <Carousel.Item>
                    <BannerCard
                        title="Provably Fair"
                        subtitle="Trust every play!"
                        backgroundImageUrl="banner_1.jpg"></BannerCard>
                </Carousel.Item>
            </Carousel>
        </StyledContainer>
    )
}