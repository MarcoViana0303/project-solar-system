import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section>
          {
            planets.map((planeta) => (
              <PlanetCard
                key={ planeta.name }
                name={ planeta.name }
                image={ planeta.image }
              />
            ))
          }
        </section>
      </div>
    );
  }
}

export default SolarSystem;
