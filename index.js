
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('sad')

const Quest = [
    {
    title:'5+5',
    variant:['0','10','5'],
    answer: 1,
  },
    {
      title:'10*10',
      variant:['100','10','1000'],
      answer: 0,
    },
    {
      title:'200 * 0.5',
      variant:['100','10','50'],
      answer: 0,
    },
  ]
  
  
  const Result = ({corrent}) => {
  
    return (
      <div>
        <p>Chisht patasxanner{corrent}/3</p>
      </div>
    );
  };
  const Game = ({question , clickk}) => {
  
    return (
      <div>
    
          <h1>{question.title}</h1>
           {
             question.variant.map((text,index) =>(
              
              <div style={{
                display:'flex'
              }}>
                
                <button onClick={()=> clickk(index)}>{text}</button>
              </div>
             ))
  
             
           }
      </div>
    );
  };
  
  
  
  
  function App() {
    
    const [step,setStep] = React.useState(0)
    const [corrent , setCorrent] = React.useState(0)
    const question = Quest[step]
    function clickk(index){
   
      {
  
        index==question.answer ?(
          setCorrent(corrent+1)
        ) : setCorrent(corrent)
        
      }
      setStep(step+1)
      
  
    }
  
    return (
      <div>
     {
      step != Quest.length ? (
          <Game question={question} clickk={clickk} />
      ) :<Result corrent={corrent} />
     }
            
            
      </div>
    );
  }
  



root.render(

  <div>
    <App/>
  </div>

  
  );
  