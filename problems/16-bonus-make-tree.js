/***********************************************************************
Write a recursive function `makeTree(categories, parent)` that takes an array of
categories objects, each of which have an id property, and a parent property and
returns a nested tree of those objects using the parent properties to construct
the tree.

A parent value of null means you are at the bottom of the tree and the category
has no parent, so the default value parent is be null if no parent is
provided.

Example 1:

Given an array of objects with id properties to create our tree:

const categories1 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);

We should return a tree like this:

{
  animals: {
    mammals: {}
  }
}

Example 2:
Now imagine we have a database that returns a bunch of rows of data:

const categories2 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
];

Then we call the function with the categories:
const tree2 = makeTree(categories2, null);

The call above should return the tree below:

{
    animals: {
        mammals: {
            dogs: {
                chihuahua: {},
                labrador: {}
            },
            cats: {
                persian: {},
                siamese: {}
            }
        }
    }
}

***********************************************************************/

const makeTree = (categories, parent) => {
  // initialise empty object to store the tree
  const tree = {};

  // filter categories to get only those with the specified parent
  categories
      .filter(category => category.parent === parent)
      // for each category with the specified parent
      .forEach(category => {
        // recursively call makeTree to build subtree for this category
        // assign subtree to the category's id key in the tree object
        tree[category.id] = makeTree(categories, category.id);
      });

      // return the constructed tree
      return tree;
};

/* To implement the 'makeTree'function recursively in JavaScript, we can follow these steps:

1. Initialise an empty object to store the tree
2. Iterate through the categories array
3. For each category:
  - if the parent is null, it's a root category, so add it directly to the tree object
  - If the parent is not null, recursively add the category to its parent's children category */

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeTree;
} catch (e) {
  module.exports = null;
}

// This problem was inspired by a Fun Fun Function video:
// https://www.youtube.com/watch?v=k7-N8R0-KY4
