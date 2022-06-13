export interface BlogdataI {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    date: string;
    subtitle: string;
    profileimage: string;
    profilename: string;
    profilesummary: string; 
    details: [{
        tag: string;
        className: string;
        content: string;
        media: string;
    }]
        
  }