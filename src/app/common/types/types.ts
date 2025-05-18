type Card = {
    title: string;
    description: string;
    type: "Feature" | "Bug" | "Enhancement" | string; // შეგიძლია ზუსტი ტიპები მიუთითო ან უბრალოდ string
    upvotes: number;
    comments: number;
    color: string;
  };
  
  type FeedbackStatusSection = {
    status: "Planned" | "In-Progress" | "Live" | string;
    description: string;
    color : string,
    cards: Card[];
  };
  
export type FeedbackBoard = FeedbackStatusSection[];