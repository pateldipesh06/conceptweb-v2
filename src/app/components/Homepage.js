import React from 'react'
import Image from 'next/image'
import homeimg from '../../../public/home.svg'
import ceoimg from '../../../public/CEO_Concept.jpg'
import teamimg from '../../../public/Team_Concept.jpg'

function Homepage() {
  return (
 <>
    <Image src={homeimg} alt='Home' />
          <section class="bg-default text-start" id="start">
              <div class="container mx-auto px-4">
                  <div class="flex flex-wrap justify-end">
                      <div class="w-full lg:w-6/12 mb-12">
                          <div class="parallax-text-wrap">
                              <h3 class="border-b-2 border-gray-800">About us</h3>
                          </div>
                          <div class="flex flex-wrap">
                              <div class="w-full lg:w-11/12">
                                  <div class="tabs-custom tabs-horizontal tabs-line" id="tabs-1">
                                      
                                      <ul class="list-none nav nav-tabs flex justify-start">
                                          <li class="nav-item">
                                              <a class="nav-link active" data-bs-toggle="tab" href="#tabs-1-1">Overview</a>
                                          </li>
                                          <li class="nav-item">
                                              <a class="nav-link" data-bs-toggle="tab" href="#tabs-1-2">Founder</a>
                                          </li>
                                          <li class="nav-item">
                                              <a class="nav-link" data-bs-toggle="tab" href="#tabs-1-3">Mission</a>
                                          </li>
                                      </ul>
                                      
                                      <div class="tab-content mt-4">
                                          <div class="tab-pane fade show active" id="tabs-1-1">
                                              <h5 class="text-lg font-semibold">The Concept Group is an ISO-certified company, developing interactive and engaging multimedia content for the edutech industry.</h5>
                                              <div class="wrap_link">
                                                  <p>With more than two decades of experience, we hold expertise in developing multimedia content like 2d animation, 3d animation, Visual effects, Sound design, Script writing, Software solutions, Learning management systems, Virtual reality, Augmented reality, and Interactive simulations for e-learning.</p>
                                              </div>
                                          </div>
                                          <div class="tab-pane fade" id="tabs-1-2">
                                              
                                              <article class="card-info">
                                                  <div class="card-info-aside">
                                                      <Image alt="" draggable="false" class="card-info-image" height="150" src={ceoimg} width="150" />
                                                  </div>
                                                  <div class="card-info-main">
                                                      <h5 class="card-info-title">Founder and CEO</h5>
                                                      <p>The main person behind the concept is Miss Kinjal Parmar. With a positive mindset and creative vision, provide fuel for the motivation and growth of the concept family, both personal and professional.</p>
                                                  </div>
                                              </article>
                                          </div>
                                          <div class="tab-pane fade" id="tabs-1-3">
                                              <div class="box-width-2">
                                                  <div class="quote-primary-text">
                                                      <p>“To make learning interactive and entertaining!”</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="w-full lg:w-5/12 text-center">
                          <div class="image-position-01 relative" >
                              <div class="blick-wrap">
                                  <Image alt="" class="image-wrap" height="852" src={teamimg} width="940" />
                                      <div class="blick-overlay" data-blick-overlay="ipad"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    </>
  )
}

export default Homepage
