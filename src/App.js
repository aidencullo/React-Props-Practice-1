import { getImageUrl } from './utils.js';
import Profile from './Profile.js';

export default function Gallery() {
  return (
      <div>
      <h1>Notable Scientists</h1>
      <Profile
    name="Maria Skłodowska-Curie"
    profession="physicist and chemist"
    awards={['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']}
    discovery="polonium (element)"
    imageUrl={getImageUrl('szV5sdG')}
      />
      <Profile
    name="Katsuko Saruhashi"
    profession="geochemist"
    awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
    discovery="a method for measuring carbon dioxide in seawater"
    imageUrl={getImageUrl('YfeOqp2')}
    	/>
    </div>
  );
}
