import React from 'react';
import { Link } from 'react-router-dom';

import graphImage from '../../assets/images/zaklinac.jpg';
import eventImage from '../../assets/images/n7day.jpg';

import { Section, Wrapper, Card } from './styles.js';

const MainPage = () => (
  <Section>
    <h1>
      Vítej v aplikaci pro správu marketingových dat Xzone.cz
    </h1>
    <Wrapper>
      <h2>
        vyber si co by si chtěl vidět
      </h2>
      <div>
        <Link to={'/charts'}>
          <Card>
            <h3>
              Grafy
            </h3>
            <img src={graphImage} alt="graph section" />
          </Card>
        </Link>
        <Link to={'/events'}>
          <Card>
            <h3>
              Eventy
            </h3>
            <img src={eventImage} alt="events section" />
          </Card>
        </Link>
      </div>
    </Wrapper>
  </Section >
);

export default MainPage;
