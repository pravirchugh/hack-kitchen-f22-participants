#include <iostream>
#include <set>
using namespace std;

int getUniqueIngredients(string ingredients[], int size) {
    

    string arr[size];

    for(int i = 0; i < size; i++){
        arr[i] = "";
    }

    for(int i = 0; i < size; i++){
        for(int j = 0; j < ingredients[i].length(); j++){
            if(isalpha(ingredients[i][j])){
                arr[i] += tolower(ingredients[i][j]);
            }

        }
    }

    set<string> vals;


    for(int i = 0; i < size; i++){
        vals.insert(arr[i]);
    }

    return vals.size();
    
}