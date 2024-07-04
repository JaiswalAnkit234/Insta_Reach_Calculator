import "./Calculator.css"
import { useState } from "react"


const Calculator = () => {
  const [reachCount,setReachCount]=useState()
  const [impression,setImpression]=useState()
  const [reachPercentage,setReachPercentage]=useState()
  const [impPercentage,setImpPercentage]=useState()

  const [values,setValues]=useState({
    followers:0,
    impressionRate:0
  })

  const handleChange=(e)=>{
  setValues((prev)=>({...prev,[e.target.name]:e.target.value}))
  console.log(values,"values")
  }


      
  const claculate=()=>{
    let follower=values.followers
    let reachrate = values.reachRate
    let impRate = values.impressionRate
    let reachCount = follower*reachrate
    let impCount = follower*impRate
    let reachpercentage = (reachCount/follower)*100
    let imppercentage = (impCount/follower)*100
    setReachCount(reachCount)
    setImpression(impCount)
    setReachPercentage(reachpercentage.toFixed(2))
    setImpPercentage(imppercentage.toFixed(2))
  }




  const print=(event)=>{
    event.preventDefault()
    claculate()
   
  }


  return (
    <div className="calculator-container">
      <form onSubmit={print} className="form-container">
        <span>Followers: <input min={0} type="Number" name="followers" id="followers" value={values.followers} onChange={handleChange} placeholder="Enter no of followers" required/></span>
        <span>Reach rate: <input min={0} type="Number" name="reachRate" id="reachRate" value={values.reachRate} onChange={handleChange} placeholder="(eg.10%)" required/></span>
        <span>Impression rate: <input min={0} type="Float" name="impressionRate" id="impressionRate" value={values.impressionRate} onChange={handleChange} placeholder="(eg.1,2)"required/></span>
        <button type="submit">calculate</button>
      </form>
      <h3>Estimated Reach count : {reachCount}</h3>
      <h3>Estimated Impression count : {impression}</h3>
      <h3>Reach percentage: {reachPercentage} %</h3>
      <h3>Impression percentage: {impPercentage} %</h3>
      <h3></h3>
    </div>
  )
}

export default Calculator
