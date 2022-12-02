import styled from 'styled-components';

const Header = styled.p`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-family: 'Heebo', sans-serif;
  font-Weight: ${props => props.weight};
  text-align: ${props => props.textAlign};
  display: ${props => props.display};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
  border-left: ${props => props.borderLeft};
  line-height: ${props=> props.lineHeight};
`;

export function Text({
    size = '1.90rem',
    color = 'black',
    weight = '400',
    text = 'Heading',
    textAlign = 'left',
    display = 'block',
    margin = '0',
    lineHeight = 'inherit',
    overflow = 'visible',
    padding = '0',
    width = 'auto',
    borderLeft = 'inherit',
    ...otherProps
}) {
    return (
        <Header width={width} borderLeft={borderLeft} padding={padding} lineHeight={lineHeight} overflow={overflow} size={size} color={color} weight={weight}
            margin={margin} display={display} textAlign={textAlign} {...otherProps}>
            {text}
        </Header>
    );
}