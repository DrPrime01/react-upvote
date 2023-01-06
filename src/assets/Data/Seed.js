import kristy from '../../assets/Images/Avatars/kristy.png';
import veronika from '../../assets/Images/Avatars/veronika.jpg';
import daniel from '../../assets/Images/Avatars/daniel.jpg'
import molly from '../../assets/Images/Avatars/daniel.jpg';
import aqua from '../../assets/Images/Products/aqua.png';
import rose from '../../assets/Images/Products/rose.png';
import steel from '../../assets/Images/Products/steel.png';
import yellow from '../../assets/Images/Products/yellow.png'



export function generateVoteCount() {
      return Math.floor((Math.random() * 50) + 15);
    }
  
export const Products = [
      {
        id: 1,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction expertise.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: daniel,
        productImageUrl: aqua,
      },
      {
        id: 2,
        title: 'Supermajority: The Fantasy Congress League',
        description: 'Earn points when your favorite politicians pass legislation.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: kristy,
        productImageUrl: rose,
      },
      {
        id: 3,
        title: 'Tinfoild: Tailored tinfoil hats',
        description: 'We already have your measurements and shipping address.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: veronika,
        productImageUrl: steel,
      },
      {
        id: 4,
        title: 'Haught or Naught',
        description: 'High-minded or absent-minded? You decide.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: molly,
        productImageUrl: yellow,
      },
    ];
  

  