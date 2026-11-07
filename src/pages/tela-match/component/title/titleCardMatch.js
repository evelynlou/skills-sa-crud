import { styled } from "styled-components"

/**
 * 
 * @param {{
 * title: string;
 * subTitle: string;
 * subTitleEnphasisWord: string;
 * }} param0 
 */
export default function TitleCardMatch({title, subTitle, subTitleEnphasisWord}) {
    return (
        <StyledTitleContainer>
            <h2>{title}</h2>
            <p>{subTitle} <span>{subTitleEnphasisWord}</span>!</p>
        </StyledTitleContainer>
    )
}

const StyledTitleContainer = styled.div`
    margin-top: 40px;

    h2 {
        margin-bottom: 0;
    }

    p {
        margin-top: 0;
    
        span {
            color: #FF8200;
        }
    }
`