import styled from "styled-components";

const StyledContainer = styled.div`
    flex: 1;
    background-color: var(--app-background-color-secondary);
    border-radius: var(--app-padding-default);
    padding: var(--app-padding-default);
`

export function MenuViewList(props: {}){
    return (
        <StyledContainer>
            <div>View List here...</div>
        </StyledContainer>
    )
}