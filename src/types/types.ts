export interface RecipeRevenge {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface MeasureUnit {
  unit: {
    amount: number;
    unitShort: string;
    unitLong: string;
  };
}

export interface Ingredient {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export interface IngredientExtended {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: MeasureUnit[];
}

export interface InstructionStep {
  number: number;
  step: string;
  ingredients: Ingredient[];
  equipment: string[];
}

export interface Instructions {
  name: string;
  steps: InstructionStep[];
}

export interface Recipe {
  uri: string;
  label: string;
  image: string;
  images: {
    THUMBNAIL: {
      url: string;
      width: number;
      height: number;
    };
    SMALL: {
      url: string;
      width: number;
      height: number;
    };
    REGULAR: {
      url: string;
      width: number;
      height: number;
    };
    LARGE: {
      url: string;
      width: number;
      height: number;
    };
  };
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: [
    {
      text: string;
      quantity: number;
      measure: string;
      food: string;
      weight: number;
      foodId: string;
    }
  ];
  calories: number;
  glycemicIndex: number;
  totalCO2Emissions: number;
  co2EmissionsClass: string;
  totalWeight: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  instructions: string[];
  tags: string[];
  externalId: string;
  totalNutrients: {};
  totalDaily: {};
  digest: [
    {
      label: string;
      tag: string;
      schemaOrgTag: string;
      total: number;
      hasRDI: true;
      daily: number;
      unit: string;
      sub: {};
    }
  ];
}

export interface EDRequest {
  from: number;
  to: number;
  count: number;
  _links: {
    self: {
      href: string;
      title: string;
    };
    next: {
      href: string;
      title: string;
    };
  };
  hits: [
    {
      recipe: Recipe;
      _links: {
        self: {
          href: string;
          title: string;
        };
        next: {
          href: string;
          title: string;
        };
      };
    }
  ];
}

export interface RecipeSP {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: IngredientExtended[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  instructions: string;
  analyzedInstructions: Instructions[];
  originalId: number;
  spoonacularSourceUrl: string;
}


export interface User {
  user: string;
  pass: string;
}