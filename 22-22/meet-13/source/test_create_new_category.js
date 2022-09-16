
// 1. Намери бутона Add New Category
const actionAddNewCategory = document.querySelectorAll("button")[5];

// 2. кликни върху същия
actionAddNewCategory.click();

// 3. избери полето Add New Category Name
const actionInputAddNewCategoryName = document.querySelectorAll(".form-text-input")[1];
actionInputAddNewCategoryName.value = "Sample new Category";

const actionTextAreaDescription = document.querySelectorAll(".form-textarea")[0];
actionTextAreaDescription.value = "Sample description";