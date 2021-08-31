import React from 'react';
import { useEffect } from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import listaction from '../store/listactions';
import quizData from "../data/quiz_QA.json";
import { useState } from 'react';
import Reload from "./reloadSection";

function QuizSection(props)
{
    const[count,setCount]=useState(0);
   const[option1,setOption1]=useState(false);
   const[option2,setOption2]=useState(false);
   const[option3,setOption3]=useState(false);
   const[option4,setOption4]=useState(false);
   const[option5,setOption5]=useState(false);

   const[obj,setObj]=useState(quizData);
   const [prevData,setPrevData]=useState();

    const {add}=props
    useEffect(()=>{
     let previousData = JSON.parse(JSON.stringify(obj))

       add(previousData);
       setPrevData(previousData);
     
      
    },[add,obj])

    function handle()
    {
        setObj(prevData)
        setOption1(false);
        setOption2(false);
        setOption3(false);
        setOption4(false);
        setOption5(false);
        setCount(0);
        props.add(prevData)
       
      


    }
  
    function handleSelection(e)
    {
       
         let countofRightAns=count;
         const selectedOption=parseInt(e.target.innerText);
         const rightAns=Object.values(props?.store_data?.answers.filter(options=>Object.keys(options)[0]===e.target.name)[0])[0];
         obj.options[e.target.name-1][e.target.name]=[selectedOption];
         props.add(obj);
        

    

        if(selectedOption===rightAns)
          {
            if(option1===false||option2===false||option3===false||option4===false||option5===false)
            {
             countofRightAns=countofRightAns+1;
           
             setCount(countofRightAns);
            

            }


          }
       
        if(e.target.name==='1')
        {
      
           setOption1(true);
        }
        else if(e.target.name==='2'){
            setOption2(true);
        }
        else if(e.target.name==='3'){
            setOption3(true);
        }
        else if(e.target.name==='4'){
            setOption4(true);
        }
        else {
            setOption5(true);
        }

        
      
        
      
         
    }
    return(
          <div className="quizapp">
              <div className="heading_section">
                  <h3>Quiz App</h3>
                  <Button>Shuffle Questions</Button>
              </div>
              <div className="QA_section">

              {(option1===true&&option2===true&&option3===true&&option4===true&&option5===true)?
                         <Reload count={count} handle={handle}/>:
                    
                 
               props?.store_data?.questions?.map((questions)=>
                  <div>
                  <hr></hr>
                  <div className="quizsection">

                     
                    
                    

                       <p>{Object.values(questions)[0]}</p> 
                   
                      <div className="options">
                      { 
                      props?.store_data?.options.map((options)=>(Object.values(options)[0]).map((val,index)=>(Object.keys(questions)[0]===Object.keys(options)[0])&&
                        
                       <Button variant="warning" label={Object.values(val)[0]} name={Object.keys(questions)[0]} onClick={handleSelection} key={index}>{val}</Button> ))}

                      

                      
                    </div>
                        
                  </div>
                  </div>) }  
                 
                  

                 
              </div>
          </div>

    )
}
const mapStateToProps = state => {
     const store_data=state?.Data?.data
    return {store_data};
};

const mapDispatchToProps ={
    add: listaction.addAction,
    select:listaction.selectAction
   
};
export default connect(mapStateToProps, mapDispatchToProps)(QuizSection);