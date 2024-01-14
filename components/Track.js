import React from 'react'
import styled from 'styled-components';

const StyledTrack=styled.div`

transition: transform 300ms cubic-bezier(0.42,0,0.58,1) 0s;
 transform: translate3d(${props => (props.current) ? `${-90}vw` : '0vw'}, 0, 0);

 @media (max-width: 767px) {  
transition: transform 300ms cubic-bezier(0.42,0,0.58,1) 0s;

transform: translate3d(${(p) => 65 * -p.current}vw,0,0);

  }
`;







const Track=({current,children})=>
 {

  return <StyledTrack current={current}>{children}</StyledTrack> 
}
export default Track

