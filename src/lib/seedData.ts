import { collection, getDocs, writeBatch, doc } from 'firebase/firestore';
import { db } from './firebase';

const initialNews = [
  {
    title: 'Peace and Nation Building Initiative',
    date: 'March 24, 2020',
    category: 'Peace',
    image: 'https://picsum.photos/seed/peace/800/600',
    content: 'The Council of Anglican Provinces of Africa (CAPA) recently launched a comprehensive Peace and Nation Building Initiative aimed at fostering reconciliation and conflict resolution across the continent. This initiative brings together religious leaders, community organizers, and policymakers to address the root causes of conflict and promote sustainable peace. Through a series of workshops and grassroots dialogues, participants are equipped with mediation skills and strategies for building social cohesion. The program emphasizes the vital role of faith communities in healing divisions and advocating for justice, ensuring that every citizen can contribute to and benefit from national development.',
  },
  {
    title: 'Washington DC Advocacy Visit',
    date: 'June 2018',
    category: 'Advocacy',
    image: 'https://picsum.photos/seed/advocacy/800/600',
    content: 'A delegation from CAPA recently concluded a successful advocacy visit to Washington DC, where they engaged with key policymakers, international NGOs, and faith-based organizations. The primary focus of the visit was to highlight the pressing issues facing African communities, including climate change, economic inequality, and human rights. By sharing firsthand accounts and data-driven insights, the delegation sought to influence international policy and secure support for sustainable development initiatives. The visit also strengthened partnerships with global allies, paving the way for future collaborative efforts to address these critical challenges.',
  },
  {
    title: 'Communities Richer in Diversity',
    date: 'March 24, 2020',
    category: 'Interfaith',
    image: 'https://picsum.photos/seed/diversity/800/600',
    content: 'In an effort to promote interfaith harmony, CAPA has rolled out the "Communities Richer in Diversity" program. This initiative celebrates the cultural and religious diversity of Africa, viewing it as a source of strength rather than division. The program facilitates interfaith dialogues, joint community service projects, and educational campaigns that challenge stereotypes and build mutual respect. By bringing together people of different faiths to work towards common goals, such as improving local infrastructure or providing humanitarian aid, the initiative demonstrates the power of unity in diversity.',
  },
  {
    title: 'Africa Regional Forum',
    date: 'September 21, 2020',
    category: 'Events',
    image: 'https://picsum.photos/seed/forum/800/600',
    content: 'The annual Africa Regional Forum, hosted by CAPA, brought together delegates from across the continent to discuss strategies for advancing the Sustainable Development Goals (SDGs). The forum featured keynote addresses from prominent leaders, panel discussions on key issues such as health, education, and environmental stewardship, and interactive workshops. Participants shared best practices, identified areas for collaboration, and developed actionable plans to address the unique challenges facing their respective regions. The event underscored CAPA\'s commitment to driving positive change through collective action and shared vision.',
  },
  {
    title: 'Youth Leadership Training',
    date: 'November 15, 2021',
    category: 'Youth',
    image: 'https://picsum.photos/seed/youth/800/600',
    content: 'Recognizing the critical role of young people in shaping the future, CAPA recently concluded a comprehensive Youth Leadership Training program. The program brought together emerging leaders from various provinces, providing them with training in project management, advocacy, and ethical leadership. Through interactive sessions and mentorship, participants developed the skills necessary to initiate and lead community development projects. The training also emphasized the importance of civic engagement and social responsibility, empowering the youth to become active agents of change in their communities.',
  },
  {
    title: 'Climate Action Summit',
    date: 'August 10, 2022',
    category: 'Environment',
    image: 'https://picsum.photos/seed/climate/800/600',
    content: 'In response to the growing threat of climate change, CAPA organized a Climate Action Summit that gathered environmental experts, religious leaders, and community activists. The summit focused on the disproportionate impact of climate change on vulnerable communities in Africa and explored faith-based approaches to environmental stewardship. Discussions centered on promoting sustainable agriculture, transitioning to renewable energy, and advocating for climate justice. The summit culminated in a joint declaration committing the participating provinces to implement eco-friendly practices and advocate for stronger environmental policies at the national and international levels.',
  },
];

export async function seedDatabase() {
  try {
    const newsRef = collection(db, 'news');
    const snapshot = await getDocs(newsRef);
    
    // Only seed if the collection is empty
    if (snapshot.empty) {
      console.log('Seeding database with initial news...');
      const batch = writeBatch(db);
      
      initialNews.forEach((item, index) => {
        const docRef = doc(newsRef);
        batch.set(docRef, { 
          ...item, 
          // Add a slight delay to createdAt to maintain order
          createdAt: new Date(Date.now() - index * 1000).toISOString() 
        });
      });
      
      await batch.commit();
      console.log('Database seeded successfully!');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}
