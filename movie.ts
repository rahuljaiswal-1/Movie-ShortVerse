export interface Movie {
     id: number;
     title: string;
     poster: string;
     backdrop?: string;
     description: string;
     rating: number;
     year: number;
     genre: string[];
     cast?: string[];
     trailer?: string;
     videoUrl?: string;
     duration?: string;
}

export interface User {
     id: string;
     email: string;
     name: string;
     myList: number[];
}
