# Layouts

As with Regular CSS, we can create responsive layouts for our web pages with the use of Grid and Flex. We won't repeat the information learned about Grid and Flex that was covered in the CSS material, but we will discuss how to utilize them using Tailwind Utility Classes.


 In CSS, we need to set the display to flex, flex-direction to row or column, etc. With Tailwind we can use the utility classes `flex flex-row` and we're done. For Grid, we need a container element to define the grid and its dimensions. 

 Here are some useful Flex related utilty classes:
 - **flex** sets the display to flex
 - **flex-[row | column]** sets the direction of flex to row or column

 Here are some useful Grid related utility classes:
 - **grid** sets the display to grid
 - **grid-[rows | cols]-X** sets the number of rows or columns (ex. grid-cols-2)
    - we can also use a custom value for the number of rows/columns, or set multiple values for different rows/columns separated with an underscore `_`. We will see an example of this in the lab.
 - **[row | col]-span-X** allows an element to extend along the column or row the specified number of times. (ex. col-span-2 will have the element take up two rows within that column)

 And here are some useful utility classes that can be used for both Flex and Grid:
 - **gap-X** sets the distance between elements (eg. gap-4)
 - **justify-[content]** controls how elements are positioned on containers main axis (eg. justify-center)
 -  **align-items** controls how elements are positioned on containers cross axis (eg. items-center)
 - **sm:** a prefix that applies the styles from the small breakpoint (640px) and larger. (eg. sm:grid-cols-2 will set the grid columns to 2 for screens at that point or larger)

