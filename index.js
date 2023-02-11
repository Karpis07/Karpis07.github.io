
const root = ReactDOM.createRoot(document.getElementById('root'));

  
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
        
      </div>
    );
  }
  



root.render(

  <div>
    <App/>
  </div>

  
  );
  