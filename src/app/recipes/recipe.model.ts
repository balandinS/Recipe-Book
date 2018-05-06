import { Ingredien } from '../Shared/ingredient.model';

export class Recipe {
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredeints: Ingredien[];

    constructor(id: number, name: string, desc: string, imagePath: string, ingredietns: Ingredien[]) {
     this.id = id;
     this.name = name;
     this.description = desc;
     this.imagePath = imagePath;
     this.ingredeints = ingredietns;
    }
}
