import type { TypeBlog } from '~/types/blogs';
import {
  image01Lg,
  image02,
  slider04,
  slider01,
  slider05,
  model,
} from '~/assets/images';
import { events } from '~/data/events';

export const featuredBlog = {
  id: 1,
  title: 'The Importance of Networking for Models',
  excerpt:
    'Networking is an essential part of any modeling career. It is a way to meet new people, learn about new opportunities, and build relationships with industry professionals.',
  content: `<div>
  <p>Networking is an essential part of any modeling career. It is a way to meet new people, learn about new opportunities, and build relationships with industry professionals.</p>
  <p>In this blog post, we will discuss the importance of networking for models. We will also provide some tips on how to network effectively.</p>
  </div>`,
  featured_photo: image01Lg,
  is_featured: true,
  slug: 'the-importance-of-networking-for-models',
  author: {
    id: 1,
    name: 'Ben Jones',
  },
  event: events[0],
  next_blog: {
    id: 2,
    title: 'How to Choose the Right Modeling Agency for You',
    slug: 'how-to-choose-the-right-modeling-agency-for-you',
    excerpt:
      'Choosing the right modeling agency is an important decision for any aspiring model. There are many factors to consider, such as the agency\'s reputation, the type of modeling they specialize in, and their location.',
    author: {
      id: 2,
      name: 'Maxine Miller',
    },
    event: events[3],
  },
};

export const blogs: TypeBlog[] = [
  {
    id: 2,
    title: 'How to Choose the Right Modeling Agency for You',
    slug: 'how-to-choose-the-right-modeling-agency-for-you',
    excerpt:
      'Choosing the right modeling agency is an important decision for any aspiring model. There are many factors to consider, such as the agency\'s reputation, the type of modeling they specialize in, and their location.',
    content: `<p>Choosing the right modeling agency is an important decision that can have a significant impact on your career. There are many factors to consider, such as the agency's reputation, its focus, and its transparency.</p>
    <h2>Do Your Research</h2>
    <p>The first rule in choosing an agency is to do your research. Start by researching the different agencies in your area. Look for agencies that have a good reputation and a history of success. You can also read reviews from other models to get their feedback.</p>
    <h2>Consider Your Goals</h2>
    <p>What are you hoping to achieve by modeling? Do you want to work in fashion, commercial, or print? Once you know your goals, you can start to narrow down your options.</p>
    <h2>Meet with the Agency</h2>
    <p>Once you have found a few agencies that you’re interested in, schedule a meeting with them. This is your chance to ask questions and get to know them better. Prepare a list of questions about their requirements, contract terms, and any additional fees they may charge. During this meeting, pay close attention to how professional and supportive they are.</p>
    <h2>Review the Contract</h2>
    <p>If you sign an agreement with an agency, be sure to review the contract carefully. Make sure you understand all of the terms and conditions.</p>
    <h2>Red Flags</h2>
    <ul>
      <li>Agencies that ask for upfront fees.</li>
      <li>Agencies that promise unrealistic results.</li>
      <li>Agencies that don’t have a good reputation.</li>
    </ul>
    <h2>Additional Tips</h2>
    <p>Ask for recommendations from other models. If you know any other models, ask them for recommendations for agencies. They can give you firsthand accounts of their experiences and offer valuable advice.</p>
    <p>Read Google reviews and forums. Many aspiring models share their experiences online. This can give you a better insight into the agency and its reputation.</p>
    <h2>Conclusion</h2>
    <p>Choosing the right modeling agency is an important step in your modeling journey. Take the time to do your research and find an agency that will help you achieve your goals.</p>
    <p>I hope this blog post was helpful. If you have any questions, please feel free to contact me.</p>`,
    featured_photo: image02,
    is_featured: false,
    author: {
      id: 2,
      name: 'Maxine Miller',
    },
    event: events[3],
    next_blog: {
      id: 3,
      title: '5 Tips for Getting Started in Modeling',
      slug: '5-tips-for-getting-started-in-modeling',
      excerpt:
        'So you want to be a model? Congratulations! Modeling can be a great career, but it takes hard work and dedication.',
      author: {
        id: 3,
        name: 'Jenna Smith',
      },
      event: events[1],
    },
  },
  {
    id: 3,
    title: '5 Tips for Getting Started in Modeling',
    excerpt:
      'So you want to be a model? Congratulations! Modeling can be a great career, but it takes hard work and dedication.',
    content: `<div>
    <p>So you want to be a model? Congratulations! Modeling can be a great career, but it takes hard work and dedication.</p>
    <p>In this blog post, we will provide you with 5 tips for getting started in modeling. We will cover everything from finding the right agency to preparing for your first shoot.
    In this blog post, we will provide you with 5 tips for getting started in modeling. We will cover everything from finding the right agency to preparing for your first shoot
    In this blog post, we will provide you with 5 tips for getting started in modeling. We will cover everything from finding the right agency to preparing for your first shoot
    In this blog post, we will provide you with 5 tips for getting started in modeling. We will cover everything from finding the right agency to preparing for your first shoot</p>
    </div>`,
    slug: '5-tips-for-getting-started-in-modeling',
    is_featured: false,
    author: {
      id: 3,
      name: 'Jenna Smith',
    },
    featured_photo: model,
    event: events[1],
    next_blog: {
      id: 4,
      title: 'The Importance of Networking for Models',
      slug: 'the-importance-of-networking-for-models',
      excerpt:
        'Networking is an essential part of any modeling career. It is a way to meet new people, learn about new opportunities, and build relationships with industry professionals.',
      author: {
        id: 1,
        name: 'Ben Jones',
      },
      event: events[0],
    },
  },
  {
    id: 4,
    title: 'Stealing the Spotlight at Cosplay Events',
    excerpt:
      'Cosplay events are more than just a celebration of creativity and fandom—they offer unique opportunities for models to showcase their versatility and connect with niche audiences.',
    content: `<div>
    <p>Cosplay events are a perfect stage for models to demonstrate their adaptability and embrace creative roles. Whether it’s embodying iconic characters or showcasing intricate costumes, these events can help models stand out in the industry.</p>
    <p>In this blog, we delve into how participating in cosplay events can help models build a unique portfolio, expand their network, and gain recognition in niche markets. We also share tips on how to prepare and shine at these exciting events.</p>
    </div>`,
    is_featured: false,
    slug: 'stealing-the-spotlight-at-cosplay-events',
    author: {
      id: 2,
      name: 'Maxine Miller',
    },
    event: events[3],
    next_blog: {
      id: 5,
      title: 'Top Trends to Look Out for at Car Shows',
      slug: 'top-trends-to-look-out-for-at-car-shows',
      excerpt:
        'Car shows are a great opportunity to discover the latest trends and technologies in the automotive industry. From electric vehicles to futuristic designs, there is always something exciting to see.',
      author: {
        id: 1,
        name: 'Ben Jones',
      },
      event: events[0],
    },
  },
];

