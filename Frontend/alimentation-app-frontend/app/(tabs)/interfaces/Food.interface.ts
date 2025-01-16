interface Food {
    id:number;
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    description: string;
    image_url?: string;  
    brand?: string;      
}

export default Food;