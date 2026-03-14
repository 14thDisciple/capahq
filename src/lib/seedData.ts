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
  {
    title: 'Women in Leadership Conference',
    date: 'May 12, 2023',
    category: 'Empowerment',
    image: 'https://picsum.photos/seed/women-leaders/800/600',
    content: 'CAPA hosted a landmark conference celebrating and empowering women in leadership roles across the Anglican Communion in Africa. The event highlighted the crucial contributions of women in ministry, community development, and peacebuilding. Keynote speakers shared inspiring stories of overcoming challenges and driving positive change. Workshops focused on capacity building, mentorship, and strategies for increasing female representation in decision-making bodies. The conference concluded with a strong commitment to fostering inclusive leadership and supporting the next generation of women leaders.',
  },
  {
    title: 'Health and Wellness Initiative',
    date: 'October 5, 2023',
    category: 'Health',
    image: 'https://picsum.photos/seed/health-clinic/800/600',
    content: 'In partnership with local health organizations, CAPA launched a comprehensive Health and Wellness Initiative aimed at improving access to healthcare in underserved communities. The program includes mobile clinics, health education campaigns, and the distribution of essential medical supplies. A key focus is on maternal and child health, as well as combating preventable diseases. By integrating health services with community outreach, the initiative seeks to promote holistic well-being and ensure that vulnerable populations receive the care they need.',
  },
];

const initialHeroSlides = [
  {
    image: "https://picsum.photos/seed/africa-community/1920/1080?blur=2",
    badge: "Instrument of Anglican Communion in Africa",
    title: "To celebrate life and address challenges through the Anglican Church in Africa.",
    description: "We provide holistic ministry to fulfill God's promise of abundant life, drawing all people into fellowship with complementary gifts, experiences, and skills.",
    order: 0
  },
  {
    image: "https://picsum.photos/seed/church-worship/1920/1080?blur=2",
    badge: "Faith & Fellowship",
    title: "Building Stronger Communities Through Faith and Action.",
    description: "Empowering local parishes to serve their communities, fostering peace, and promoting sustainable development across the continent.",
    order: 1
  },
  {
    image: "https://picsum.photos/seed/african-youth/1920/1080?blur=2",
    badge: "Youth & Future",
    title: "Equipping the Next Generation of Leaders.",
    description: "Investing in education, leadership training, and spiritual growth to ensure a vibrant future for the church and society.",
    order: 2
  },
  {
    image: "https://picsum.photos/seed/african-landscape/1920/1080?blur=2",
    badge: "Environmental Stewardship",
    title: "Caring for God's Creation.",
    description: "Promoting sustainable practices and advocating for climate justice to protect our environment for future generations.",
    order: 3
  },
  {
    image: "https://picsum.photos/seed/community-gathering/1920/1080?blur=2",
    badge: "Community Development",
    title: "Transforming Lives Through Holistic Ministry.",
    description: "Working together to address poverty, improve health, and build resilient communities across the continent.",
    order: 4
  }
];

const initialPartners = [
  {
    name: 'Anglican Communion',
    logoUrl: 'https://picsum.photos/seed/partner1/200/100',
    websiteUrl: 'https://www.anglicancommunion.org/'
  },
  {
    name: 'Anglican Alliance',
    logoUrl: 'https://picsum.photos/seed/partner2/200/100',
    websiteUrl: 'https://anglicanalliance.org/'
  },
  {
    name: 'All Africa Conference of Churches',
    logoUrl: 'https://picsum.photos/seed/partner3/200/100',
    websiteUrl: 'https://aacc-ceta.org/'
  },
  {
    name: 'World Council of Churches',
    logoUrl: 'https://picsum.photos/seed/partner4/200/100',
    websiteUrl: 'https://www.oikoumene.org/'
  },
  {
    name: 'Compass Rose Society',
    logoUrl: 'https://picsum.photos/seed/partner5/200/100',
    websiteUrl: 'https://www.compassrosesociety.org/'
  },
  {
    name: 'Lambeth Conference',
    logoUrl: 'https://picsum.photos/seed/partner6/200/100',
    websiteUrl: 'https://www.lambethconference.org/'
  },
  {
    name: 'Tearfund',
    logoUrl: 'https://picsum.photos/seed/partner7/200/100',
    websiteUrl: 'https://www.tearfund.org/'
  }
];

