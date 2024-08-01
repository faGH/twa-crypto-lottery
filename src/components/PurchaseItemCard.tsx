import styled from "styled-components";

const CardOverlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const PopColorDiv = styled.div`
    color: var(--app-text-color-pop);
    text-shadow: 0px 0px var(--app-padding-default) black;
    font-size: 165%;
`;
const BetButton = styled.button`
    color: white;
    text-shadow: 0px 0px var(--app-padding-default) black;
    border-radius: var(--app-padding-default);
    padding: var(--app-padding-small) var(--app-padding-default);
    background-color: var(--app-text-color-pop);
    margin-top: var(--app-padding-default);
    border: None;
    cursor: pointer;
`;

export function PurchaseItemCard(props: {
    title: string,
    subtitle: string,
    backgroundImageUrl: string
}){
    const CardWithBackground = styled.div`
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('${props.backgroundImageUrl}');
        height: 10rem;
        width: 8rem;
        position: relative;
        margin: var(--app-padding-small);
    `;

    return (
        <CardWithBackground>
            <CardOverlay className="CardOverlay">
                <PopColorDiv>{props.title}</PopColorDiv>
                <BetButton>{props.subtitle}</BetButton>
            </CardOverlay>
        </CardWithBackground>
    )
}