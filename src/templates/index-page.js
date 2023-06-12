import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
}) => {
  return (
    <Layout>
      <div className="bg-offWhite">
        <section id="hero" className="px-0">
          <div className="content w-full max-w-none flex flex-column sm:flex-row">
            <div className="bg-left w-full sm:w-1/2 flex items-center justify-end pr-12">
              <img
                className="w-80"
                src="img/text-logo.png"
                alt="Randolph Lucas Jones text logo"
              />
            </div>
            <div className="bg-right w-full sm:w-1/2">
              <img src="img/hero.jpg" alt="house entry way" />
            </div>
          </div>
        </section>

        <section id="about">
          <div className="content max-w-3xl flex-col text-lg">
            <div className="relative">
              <div className="bg-mint absolute h-full w-full top-6 left-6" />
              <img src="img/detail-floral.svg" className="absolute -bottom-64 -left-64 detail-floral" />
              <img
                src="img/house_exterior_fall.jpg"
                className="relative"
                alt="exterior of Randolph Lucas Jones House"
              />
            </div>

            <p className="subhead text-2xl pt-24 relative z-10">
              The Randolph-Lucas Jones House is a Georgian Revival-style mansion
              built in 1924 for Hollins Randolph, the great-great-grandson of Thomas
              Jefferson. It was later owned by Margaret Lucas until 1988 when it was
              sold to a developer and used as an event space. In 2013, it was set to
              be demolished, but was saved by Roger Smith and Christopher Jones, who
              bought and moved it to a vacant lot in Ansley Park, where it was
              extensively refurbished. Jones passed away in 2019, and the mansion
              was renamed in his honor. The house was honored with the Georgia
              Trust’s Excellence in Preservation Award in 2020, and previously by
              the Atlanta Preservation Center and the Daughters of the American
              Revolution’s local chapter. The effort to save the house was described
              as “one of the most significant preservation projects the city of
              Atlanta has had in years.”
            </p>
          </div>
        </section>

        <section id="history" className="bg-beige pt-36 pb-16 relative">
          <div className="content flex-col-reverse sm:flex-row max-w-5xl">
            <div className="sm:w-2/3 flex flex-row relative">
              <div className="absolute -left-96 right-0 top-0 bottom-0">
                <div className="absolute -left-96 right-0 bottom-1/2 bg-mint h-40" />
              </div>
              <img src="img/about-1.jpg" id="about_pic_1" className="w-100 sm:w-1/2 sm:-mt-12 sm:pb-12 sm:mr-8 z-10" />
              <img src="img/about-2.jpg" className="w-100 pb-8 sm:w-1/2 sm:pr-8 z-10" />
            </div>

            <div className="w-100 sm:w-1/3 pb-8 ml-6 flex flex-col justify-center">
              <h2 className="text-center">History</h2>
              <p className="text-base">
                The house was built in 1924 for Hollins Nicholas Randolph, a great,
                great grandson of Thomas Jefferson and a prominent Atlanta attorney
                in the early 20th century.
              </p>
              <p className="text-base">
                P. Thornton Marye, a respected Atlanta architect in the early
                twentieth century, designed the house based on Randolph’s ancestral
                home “Dunlora” in Albemarle County, Virginia, where Randolph was
                born in 1872.
              </p>
            </div>
          </div>
        </section>

        <section id="move" className="relative">
          <div className="content flex-col max-w-3xl relative z-10">
            <div className="bg-right"></div>
            <h2 className="text-center pb-6">The Move</h2>
            <img src="img/move.jpg" id="move_pic" className="mb-6" alt="the move" />
            <p>
              In 2013, the Randolph-Lucas House was slated to be razed after falling
              into disrepair, but was saved by Roger Smith and Christopher Jones,
              who had it moved about two miles south in two pieces via tractor
              trailers to a vacant lot in Ansley Park. The move was a monumental
              task, as the house was a large mansion built in 1924 and located on
              Peachtree Road in Buckhead. After the move, Smith and Jones
              extensively refurbished the home, and it was renamed the Randolph
              Lucas Jones House in honor of Jones after his death in 2019. The move
              and restoration were significant preservation projects in the city of
              Atlanta, and the house has received several awards and recognition for
              its historical and architectural significancessss.
            </p>
          </div>
          <img src="img/detail-floral.svg" className="detail-floral absolute top-0 -right-48 bottom-0 z-0" />
        </section>

        <section id="today" className="relative bg-beige py-24">
          <img src="img/detail-vertical.svg" className="absolute top-0 bottom-0 -right-8 detail-vertical my-auto" />
          <img src="img/detail-vertical.svg" className="absolute top-0 bottom-0 -left-8 detail-vertical my-auto" />
          <div className="bg-right"></div>
          <div className="content max-w-5xl flex flex-col-reverse sm:flex-row items-center">
            <img
              id="today_pic"
              src="img/today.jpg"
              alt="exterior of Randolph Lucas Jones House"
              className="w-100 sm:w-2/3 mr-16"
            />
            <div className="w-100 sm:w-1/3 flex flex-col justify-center">
              <h2 className="text-center">Today</h2>
              <p>
                The house was built in 1924 for Hollins Nicholas Randolph, a great,
                great grandson of Thomas Jefferson and a prominent Atlanta attorney
                in the early 20th century.
              </p>
              <p className="pb-8">
                P. Thornton Marye, a respected Atlanta architect in the early
                twentieth century, designed the house based on Randolph’s ancestral
                home “Dunlora” in Albemarle County, Virginia, where Randolph was
                born in 1872.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      mainpitch={frontmatter.mainpitch}
      description={frontmatter.description}
      intro={frontmatter.intro}
    />
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
