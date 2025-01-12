""" 
Given a list of ingredients with [ingredient, cost, minimum_required] and budget

Gordon needs this program to maximize the number of distinct ingredients that he can 
    purchase before purchasing more of a single ingredient, prioritizing ingredients that
    can have their minimum_required met (or closest to meeting) within the budget.
    - In cases where minimum_required cannot be met, minimize the amount of money used.
 
Return a shopping list of ingredients with the quantity that Gordon can buy. It should be in
    the form of [[ingredient, quantity], [ingredient, quantity], ...]. 
    - The list can be returned in any order.
    - If no ingredients can be purchased, return [] (an empty list)

Constraints: 
    - All prices are non-negative. 
    - Ingredient list will contain at least 1 ingredient.
    - This is only for a dessert service, so the ingredient list will be limited to 50 distinct ingredients.
    - Gordon is rich, so the budget is limited to a generous 500000

###############################################################################
Example 1
Ingredients:    [["flour", 3.59, 2],
                ["egg", 0.99, 6],
                ["baking soda", 3.49, 1]]
Budget: 13
Return: [["flour", 2], ["egg", 2], ["baking soda", 1]]
Explanation: 
    Prioritize one of each item first. Add 1 bag of flour, 1 egg, and 1 box of baking soda. 
    This totals 8.07. 
    Next, prioritize the other bag of flour since the minimum_requirement can be reached.
    This totals 8.07 + 3.59 = 11.66
    Finally, only the eggs are left to purchase. Purchase as many eggs as possible. In this case, only 1 
    more egg can be purchased to stay under budget.
    This totals 11.66 + 0.99 = 12.65 < 13

###############################################################################
Example 2
Ingredients:    [["flour", 3.59, 2],
                ["egg", 0.99, 6],
                ["baking soda", 3.49, 1]]
Budget: 7
Return: [["baking soda", 1], ["egg", 3]]
Explanation:
    Prioritize one of each item. Add 1 egg and 1 box of baking soda. 
    This totals 4.48
    Flour cannot be added to the shopping list because it would go over budget. (4.48 + 3.59 > 7)
    Since there is 7 - 4.48 = 2.52 left, purchase 2 more eggs. 
    This totals 6.46 < 7
"""

# Dessert service starts in 30 minutes, so complete the function asap and don't disappoint Gordon!
def get_ingredients(ingredients, budget):
    # Write your code here

    ingredients.sort(key=lambda x: x[1])

    #print(ingredients)

    # prioritize one of each ingredient first

    ans = [];

    for oneD in ingredients:
        if(budget >= oneD[1]):
            ans.append([oneD[0], oneD[1], 1]);
            budget -= oneD[1];
        else:
            return ans;
    # now sort by price * ingredientsRemaining - 1;

    reference = [];
    count = 0;
    for oneD in ingredients:

        if(oneD[1] * (oneD[2] - 1) > 0):
            reference.append([oneD[1] * (oneD[2] - 1), oneD[0], count]); # remanining amount left needed to reach minimum
        count = count + 1;
    
    reference.sort(key=lambda x: x[0])

    #print(ans);

    #print(reference);

    # now we go through and try to satisfy minimums:

    mainlength = len(ingredients);

    for e in range(mainlength):
        if(budget >= reference[e][0]):
            budget -= reference[e][0]; # budget set for next iteration

            # fully add this ingredient to our list

            for f in range(len(ans)):
                if(ans[f][0] == reference[e][1]):
                    ans[f][2] = ingredients[reference[e][2]][2];
                    #print(ingredients[e][2]);
                    break;

    finalans = [];

    for oneD in ans:
        finalans.append([oneD[0], oneD[2]]);
    return finalans;

if __name__ == '__main__':
    # Edit ingredients and budget to test your program
    ingredients = [["water", 2.99, 3], ["fruit", 3.99, 2], ["veggies", 1, 5]]
    budget = 12
    print(get_ingredients(ingredients, budget))