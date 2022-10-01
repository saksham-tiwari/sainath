import React, { useEffect } from 'react'
import './Slider.css';

document.addEventListener("click", e => {
    let Handle
    if (e.target.matches(".Handle")) {
      Handle = e.target
    } else {
      Handle = e.target.closest(".Handle")
    }
    if (Handle != null) onHandleClick(Handle)
  })
  
  const throttleProgressBar = throttle(() => {
    document.querySelectorAll(".progressBar").forEach(calculateProgressBar)
  }, 250)
  window.addEventListener("resize", throttleProgressBar)
  
  
  function calculateProgressBar(progressBar) {
    progressBar.innerHTML = ""
    const slider = progressBar.closest(".Row").querySelector(".slider")
    const itemCount = slider.children.length
    const itemsPerScreen = parseInt(
      getComputedStyle(slider).getPropertyValue("--items-per-screen")
    )
    let sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    )
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen)
  
    if (sliderIndex >= progressBarItemCount) {
      slider.style.setProperty("--slider-index", progressBarItemCount - 1)
      sliderIndex = progressBarItemCount - 1
    }
  
    for (let i = 0; i < progressBarItemCount; i++) {
      const barItem = document.createElement("div")
      barItem.classList.add("progress-item")
      if (i === sliderIndex) {
        barItem.classList.add("active")
      }
      progressBar.append(barItem)
    }
  }
  
  function onHandleClick(Handle) {
    const progressBar = Handle.closest(".Row").querySelector(".progressBar")
    const slider = Handle.closest(".Containerr").querySelector(".slider")
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    )
    const progressBarItemCount = progressBar.children.length
    if (Handle.classList.contains("leftHandle")) {
      if (sliderIndex - 1 < 0) {
        slider.style.setProperty("--slider-index", progressBarItemCount - 1)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[progressBarItemCount - 1].classList.add("active")
      } else {
        slider.style.setProperty("--slider-index", sliderIndex - 1)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[sliderIndex - 1].classList.add("active")
      }
    }
  
    if (Handle.classList.contains("rightHandle")) {
      if (sliderIndex + 1 >= progressBarItemCount) {
        slider.style.setProperty("--slider-index", 0)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[0].classList.add("active")
      } else {
        slider.style.setProperty("--slider-index", sliderIndex + 1)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[sliderIndex + 1].classList.add("active")
      }
    }
  }
  
  function throttle(cb, delay = 1000) {
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false
      } else {
        cb(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunc, delay)
      }
    }
  
    return (...args) => {
      if (shouldWait) {
        waitingArgs = args
        return
      }
  
      cb(...args)
      shouldWait = true
      setTimeout(timeoutFunc, delay)
    }
  }
  
const Slider = () => {

  useEffect(()=>{
    document.querySelectorAll(".progressBar").forEach(calculateProgressBar)
  },[])
  return (
        <div className="Row">
            <div className="Header">
            <h3 className="Title">Title</h3>
            <div className="progressBar"></div>
            </div>
            <div className="Containerr">
            <button className="Handle leftHandle" onClick={onHandleClick}>
                <div className="Text">&#8249;</div>
            </button>
            <div className="slider">
                <img src="https://via.placeholder.com/210/00FF00?text=1" alt="placeholder"/>
                <img src="https://via.placeholder.com/220/00FF00?text=2" alt="placeholder"/>
                <img src="https://via.placeholder.com/230/00FF00?text=3" alt="placeholder"/>
                <img src="https://via.placeholder.com/240/00FF00?text=4" alt="placeholder"/>
                <img src="https://via.placeholder.com/250/00FF00?text=5" alt="placeholder"/>
                <img src="https://via.placeholder.com/260/00FF00?text=6" alt="placeholder"/>
                <img src="https://via.placeholder.com/270/00FF00?text=7" alt="placeholder"/>
                <img src="https://via.placeholder.com/280/00FF00?text=8" alt="placeholder"/>
                <img src="https://via.placeholder.com/250/00FF00?text=9" alt="placeholder"/>
                <img src="https://via.placeholder.com/260/00FF00?text=10" alt="placeholder"/>
                <img src="https://via.placeholder.com/270/00FF00?text=11" alt="placeholder"/>
                <img src="https://via.placeholder.com/280/00FF00?text=12" alt="placeholder"/>
                <img src="https://via.placeholder.com/280/00FF00?text=13" alt="placeholder"/>
                <img src="https://via.placeholder.com/280/00FF00?text=14" alt="placeholder"/>
                <img src="https://via.placeholder.com/280/00FF00?text=15" alt="placeholder"/>
                <img src="https://via.placeholder.com/280/00FF00?text=16" alt="placeholder"/>
                <img src="https://via.placeholder.com/280/00FF00?text=17" alt="placeholder"/>
                <img src="https://via.placeholder.com/280/00FF00?text=18" alt="placeholder"/>
                <img src="https://via.placeholder.com/280/00FF00?text=19" alt="placeholder"/>
                <img src="https://via.placeholder.com/280/00FF00?text=20" alt="placeholder"/>
            </div>
            <button className="Handle rightHandle">
                <div className="Text">&#8250;</div>
            </button>
            </div>
        </div>
  )
}

export default Slider