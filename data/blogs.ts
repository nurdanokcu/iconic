import type { TypeBlog } from "~/types/blogs";
import { image01, image02 } from "~/assets/images";
import { events } from "~/data/events";

export const blogs: TypeBlog[] = [
  {
    id: 1,
    title: "The Importance of Networking for Models",
    content: `<div>
  <p>Networking is an essential part of any modeling career. It is a way to meet new people, learn about new opportunities, and build relationships with industry professionals.</p>
  <p>In this blog post, we will discuss the importance of networking for models. We will also provide some tips on how to network effectively.</p>
  </div>`,
    featuredPhoto: image01,
    isFeatured: false,
    slug: "the-importance-of-networking-for-models",
    author: {
      id: 1,
      name: "Ben Jones",
    },
    event: events[0],
  },
  {
    id: 2,
    title: "How to Choose the Right Modeling Agency for You",
    slug: "how-to-choose-the-right-modeling-agency-for-you",
    content: `<div>
  <p>Choosing the right modeling agency is an important decision for any aspiring model. There are many factors to consider, such as the agency's reputation, the type of modeling they specialize in, and their location.
  In this blog post, we will discuss some of the key factors to consider when choosing a modeling agency. We will also provide some tips on how to find the right agency for you.</p>
  <p>Choosing the right modeling agency is an important decision for any aspiring model. There are many factors to consider, such as the agency's reputation, the type of modeling they specialize in, and their location.
  In this blog post, we will discuss some of the key factors to consider when choosing a modeling agency. We will also provide some tips on how to find the right agency for you.</p>
  </div>`,
    featuredPhoto: image02,
    isFeatured: true,
    author: {
      id: 2,
      name: "Maxine Miller",
    },
    event: events[3],
  },
  {
    id: 3,
    title: "5 Tips for Getting Started in Modeling",
    content: `<div>
    <p>So you want to be a model? Congratulations! Modeling can be a great career, but it takes hard work and dedication.</p>
    <p>In this blog post, we will provide you with 5 tips for getting started in modeling. We will cover everything from finding the right agency to preparing for your first shoot.
    In this blog post, we will provide you with 5 tips for getting started in modeling. We will cover everything from finding the right agency to preparing for your first shoot
    In this blog post, we will provide you with 5 tips for getting started in modeling. We will cover everything from finding the right agency to preparing for your first shoot
    In this blog post, we will provide you with 5 tips for getting started in modeling. We will cover everything from finding the right agency to preparing for your first shoot</p>
    </div>`,
    slug: "5-tips-for-getting-started-in-modeling",
    isFeatured: false,
    author: {
      id: 3,
      name: "Jenna Smith",
    },
    event: events[1],
  },
  {
    id: 4,
    title: "The Importance of Networking for Models",
    content: `<div>
  <p>Networking is an essential part of any modeling career. It is a way to meet new people, learn about new opportunities, and build relationships with industry professionals.</p>
  <p>In this blog post, we will discuss the importance of networking for models. We will also provide some tips on how to network effectively.</p>
  </div>`,
    slug: "the-importance-of-networking-for-models",
    isFeatured: false,
    author: {
      id: 3,
      name: "Jenna Smith",
    },
    event: events[2],
  },
];
