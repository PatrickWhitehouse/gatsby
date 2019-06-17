import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export default () => (
        <StaticQuery query={graphql`
        {
            ad: file(relativePath: {
                eq: "anaerobic-digestion-supplies.jpg"
            }) {
                childImageSharp {
                    id
                    fluid(maxWidth: 1280){
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            maid: file(relativePath: {
                eq: "maid-about-town.jpg"
            }) {
                childImageSharp {
                    id
                    fluid(maxWidth: 1280) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        `} render={(data) => (
            <Layout>
            <Helmet>
                <title>Patrick Whitehouse - Front End Web Developer based in Denton, Manchester</title>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            </Helmet>
            {console.log(data)}
            <section className="hero is-medium is-dark is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Patrick Whitehouse
                    </h1>
                    <h2 className="subtitle">
                        Front End Developer based in Manchester, UK 🇬🇧
                    </h2>
                </div>
            </div>
        </section>
        <section className="section about">
            <div className="container">
                <div className="content">
                    <h3 className="title is-3">Patrick who?</h3>
                    <p>Hey 👋🏻. I'm Patrick, a Front End Developer based in sunny Manchester. My day to day job is working with Magento 2 and the occasional WordPress integration. I've always been passionate about technology and keep up to date with the latest trends by using platforms such as <a href="https://twitter.com/patrickdoesweb" target="_blank">Twitter</a> to follow the industries leaders.</p>
                    <p>I thrive off of learning new skills and believe it is important to have an extended range of knowledge, especially with the constant releases of new frameworks, whether that be front end or back end specific.</p>
                </div>
            </div>
        </section>
        <section className="section work"> 
            <div className="container">
                <div className="content">
                    <h3 className="title is-3">Latest bits of work 👨‍💻</h3>
                    <p>Here are some projects that I've undertaken for clients. I'm always on the lookout to expand my portfolio, so give me a shout if you're interested in starting a project!</p>
                    
                </div>
                <div className="columns">
                    <div className="column is-half">
                    <div className="card">
                        <div className="card-image">
                                <Img fluid={data.ad.childImageSharp.fluid}  />
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>AD Supplies</h4>
                                <p>AD Supplies owner, David, came to myself based off of a recommendation from a previous client of mine. I developed a fully editable website using Craft CMS. David is extremely happy with the site and how easy it is to edit using Craft.</p>
                                <span>View <a href="https://ad-supplies.com" target="_blank">AD Supplies live site</a>.</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="column is-half">
                <div className="card">
                    <div className="card-image">
                        <Img fluid={data.maid.childImageSharp.fluid}  />
                        
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>Maid About Town</h4>
                            <p>Maid About Town was a client I had chosen for my final year university project. Maid About Town had zero online presence and all of their customers and leads were simply from word of mouth from exisitng customers.</p>
                            <p>I felt like Maid About Town could benefit massively by having a website, and so I built them a static and simple, yet modern website. Since the launch, Claire (the owner) has had numerous compliments, but most importantly, has gained many new customers. Claire also uses the site to advertise new positions available at Maid About Town and has been successful in hiring new employees.</p>
                            <span>View <a href="https://maidabouttown.cleaning" target="_blank">Maid About Town live site</a>.</span>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </section>
        </Layout>
        )}
        />
)
