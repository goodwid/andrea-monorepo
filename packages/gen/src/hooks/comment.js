import { useState, useCallback } from 'react';

const useArray = (initial = [])=> {
  const [value, setValue] = useState(initial);
  const add = useCallback(a => setValue(prev => [...prev, a]));
  const clear =  useCallback(() => setValue(() => []));
  return [
    value,
    setValue,
    add,
    clear
  ];
};

export const useCategory = (data) => {
  const [choices, _, add, __] = useArray(data.choices);
  const [title] = useState(data.title);
  const [choice, choose] = useState(0);

  return [choices[choice], add, choices, choose, title];
};

// export const useCategory = initial => {
//   const [value]
// }

// class Category {
//   constructor(data) {
//     this.title = data.title;
//     this.selected = 0;
//     this.choices = data.choices || [];
//     this.getChoice.bind(this);
//     this.addChoice.bind(this);
//     this.allChoices.bind(this);
//     this.choose.bind(this);
//   }

//   getChoice = () => {
//     return this.choices[this.selected];
//   }
//   addChoice = (data) => {
//     if (typeof data !== 'string') throw 'Data must be a string.';
//     this.choices.push(data);
//     console.log(this.choices);
//   }
//   allChoices = () => {
//     return this.choices;
//   }
//   choose = (choice) => {
//     this.selected = choice;
//     console.log('selected: ', this.selected);
//   }
// }

// export const useCategory = (data) => {

//   const [category] = useState(new Category(data));
//   const { getChoice, addChoice, allChoices, choose, title } = category;
//   console.log('run once?');
//   useEffect(() => {
//     console.log('changed', category);
//   }, [category.allChoices()]);

//   return [getChoice(), addChoice, allChoices, choose, title];
// };


// const useCagetories = () => {

//   const [selectedCategory, selectCategory] = useState(0);
//   const [categories, setCategory] = useCategory();
//   const addChoice = (data) => {
//     if (typeof data !== 'string') throw 'Data must be a string.';
//     setCategory(prevState => prevState.push(data));
//   };

//   return [choice, setChoice, addChoice, categories];
// };

// export const useComments = () => {

//   const [selected, setSelected] = useState(0);
//   const [choice, setChoice, addChoice, categories] = useCagetories();

// };
