#include "getUniqueIngredients.h"
#include <iostream>
using namespace std;

int main() {
    // add your own test cases here!
    string ingredients1[] = {"egg", "tomato", "cheese", "bread", "jam"};
    if(getUniqueIngredients(ingredients1, 5) == 5){
        cout << "Passed test case!" << endl;
    } else {
        cout << "Failed test case :(" << endl;
    }

    string ingredients2[] = {"egg", "cheE234234234 se", "cheese", "bread", "jam"};
    if(getUniqueIngredients(ingredients2, 5) == 4){
        cout << "Passed test case!" << endl;
    } else {
        cout << "Failed test case :(" << endl;
    }
}