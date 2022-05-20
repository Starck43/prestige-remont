import styled, { keyframes } from "styled-components"

export const AnimationText = ({children, animationTime = 75}) => {

  if (typeof children === 'string') {
    let arr = children.replace(/ /g, "\u00a0").split("")
    return (
      <Wrapper counter={arr.length} time={animationTime}>
        {arr.map((item, i) => (
          <span
            key={item + i}
            style={{ animationDelay: `${animationTime * i}ms` }}
          >
            {item}
          </span>
        ))}
      </Wrapper>
    )
  } else return children
}

const animation = keyframes`
	0% {
		opacity: 0;
        transform: translateY(4vh);
	}
	100% {
		opacity: 1;
		transform: translateY(0px);
	}
`

const Wrapper = styled.span`
  display: inline-block;

  span {
    opacity: 0;
    display: inline-block;
    animation-name: ${animation};
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-fill-mode: forwards;
    // animation-iteration-count: infinite;
    animation-duration: ${props => `${props.counter * props.time}ms`}
  }
`
