# Problem 3:

List out the computational inefficiencies and anti-patterns found in the code block below.

1.  This code block uses

-   ReactJS with TypeScript.
-   Functional components.
-   React Hooks

2.  You may also provide a refactored version of the code, but that does not give you any more points than stating the issues and explaining correctly how to improve them.

---

Computational Inefficiencies and anti-patterns

1. Props, for WalletPage, the props object is destructured to get the children property, but it is not used anywhere in the component. This is an unused prop, which is an anti-pattern

2. The blockchain parameter in getPriority is typed as any, which weakens type safety. It's better to use a more specific type or union type for blockchains.

3. getPriority function returns -99 as the default priority for unknown blockchains. This value might be unclear and could lead to confusion. A more meaningful default value such as 0 would have been better.

4. getPriority function is used in the sortedBalances array, which is called repeatedly for each element during sorting. This can result in inefficient sorting, especially if the array is large. It would be more efficient to calculate the priorities once and store them in the balances array before sorting.

5. lhsPriority is not defined, it looks to be defined wrongly and should've been balancePriority instead.

6. In useMemo, the filter condition if (lhsPriority > -99) is always true because it checks if a positive number is greater than a negative number. This condition is redundant and can be simplified.

7. Many inefficiencies in sortedBalances, it recalculates the priority for 'lhs' and 'rhs' in each comparison. Better to calculate the priorities once and store them to improve performance.

8. useMemo hook depends on balances and prices, but it does not include prices in its dependency array. This can lead to unexpected behavior if prices change, and sortedBalances relies on them.
