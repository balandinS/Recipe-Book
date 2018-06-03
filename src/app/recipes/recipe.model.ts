import { Ingredien } from '../Shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredeints: Ingredien[];

    constructor( name: string, desc: string, imagePath: string, ingredietns: Ingredien[]) {
     this.name = name;
     this.description = desc;
     this.imagePath = imagePath;
     this.ingredeints = ingredietns;
    }
}
