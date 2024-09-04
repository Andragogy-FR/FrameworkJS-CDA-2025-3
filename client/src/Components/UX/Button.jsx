import styled from 'styled-components'

const MyButton = styled.button`
    background-color: blue;
    background: url(${props=>props.img})
    color: ${props => props.error ?"red" :"white"};
    font-size: 20px;
`

export default MyButton