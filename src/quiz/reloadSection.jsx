import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import QuizSection from "./quizSection";

function Reload(props)
{
    const[clicked,setClicked]=useState(false)
    function handleTryAgain()
    {
        // return <QuizSection/>
        setClicked(true);
        props.handle();
    }
    return(
        <div className="quizsection">
            <div className="tryagainSection">
              <p>{props.count===0?0:props.count} correct answers</p>
              <Button onClick={handleTryAgain}>Try Again</Button> 
             
           </div>
           {clicked?<QuizSection/>:''}
        </div>
        

    )
}
export default Reload;