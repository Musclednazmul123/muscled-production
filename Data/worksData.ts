import { WorksI } from "Interfaces/Works.interface";
import { v4 as uuidv4 } from 'uuid';

  
  export  const works: WorksI[] = [
    {
      id: uuidv4(),
      title: 'Barumba',
      description: "Sarah, fresh out of leaving her accounting firm job and deciding to dive head first into the world of Shopify online retail business reached out to us and we designed her website on Figma before building it out on Shopify.",
      image: '/services-media/barumba.png',
      category: 'Shopify Store Development',
      date: '27th May, 2022',
    },
    {
      id: uuidv4(),
      title: 'Recreation Outfitters',
      description: "Mark Bryce, the CEO of Recreation Outfitters, came to us with a Shopify store that had over 40,000 products. We built functionalities on his store that increased time spent on site and revenue, which ultimately helped boost his organic traffic and paid ads data.",
      image: '/services-media/ro.png',
      category: 'Shopify On-Going Theme Development',
      date: '27th May, 2022',
    },
    {
      id: uuidv4(),
      title: 'Grey Goat Supply Dynamic Pricing',
      description: "Mike reached out to one of our technical project managers that understood his vision for creating an app that would allow him to control the price of his products based on various customer groups he'd create by tagging his Shopify customers, thereby increasing his revenue by 20% month over month",
      image: '/services-media/ggs-app.png',
      category: 'Shopify Custom App Development',
      date: '27th May, 2022',
    },
    {
      id: uuidv4(),
      title: 'Peace Living - peace-living.com',
      description: "Client reached out to us to build a Shopify store that will host thousands of products from wholesalers in USA and Canada. We built the brand from scratch, from coming up with the brand name, logo, colors, brand identity, social media posts and paid ads.",
      image: '/services-media/peach-living.png',
      category: 'Shopify Store Development',
      date: '27th May, 2022',
    },
    {
      id: uuidv4(),
      title: 'Ecofit H2O',
      description: "Client came to us with a list of competitors, their own branding and how they are different from everyone else. We then designed an online store using assets provided by the client.",
      image: '/services-media/ecofit-h20.png',
      category: 'Web App Development',
      date: '27th May, 2022',
    },
    {
      id: uuidv4(),
      title: 'Recreation Outfitters Custom App',
      description: "Custom Product Bundle App",
      image: '/services-media/ro.png',
      category: 'Shopify Custom App Development',
      date: '27th May, 2022',
    },
  ];