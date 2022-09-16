
setTimeout(function() {
    const actionAddNewCategory = document.querySelectorAll("button")[5];    
    actionAddNewCategory.click();

    setTimeout(function() {
        
        const actionInputAddNewCategoryName = document.querySelectorAll(".form-text-input")[1];
        actionInputAddNewCategoryName.focus();
        actionInputAddNewCategoryName.blur();
        actionInputAddNewCategoryName.value = "Experiment Category";

        const actionTextAreaDescription = document.querySelectorAll(".form-textarea")[0];
        actionTextAreaDescription.value = "Sample description";

        setTimeout(function() {
            const actionButtonAdd = document.querySelectorAll(".button")[9];
            actionButtonAdd.disabled = false;
            actionButtonAdd.click();
        }, 1000);

    }, 2000);

}, 1000);