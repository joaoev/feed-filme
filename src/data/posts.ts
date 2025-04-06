import { PostType } from '../components/Post';
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';
export const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: `${avatar1}`,
        name: 'Jane Doe',
        role: 'Crítica de Cinema'
      },
      content: [
        {
          type: 'paragraph',
          content:
            'Interestelar me deixou completamente sem palavras. A trilha sonora do Hans Zimmer é simplesmente hipnotizante, e aquele momento da mensagem da filha? Nossa… chorei muito. 😭'
        },
        {
          type: 'paragraph',
          content:
            'É impressionante como o Nolan consegue misturar emoção e física de uma forma tão envolvente.'
        },
        {
          type: 'link',
          content: 'https://www.imdb.com/pt/title/tt0816692/?ref_=ext_shr_lnk'
        }
      ],
      publishedAt: new Date('2024-01-16 01:17:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: `${avatar2}`,
        name: 'John Smith',
        role: 'Cinéfilo casual'
      },
      content: [
        {
          type: 'paragraph',
          content:
            'Acabei de sair da sessão de Oppenheimer. Que filme intenso! Cillian Murphy entregou uma atuação monstruosa.'
        },
        {
          type: 'paragraph',
          content:
            'Gostei muito da maneira como o filme mostrou o dilema ético por trás da criação da bomba atômica.'
        },
        {
          type: 'link',
          content: 'https://www.imdb.com/pt/title/tt15398776/?ref_=ext_shr_lnk'
        }
      ],
      publishedAt: new Date('2024-02-12 20:43:00')
    },
    {
      id: 3,
      author: {
        avatarUrl: `${avatar3}`,
        name: 'Maria Silva',
        role: 'Estudante de Cinema'
      },
      content: [
        {
          type: 'paragraph',
          content:
            'Revi O Poderoso Chefão ontem à noite. Que obra-prima! Cada cena parece uma pintura.'
        },
        {
          type: 'paragraph',
          content:
            'Marlon Brando é simplesmente lendário nesse papel. O filme envelheceu como vinho. 🍷'
        },
        {
          type: 'link',
          content: 'https://www.imdb.com/pt/title/tt0068646/?ref_=ext_shr_lnk'
        }
      ],
      publishedAt: new Date('2024-03-05 11:10:00')
    }
  ];