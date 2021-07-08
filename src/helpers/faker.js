import { rand } from 'helpers/math';

function generateDummyHotels(quantity) {
  const initialId = 100_000_000;
  const descriptionWords =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat eleifend interdum. Quisque laoreet tortor viverra, rhoncus enim sed, convallis justo. Integer accumsan massa nec mauris congue, in hendrerit leo consequat.'.split(
      ' '
    );
  const locations = [
    { country: 'Chile', city: 'Santiago' },
    { country: 'Chile', city: 'Temuco' },
    { country: 'Chile', city: 'Valparaiso' },
    { country: 'Argentina', city: 'Buenos Aires' },
    { country: 'Argentina', city: 'Mendoza' },
    { country: 'Argentina', city: 'Mar del Plata' },
    { country: 'USA', city: 'New York' },
    { country: 'USA', city: 'California' },
  ];

  return new Array(quantity).fill(null).map((_, index) => ({
    id: initialId + index,
    name: `Hotel ${index}`,
    description: descriptionWords
      .slice(0, rand(15, descriptionWords.length - 1))
      .join(' '),
    location: locations[rand(0, locations.length - 1)],
    rooms: rand(5, 30),
    price: rand(1000, 5000),
    image: 'https://picsum.photos/seed/picsum/400/300',
  }));
}

export {
  generateDummyHotels, //
};
