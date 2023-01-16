import { IData } from '../types';

const data: IData = {
  data: {
    personalDetails: {
      name: 'Meet Bavishi',
      profile: 'Full-Stack Developer',
      about:
        'I am a full-stack web developer. The technologies I have mainly used are C# with .NET Core and Python with Django framework and ready to learn new technology as well. I wish to get a position where my skill is utilized as much as possible.',
      profileImage: 'meetbavishi.png',
    },

    education: {
      colleges: [
        {
          name: 'Indus University, Ahmedabad',
          courseTag: 'MSc-IT',
          course: 'Master of Science in Information Technology',
          year: {
            start: 2020,
            end: 2022,
          },
        },
        {
          name: "Indus University, Ahmedabad",
          courseTag: 'BSc-IT',
          course: 'Bachelor of Science in Information Technology',
          year: {
            start: 2017,
            end: 2020,
          },
        },
      ],
    },

    workExperience: {
      jobs: [
        {
          name: 'AllianceTek',
          position: 'Full-Stack developer',
          description:
            'Worked on Several modules (backend and frontend) for development of Sage Holistics Project.',
          duration: 'Running',
          year: {
            start: 2022,
            end: 0,
          },
        },
        {
          name: 'AllianceTek',
          position: 'Intern',
          description:
            'I built Mall Management System for managing Store owners and Mall owners with all the functionalities with C#(.NET Core).',
          duration: '6 Months',
          year: {
            start: 2022,
            end: 2022,
          },
        },
        {
          name: 'Infiraise',
          position: 'Intern',
          description:
            'Worked on an application used to in hiring people for the company.',
          duration: '3 Months',
          year: {
            start: 2021,
            end: 2021,
          },
        },
      ],
    },

    personalProjects: {
      tagLine: '{{coding}} is belong from Array.hobbies',
      projects: [
        {
          name: 'Hospital Management System',
          stack: 'Python',
          description:
            'Created a management system for booking appointments and creating voice based prescription and other requirements of managing hospital.',
          year: 2021,
          status: 0,
        },
        {
          name: 'Automated Food Ordering System',
          stack: 'PHP',
          description:
            'A Basic food ordering system which helps to add and order food items inside cart from the respective college canteen.',
          year: 2020,
          status: 0,
        },
      ],
    },

    techSkill: {
      fullStack: ['C#-.NET Core', 'Python', 'Django', 'PHP'],
      database: ['Postgres', 'MongoDB', 'MsSQL'],
    },

    languages: ['Gujarati', 'Hindi', 'English'],

    contactDetails: [
      {
        platform: 'Phone',
        text: '+91 9054226959',
        link: 'tel://919054226959',
      },
      {
        platform: 'Email',
        text: 'meetbavishi7j6@gmail.com',
        link: 'mailto://meetbavishi7j6@gmail.com',
      },
      {
        platform: 'LinkedIn',
        text: '@meetbavishi',
        link: 'https://www.linkedin.com/in/meet-bavishi',
      },
      {
        platform: 'WhatsApp',
        text: '+91 9054226959',
        link: 'https://wa.me/919054226959/',
      },
      {
        platform: 'Telegram',
        text: '@meetbavishi',
        link: 'https://t.me/meetbavishi',
      },
    ],
  },
};

export default data;
