import { useState } from "react";
import styled from "styled-components";
import dayjs from 'dayjs'

const ListCard = ({ data,onDelete} : any) =>{
    const [isSwiped,setIsSwiped] = useState(false);
    const [startX,setStartX] = useState(0);
    const [translateX,setTranslateX] = useState(0);

    const handleMouseDown = (e:any) =>{
        console.log('handleSwipe');
        setStartX(e.clientX);
        setIsSwiped(true)
    }

    const handleMouseMove = (e:any) =>{
        if(isSwiped){
            console.log('handleSwipe');
            const currentX = e.clientX;
            const diff = currentX - startX;
            console.log(currentX,startX,diff);
            setTranslateX(diff);
        }
    }


    const handleMouseUp = () =>{
        if(isSwiped && translateX < -150){
            onDelete()
        }
        setIsSwiped(false);
    }

    return (
        <CardContainer onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <Title>{data?.title}</Title>
            <TitleSecond>ID:{data?.id}</TitleSecond>
            <Description>{data?.description}</Description>
            <Date>{dayjs(data?.createdAt).format('YYYY-MM-DD hh:mm:ss')}</Date>
            {isSwiped && (
                <DeleteButton onClick={onDelete}>
                    Delete
                </DeleteButton>
            )}
        </CardContainer>
    )
}
export default ListCard;


const CardContainer = styled.div`
    width: 20vw;
    position:relative;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    transition: transform 0.3s;
`;

const Title = styled.h2`
    font-size: 0.8rem;
    margin-bottom: 5px;
`
const TitleSecond = styled.h2`
    font-size: 0.5rem;
    color: #666;
    margin-bottom: 5px;
`

const Description = styled.p`
    font-size:0.5rem;
    color: #666;
    margin-bottom: 5px;
`

const Date = styled.p`
    font-szie 0.75rem;
    color: #999;
`

const DeleteButton = styled.button`
    position: absolute;
    top: 0;
    right : 0px;
    width: 100px;
    height: 100%;
    background-color:red;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    transition: right 0.3s;
`