const initialProvinces = [
  {
    name: 'Church of the Province of Central Africa',
    longitude: 27.8493,
    latitude: -13.1339,
    description: 'The Church of the Province of Central Africa covers Botswana, Malawi, Zambia, and Zimbabwe.',
    countries: 'Botswana, Malawi, Zambia, Zimbabwe'
  },
  {
    name: 'Province of the Anglican Church of Congo',
    longitude: 23.6566,
    latitude: -4.0383,
    description: 'The Province of the Anglican Church of Congo covers the Democratic Republic of Congo and the Republic of Congo.',
    countries: 'Democratic Republic of Congo, Republic of Congo'
  },
  {
    name: 'Church of the Province of the Indian Ocean',
    longitude: 46.8691,
    latitude: -18.7669,
    description: 'The Church of the Province of the Indian Ocean covers Madagascar, Mauritius, and Seychelles.',
    countries: 'Madagascar, Mauritius, Seychelles'
  },
  {
    name: 'Anglican Church of Kenya',
    longitude: 37.9062,
    latitude: -0.0236,
    description: 'The Anglican Church of Kenya is a province of the Anglican Communion, covering Kenya.',
    countries: 'Kenya'
  },
  {
    name: 'Church of Nigeria (Anglican Communion)',
    longitude: 8.6753,
    latitude: 9.0820,
    description: 'The Church of Nigeria is the Anglican church in Nigeria. It is the second-largest province in the Anglican Communion.',
    countries: 'Nigeria'
  },
  {
    name: 'Church of the Province of Rwanda',
    longitude: 29.8739,
    latitude: -1.9403,
    description: 'The Church of the Province of Rwanda is a province of the Anglican Communion, covering Rwanda.',
    countries: 'Rwanda'
  },
  {
    name: 'Anglican Church of Southern Africa',
    longitude: 22.9375,
    latitude: -30.5595,
    description: 'The Anglican Church of Southern Africa covers South Africa, Eswatini, Lesotho, Namibia, and St Helena.',
    countries: 'South Africa, Eswatini, Lesotho, Namibia, St Helena'
  },
  {
    name: 'Anglican Church of Tanzania',
    longitude: 34.8888,
    latitude: -6.3690,
    description: 'The Anglican Church of Tanzania is a province of the Anglican Communion, covering Tanzania.',
    countries: 'Tanzania'
  },
  {
    name: 'Church of the Province of Uganda',
    longitude: 32.2903,
    latitude: 1.3733,
    description: 'The Church of the Province of Uganda is a province of the Anglican Communion, covering Uganda.',
    countries: 'Uganda'
  },
  {
    name: 'Church of the Province of West Africa',
    longitude: -1.0232,
    latitude: 7.9465,
    description: 'The Church of the Province of West Africa covers Cameroon, Cape Verde, Gambia, Ghana, Guinea, Liberia, Senegal, and Sierra Leone.',
    countries: 'Cameroon, Cape Verde, Gambia, Ghana, Guinea, Liberia, Senegal, Sierra Leone'
  }
];

export async function seedDatabase() {
  try {
    const newsRef = collection(db, 'news');
    const newsSnapshot = await getDocs(newsRef);
    
    // Only seed if the collection is empty
    if (newsSnapshot.empty) {
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
      console.log('News seeded successfully!');
    }

    const heroRef = collection(db, 'hero_slides');
    const heroSnapshot = await getDocs(heroRef);

    if (heroSnapshot.empty) {
      console.log('Seeding database with initial hero slides...');
      const batch = writeBatch(db);
      
      initialHeroSlides.forEach((item) => {
        const docRef = doc(heroRef);
        batch.set(docRef, { 
          ...item, 
          createdAt: new Date().toISOString() 
        });
      });
      
      await batch.commit();
      console.log('Hero slides seeded successfully!');
    }

    const partnersRef = collection(db, 'partners');
    const partnersSnapshot = await getDocs(partnersRef);

    if (partnersSnapshot.empty) {
      console.log('Seeding database with initial partners...');
      const batch = writeBatch(db);
      
      initialPartners.forEach((item) => {
        const docRef = doc(partnersRef);
        batch.set(docRef, { 
          ...item, 
          createdAt: new Date().toISOString() 
        });
      });
      
      await batch.commit();
      console.log('Partners seeded successfully!');
    }

    const provincesRef = collection(db, 'provinces');
    const provincesSnapshot = await getDocs(provincesRef);

    if (provincesSnapshot.empty) {
      console.log('Seeding database with initial provinces...');
      const batch = writeBatch(db);
      
      initialProvinces.forEach((item) => {
        const docRef = doc(provincesRef);
        batch.set(docRef, { 
          ...item, 
          createdAt: new Date().toISOString() 
        });
      });
      
      await batch.commit();
      console.log('Provinces seeded successfully!');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}
