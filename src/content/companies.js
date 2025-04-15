import cvent from '../images/companies/cvent.png';
import trove from '../images/companies/trove.png';
import vrbo from '../images/companies/vrbo.png';
import zenbusiness from '../images/companies/zenbusiness.png';

const companies = [
  {
    link: 'https://www.trove.com/',
    image: trove,
    name: 'Trove Recommerce',
    description:
      'Trove creates scalable, branded resale solutions for brands, allowing them to create additional revenue by selling gently used product. I worked on their warehouse management SaaS solution, as well as administration tools used by warehouse managers and customer service.',
    tech: ['React', 'JavaScript', 'Node', 'Express', 'GraphQL', 'Postgres'],
    id: 0,
  },
  {
    link: 'https://www.zenbusiness.com/',
    image: zenbusiness,
    name: 'ZenBusiness',
    description:
      'ZenBusiness helps customers go from idea to small business owner, with tools to create and register their business at the beginning and manage their business, from first sale to first employee and beyond. I worked on our customer registration page and business management dashboards, as well as our custom chat solution that became the go-to for customer interaction with our products.',
    tech: [
      'React',
      'JavaScript',
      'Node',
      'GraphQL',
      'Python',
      'Typescript',
      'Postgres',
    ],
    id: 1,
  },
  {
    link: 'https://www.cvent.com/',
    image: cvent,
    name: 'Cvent',
    description:
      'Cvent is an all-in-one event management SaaS platform. I worked on the custom site builder, customizable customer portal, and a solution to allow customers to request 1-on-1 meetings with our clients.',
    tech: ['React', 'JavaScript', 'Java', 'C#', 'Postgres'],
    id: 2,
  },
  {
    link: 'https://www.vrbo.com/',
    image: vrbo,
    name: 'Vrbo',
    description:
      'Vrbo, an Expedia brand, is a marketplace for full-property vacation rentals. You may know it as Vrbo, HomeAway, FeWo-Direkt, or many other of their global brands. I worked on a large variety of products here, including machine translation solutions, image storage and serving, destination specific landing pages, and the service that served all content related to the vacation rental properties.',
    tech: ['Java', 'Spring', 'Mongo', 'Scala', 'Python'],
    id: 3,
  },
];

export default companies;