export const moreBlogs: TypeBlog[] = [
  {
    id: 5,
    title: 'Top Trends to Look Out for at Car Shows',
    excerpt:
      'Car shows are a great opportunity to discover the latest trends and technologies in the automotive industry. From electric vehicles to futuristic designs, there is always something exciting to see.',
    content: `<div>
    <p>Car shows are not just for car enthusiasts; they are also valuable for models who want to understand how they can align themselves with automotive brands. Networking at car shows can open doors to campaigns, partnerships, and promotional opportunities.</p>
    <p>In this blog, we explore the latest trends showcased at car shows and provide tips on how models can make the most of these events to advance their careers.</p>
    </div>`,
    featured_photo: slider01,
    is_featured: false,
    slug: 'top-trends-to-look-out-for-at-car-shows',
    author: {
      id: 1,
      name: 'Ben Jones',
    },
    event: events[0],
    next_blog: {
      id: 6,
      title: 'How Cosmetic Events Can Boost Your Modeling Career',
      slug: 'how-cosmetic-events-can-boost-your-modeling-career',
      excerpt:
        'Cosmetic events are more than just product showcases; they are an opportunity for models to shine and connect with key players in the beauty industry.',
      author: {
        id: 2,
        name: 'Maxine Miller',
      },
      event: events[1],
    },
  },
  {
    id: 6,
    title: 'How Cosmetic Events Can Boost Your Modeling Career',
    excerpt:
      'Cosmetic events are more than just product showcases; they are an opportunity for models to shine and connect with key players in the beauty industry.',
    content: `<div>
    <p>Cosmetic events are perfect for models looking to establish themselves in the beauty industry. From walking the runway for new product launches to collaborating with influencers, these events offer numerous opportunities.</p>
    <p>This blog will guide you on how to stand out at cosmetic events and build connections that can lead to exciting projects in the beauty sector.</p>
    </div>`,
    featured_photo: slider04,
    is_featured: false,
    slug: 'how-cosmetic-events-can-boost-your-modeling-career',
    author: {
      id: 2,
      name: 'Maxine Miller',
    },
    event: events[1],
    next_blog: {
      id: 7,
      title: 'Leveraging Tech Events for Professional Growth',
      slug: 'leveraging-tech-events-for-professional-growth',
      excerpt:
        'Tech events are not just for developers and tech enthusiasts—they’re also great for models looking to work with innovative brands.',
      author: {
        id: 3,
        name: 'Jenna Smith',
      },
      event: events[2],
    },
  },
  {
    id: 7,
    title: 'Leveraging Tech Events for Professional Growth',
    excerpt:
      'Tech events are not just for developers and tech enthusiasts—they’re also great for models looking to work with innovative brands.',
    content: `<div>
    <p>Tech events are rapidly gaining popularity as a platform for showcasing futuristic ideas and innovative products. For models, these events are a unique opportunity to collaborate with tech startups and global brands.</p>
    <p>In this blog, we discuss how models can approach tech events, from preparing portfolios that align with tech-focused brands to building connections with event organizers and exhibitors.</p>
    </div>`,
    featured_photo: slider05,
    is_featured: false,
    slug: 'leveraging-tech-events-for-professional-growth',
    author: {
      id: 3,
      name: 'Jenna Smith',
    },
    event: events[2],
    next_blog: null,
  },
];
