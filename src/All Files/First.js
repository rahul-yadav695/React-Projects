import React from 'react'

function First() {
  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img style={{ width: "80%", height: "70vh" }} src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img style={{ width: "80%", height: "70vh" }} src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img style={{ width: "80%", height: "70vh" }} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div>
        <div className='container-fluid'>
          <div className='row ' style={{ background: "#ddf1f7" }}>
            <div className='col-sm-12 col-md-6 col-lg-6 mt-5'>
              <div>
                <h3>The Impact of Effective Website Design and Development</h3>
                <p>Your online presence is significantly influenced by the design and development of your website. Even minor enhancements can significantly impact your success in the market. A basic and poorly optimized website is no longer sufficient for businesses.</p>
                <p>In the evolving digital landscape, customer discernment plays a crucial role in choosing business partners.</p>
                <p>
                  For the past decade, The Make Lots Foundation has consistently out performed other web design companies. Our commitment to delivering superior outcomes sets us apart and ensures our clients’ success</p>

                <div className='text-center'><button className='btn btn-danger'>Start Website</button></div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6'>
              <img style={{ width: "100%", height: "60vh", backgroundSize: "cover" }} src={"https://www.makelots.com/wp-content/uploads/2024/01/business-lady-1-1.png"} alt="My Image" />;
            </div>
          </div>
        </div>
      </div>



      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div>
              <div className="card" style={{ "width": "25rem" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbbd_FTBnVk6AMLM0zj6vmNiKqyeKv58vleA&s" className="card-img-top images_name" alt="..." />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="https://tipsg.in/"><div className='text-center'>
                    <button className="btn btn-danger">Click Me</button>
                  </div></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div>
              <div className="card" style={{ "width": "25rem" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk4HqcB0ZLneKgw-qDhi5xvo84dqRAmdVDGQ&s" className="card-img-top images_name" alt="..." />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="https://www.instagram.com/tipsgalwar/"><div className='text-center'>
                    <button className="btn btn-success">Sumite</button>
                  </div></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div>
              <div className="card" style={{ "width": "25rem" }}>
                <img src="https://tipsg.in/assets/img/about-us/v3/collage%2003.png" className="card-img-top images_name" alt="..." />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="https://internshala.com/company/tipsg-alwar-1727756076/"><div className='text-center'>
                    <button className="btn btn-primary">Save Code</button>
                  </div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default First

