import fs from 'fs';
import recipeInterface from '../interfaces/recipe';

class FileSystem {
	static readRecipe(path: string): recipeInterface {
		return JSON.parse(fs.readFileSync(path).toString());
	}
}

export default FileSystem;