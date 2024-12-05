import styled from 'styled-components';
import { TypographyType } from '.';


export const StyledTypography = styled.div<Pick<TypographyType, 'color'>>`
    color: ${({theme, color}) => (color ? theme.colors[color] : theme.colors.black)};

    strong {
        text-decoration: underline;
        text-decoration-skip-ink: none;
        text-decoration-color: ${({theme}) => theme.colors.gray};
    }

    &[data-variant='title1']{
        font-size: 26px;
        font-weight: 500;
        line-height: 35px;
        letter-spacing: 0;
        margin: 0;
    }

    &[data-variant='title2'] {
        font-size: 22px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0;
        margin: 0;
    }

    &[data-variant='title3'] {
       font-size: 20px;
       font-weight: 600;
       line-height: 27px;
       letter-spacing: 0;
       margin: 0;
    }

    &[data-variant='body1'] {
        font-size: 16px;
        line-height: 32px;
        font-weight: 300;
        letter-spacing: 0.05em;
    }
`;
