import React from 'react'
import "./style.scss"

function Services() {
  return (
    <>
    <div className="servicesSection">
        <div className="services">
              <div className="header">
            <h2>OUR FEATURED SERVICES</h2>
            <p>Large online bookstores offer used books for sale, too. Individuals wishing to sell their used Books</p>
        </div>
        <div className="cards">
            <div className="card">
                <div className="icon">
                <i className="fa-light fa-book-circle-arrow-up"></i>
                </div>
                <h2>1.START YOUR DOWNLOAD</h2>
                <p>Welcome! It's time to embark on a new book adventure. Choose from our thousands of books in the library and start your reading journey.</p>
            </div>
            <div className="card">
                <div className="icon">
                <i className="fa-light fa-lightbulb-on"></i>
                </div>
                <h2>2.DEVELOP AN IDEA</h2>
                <p>Let your imagination soar as you explore new possibilities and concepts. Dive into the realm of creativity and innovation, where every idea has the potential to change the world.</p>
            </div>
            <div className="card">
                <div className="icon">
                <i className="fa-light fa-user"></i>
                </div>
                <h2>3.ENGAGE NEW USERS</h2>
                <p>We're here to captivate and involve new users! Explore the rich content in our library and join the enchanting world of books. We welcome new readers and are excited to explore together. </p>
            </div>
            <div className="card">
                <div className="icon">
                <i className="fa-light fa-heart"></i>
                </div>
                <h2>4.CREATE YOUR OFFER</h2>
                <p>Craft your own offer and join our world of exclusive opportunities! Select a choice tailored to your needs and interests. Meet our exclusive offers prepared just for you now!</p>
            </div>
            <div className="card">
                <div className="icon">
                <i className="fa-light fa-briefcase"></i>
                </div>
                <h2>5.SAVE YOUR TIME</h2>
                <p>We're here to make your life easier with quick and effective solutions. Access the information you need swiftly and make the most out of your time. We're here to give you more time!</p>
            </div>
            <div className="card">
                <div className="icon">
                <i className="fa-sharp fa-light fa-pencil"></i>
                </div>
                <h2>6.PRINTED BOOKS AVAILABLE</h2>
                <p>Explore the unique pleasure of reading by browsing our printed books! Lose yourself between the pages comfortably, without straining your eyes.</p>
            </div>
        </div>
        </div>
      
    </div>
    </>
  )
}

export default Services