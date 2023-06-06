import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
}) => {
  // const heroImage = getImage(image) || image;

  return (
    <>
      <section id="hero" class="px-0">
        <div class="content w-full max-w-none flex flex-column sm:flex-row">
          <div class="bg-left w-full sm:w-1/2 flex items-center justify-end pr-12">
            <img
              class="w-80"
              src="img/text-logo.png"
              alt="Randolph Lucas Jones text logo"
            />
          </div>
          <div class="bg-right w-full sm:w-1/2">
            <img src="img/hero.jpg" alt="house entry way" />
          </div>
        </div>
      </section>

      <section id="about">
        <div class="bg-left"></div>
        <div class="bg-right"></div>
        <div class="content max-w-3xl flex-col text-lg">
          <img
            src="img/house_exterior_fall.jpg"
            alt="exterior of Randolph Lucas Jones House"
            class="pb-6"
          />
          <p class="subhead text-2xl">
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

      <section id="history">
        <div class="bg-left"></div>
        <div class="bg-right"></div>
        <div class="content flex-col-reverse sm:flex-row max-w-5xl">
          <img src="img/about-1.jpg" class="w-100 sm:w-1/3 sm:-mt-12 sm:pb-12 sm:pr-8" />
          <img src="img/about-2.jpg" class="w-100 pb-8 sm:w-1/3 sm:pr-8" />
          <div class="w-100 sm:w-1/3 pb-8">
            <h2 class="text-center">History</h2>
            <p class="text-base">
              The house was built in 1924 for Hollins Nicholas Randolph, a great,
              great grandson of Thomas Jefferson and a prominent Atlanta attorney
              in the early 20th century.
            </p>
            <p class="text-base">
              P. Thornton Marye, a respected Atlanta architect in the early
              twentieth century, designed the house based on Randolph’s ancestral
              home “Dunlora” in Albemarle County, Virginia, where Randolph was
              born in 1872.
            </p>
          </div>
        </div>
      </section>

      <section id="move">
        <div class="bg-left"></div>
        <div class="bg-right"></div>
        <div class="content flex-col max-w-3xl">
          <h2 class="text-center pb-6">The Move</h2>
          <img src="img/move.jpg" class="pb-6" alt="the move" />
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
            its historical and architectural significance.
          </p>
        </div>
      </section>

      <section id="today">
        <div class="bg-left"></div>
        <div class="bg-right"></div>
        <div class="content max-w-5xl flex flex-col-reverse sm:flex-row ">
          <img
            src="img/today.jpg"
            alt="exterior of Randolph Lucas Jones House"
            class="w-100 sm:w-2/3 pr-8"
          />
          <div class="w-100 sm:w-1/3">
            <h2 class="text-center">Today</h2>
            <p>
              The house was built in 1924 for Hollins Nicholas Randolph, a great,
              great grandson of Thomas Jefferson and a prominent Atlanta attorney
              in the early 20th century.
            </p>
            <p class="pb-8">
              P. Thornton Marye, a respected Atlanta architect in the early
              twentieth century, designed the house based on Randolph’s ancestral
              home “Dunlora” in Albemarle County, Virginia, where Randolph was
              born in 1872.
            </p>
          </div>
        </div>
      </section>
    </>
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
