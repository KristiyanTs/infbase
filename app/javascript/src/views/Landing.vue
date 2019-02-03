<template>
  <div>
    <div class="position-relative">
      <section class="section-shaped my-0">
          <div class="shape shape-style-3 shape-default shape-skew">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
          <div class="container shape-container d-flex">
              <div class="col px-0">
                  <div class="row">
                      <div class="col-lg-6">
                          <h1 class="display-3  text-white">A beautiful Design System
                              <span>completed with examples</span>
                          </h1>
                          <p class="lead  text-white">The design system comes with four pre-built pages to help
                              you get started faster. You can change the text and images and you're good to
                              go.</p>
                          <div class="btn-wrapper">
                              <base-button tag="a"
                                           href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                                           class="mb-3 mb-sm-0"
                                           type="info"
                                           icon="fa fa-code">
                                  Components
                              </base-button>
                              <base-button tag="a"
                                           href="https://www.creative-tim.com/product/argon-design-system"
                                           class="mb-3 mb-sm-0"
                                           type="white"
                                           icon="ni ni-cloud-download-95">
                                  Download HTML
                              </base-button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
    <section class="section section-lg pt-lg-0 mt--200">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="row row-grid">
                        <div class="col-lg-4">
                            <card class="border-0" hover shadow body-classes="py-5">
                                <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                </icon>
                                <h6 class="text-primary text-uppercase">Schedule</h6>
                                <p class="description mt-3">Argon is a great free UI package based on Bootstrap 4
                                    that includes the most important components and features.</p>
                                <div>
                                    <badge type="primary" rounded>design</badge>
                                    <badge type="primary" rounded>system</badge>
                                    <badge type="primary" rounded>creative</badge>
                                </div>
                                <base-button tag="a" href="#" type="primary" class="mt-4">
                                    Learn more
                                </base-button>
                            </card>
                        </div>
                        <div class="col-lg-4">
                            <card class="border-0" hover shadow body-classes="py-5">
                                <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                </icon>
                                <h6 class="text-success text-uppercase">FAQ</h6>
                                <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                                    4 that includes the most important components and features.</p>
                                <div>
                                    <badge type="success" rounded>business</badge>
                                    <badge type="success" rounded>vision</badge>
                                    <badge type="success" rounded>success</badge>
                                </div>
                                <base-button tag="a" href="#" type="success" class="mt-4">
                                    Learn more
                                </base-button>
                            </card>
                        </div>
                        <div class="col-lg-4">
                            <card class="border-0" hover shadow body-classes="py-5">
                                <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                                </icon>
                                <h6 class="text-warning text-uppercase">Tutors</h6>
                                <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                                    4 that includes the most important components and features.</p>
                                <div>
                                    <badge type="warning" rounded>marketing</badge>
                                    <badge type="warning" rounded>product</badge>
                                    <badge type="warning" rounded>launch</badge>
                                </div>
                                <base-button tag="a" href="#" type="warning" class="mt-4">
                                    Learn more
                                </base-button>
                            </card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section section-lg">
        <schedule></schedule>
    </section>


    <section class="section section-lg">
        <div class="container">
            <div class="row justify-content-center text-center mb-lg">
                <div class="col-lg-8">
                    <h2 class="display-3">The amazing Team</h2>
                    <p class="lead text-muted">According to the National Oceanic and Atmospheric Administration,
                        Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <div class="px-4">
                        <img v-lazy="'img/theme/team-1-800x800.jpg'"
                             class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                             style="width: 200px;">
                        <div class="pt-4 text-center">
                            <h5 class="title">
                                <span class="d-block mb-1">Ryan Tompson</span>
                                <small class="h6 text-muted">Web Developer</small>
                            </h5>
                            <div class="mt-3">
                                <base-button tag="a" href="#" type="warning" icon="fa fa-twitter" rounded
                                             icon-only></base-button>
                                <base-button tag="a" href="#" type="warning" icon="fa fa-facebook" rounded
                                             icon-only></base-button>
                                <base-button tag="a" href="#" type="warning" icon="fa fa-dribbble" rounded
                                             icon-only></base-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <div class="px-4">
                        <img v-lazy="'img/theme/team-2-800x800.jpg'"
                             class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                             style="width: 200px;">
                        <div class="pt-4 text-center">
                            <h5 class="title">
                                <span class="d-block mb-1">Romina Hadid</span>
                                <small class="h6 text-muted">Marketing Strategist</small>
                            </h5>
                            <div class="mt-3">
                                <base-button tag="a" href="#" type="primary" icon="fa fa-twitter" rounded
                                             icon-only></base-button>
                                <base-button tag="a" href="#" type="primary" icon="fa fa-facebook" rounded
                                             icon-only></base-button>
                                <base-button tag="a" href="#" type="primary" icon="fa fa-dribbble" rounded
                                             icon-only></base-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <div class="px-4">
                        <img v-lazy="'img/theme/team-3-800x800.jpg'"
                             class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                             style="width: 200px;">
                        <div class="pt-4 text-center">
                            <h5 class="title">
                                <span class="d-block mb-1">Alexander Smith</span>
                                <small class="h6 text-muted">UI/UX Designer</small>
                            </h5>
                            <div class="mt-3">
                                <base-button tag="a" href="#" type="info" icon="fa fa-twitter" rounded
                                             icon-only></base-button>
                                <base-button tag="a" href="#" type="info" icon="fa fa-facebook" rounded
                                             icon-only></base-button>
                                <base-button tag="a" href="#" type="info" icon="fa fa-dribbble" rounded
                                             icon-only></base-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <div class="px-4">
                        <img v-lazy="'img/theme/team-4-800x800.jpg'"
                             class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                             style="width: 200px;">
                        <div class="pt-4 text-center">
                            <h5 class="title">
                                <span class="d-block mb-1">John Doe</span>
                                <small class="h6 text-muted">Founder and CEO</small>
                            </h5>
                            <div class="mt-3">
                                <base-button tag="a" href="#" type="success" icon="fa fa-twitter" rounded
                                             icon-only></base-button>
                                <base-button tag="a" href="#" type="success" icon="fa fa-facebook" rounded
                                             icon-only></base-button>
                                <base-button tag="a" href="#" type="success" icon="fa fa-dribbble" rounded
                                             icon-only></base-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
  import Schedule from './components/Schedule';
  export default {
    name: "home",
    components: {Schedule}
  };
</script>
