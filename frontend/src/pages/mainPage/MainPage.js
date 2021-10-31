import React from 'react';
import { Link } from 'react-router-dom';

import graphImage from '../../assets/images/zaklinac.jpg';
import eventImage from '../../assets/images/n7day.jpg';

import { MainSection, ContentWrapper, CardsWrapper, CardWrapper, CardImage, Imagetext } from './styles.js';

const MainPage = () => (
  <MainSection>
    <h1>
      Vítej v aplikaci pro správu marketingových dat Xzone.cz
    </h1>
    <ContentWrapper>
      <h2>
        vyber si co by si chtěl vidět
      </h2>
      <CardsWrapper>
        <CardWrapper>
          <Link to={'/charts'}>
            <Imagetext>
              Grafy
            </Imagetext>
          </Link>
          <CardImage src={graphImage} />
        </CardWrapper>
        <CardWrapper>
          <Link to={'/charts'}>
            <Imagetext>
              Eventy
            </Imagetext>
          </Link>
          <CardImage src={eventImage} />
        </CardWrapper>
      </CardsWrapper>
    </ContentWrapper>
  </MainSection >
);

export default MainPage;
