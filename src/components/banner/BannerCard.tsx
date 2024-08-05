import styled from "styled-components";

const CardOverlay = styled.div`
    border-radius: var(--app-padding-default);
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1));
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: var(--app-padding-default);
`
const PopColorDiv = styled.div`
    color: var(--app-text-color-pop);
    text-shadow: 0px 0px var(--app-padding-default) black;
    font-size: 200%;
`;
const SecondaryColorDiv = styled.div`
    color: white;
    text-shadow: 0px 0px var(--app-padding-default) black;
`;
const CardWithBackground = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 175px;
    border-radius: var(--app-padding-default);
    position: relative;
`;

export function BannerCard(props: {
    title: string,
    subtitle: string,
    backgroundImageUrl: string
}){

    return (
        <CardWithBackground style={{backgroundImage: `url(${props.backgroundImageUrl})`}}>
            <CardOverlay className="CardOverlay">
                <PopColorDiv>{props.title}</PopColorDiv>
                <SecondaryColorDiv>{props.subtitle}</SecondaryColorDiv>
            </CardOverlay>
        </CardWithBackground>
    )
}