# Justins Nutrition App

[Linkedin](https://www.linkedin.com/in/jjunious/)

### **_Description_**

- Meal Planning App
  ![Meal-Plan](/Images/Screen%20Shot%202022-10-28%20at%2012.05.55%20PM.png 'Text to show on mouseover')
  The purpose of this application is to give you the ability

  ### **_Technologies Used_**

  - React
  - MongoDB
  - Node.js
  - Express.js
  - Javascript
  - Html
  - Css
  - Mongoose

  ### **_Getting Started_**

#### **_Duplicating app_**

If you would like to copy the entire app and modify you can follow these steps.

- `Fork` and `clone` this repository
- `cd` into the repo
- run `npm install` in the root directory

This will get you the base files and code for the application. In order to get a database you will have to a `MongoDB` account and create a database following the Schemas inside the `meals` folder in the root directory.

- Next you will connect you MongoDB account by updating the `.env` with your Mongo compass URl. [Here is more information](https://www.mongodb.com/languages/mern-stack-tutorial#connecting-to-mongodb-atlas) on connection

Once that is configured you should be able to use the app as is to access your data and nmodify as you wish.

#### **_Starting from Scratch_**

- Create your own Repository
- `Fork` and `clone` that repository
- ```sh
  npm init -y
  npm install mongoose
  mkdir db meals
  touch db/index.js meals/days.js meals/recipe.js meals/food.js server.js
  ```

````
From here you will configure your schemas in your meals directory and connect your db in the index.js.

- After that connect your server.js and start making your routes to produce CRUD in your database.

Once this is done, tested and working as you expect you can run

```sh

  - #### Board used to track project [Monday Board](https://view.monday.com/3399388922-7248cbd95601e76bf4d3227d5d8c5af0?r=use1)

  - #### Heroku Deployment [Heroku Deployment](https://justins-nutrition-app.herokuapp.com/)

##### **_Rough Lucid Diagram_**

I used this diagram as a reference to understand user experience and how the database would connect/flow.
Feel free to modify this and make your own.

![Hierarchy](/Images/Screen%20Shot%202022-10-28%20at%2012.19.47%20PM.png)

### **_Future Updates_**

- Add Calendar to Meal creation page that displays created meals on the approriate section

- Add the ability on the Recipes page to display total calories per Recipe

- Add on Calendar day total Calories and Nutrition for the day

- Add the ability to favorite recipes and Meal days

- Maybe add User support
````
