export interface IProduct{
    id:     number;
    tittle: string;
    price: number;
    description: string;
    category: Category;
    image: string;
    rating: Rating;
    
}

export enum Category{
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSclothing = "men's clothing",
    WomenSclothing = "women's clothing"
}

export interface Rating{
    rate: number;
    count: number;
}

