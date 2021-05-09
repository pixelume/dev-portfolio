import React from "react";
import { Section, ColInSection } from "../Layout";
import { Tile, TileOverlay } from "./CardStyles";
import { StaticImage } from "gatsby-plugin-image";
import { P } from "../../styles";

const Cards = ({ projectsArray, withoutContainer=null }) => {
  const render = () => {
    if (projectsArray) {
      if (typeof projectsArray === "object") {
        return projectsArray.map((card, idx) => {
          // const profilePic = getImage(card.ProfilePicture.localFile)
          return (
            <Tile to={`#`} exact key={card.id} idx={idx} height="219px">
              {card.image ? (
                card.image
              ) : (
                <StaticImage
                  src='../../images/no_image.jpg'
                  alt="Image Not Available"
                  placeholder="dominantColor"
                  layout="fixed"
                  width={350}
                  height={219}
                />
              )}
              <TileOverlay>
                <h3>{card.name}</h3>
                <P>Tech Stack:<br/>{card.techStack.join(' | ')}</P>
              </TileOverlay>
            </Tile>
          );
        });
      } else {
        return <h2>Error fetching data</h2>;
      }
    }
  };

  return withoutContainer ? (
    render()
  ) : (
    <Section padding="0px">
      <ColInSection
        col={1}
        display="flex"
        justifyContent="center"
        flexFlow="row wrap"
      >
        {render()}
      </ColInSection>
    </Section>
  );
};

export default Cards;
