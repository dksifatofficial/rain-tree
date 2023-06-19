import Image from "next/image";
import ProDetails from "../components/ProDetails";
import classes from './styles.module.css'
// import BackButton from "../components/BackButton";

function Cooking() {
  return (
    <div className={classes.container}>
        {/* <BackButton /> */}
        <Image className={classes.img1} src="/image/2_2.jpg" alt="" height="300" width="500" />
      <ProDetails>
        <h1>Cooking Recipes Anytime And Anywhere</h1>
        <h5>Cooking • Dec 31, 2022</h5>
        <p>
          The popularity of breakfast foods is a good reason to keep dependable
          starters, such as eggs, bread and other staples, on hand. But why
          reserve them only for morning meals? Planning breakfast for dinner is
          a good way to serve up simple, satisfying evening meals without
          spending a lot of time in the kitchen.
        </p>
        <p>
          A strata is one easy-to-prepare dish that can go from breakfast to
          dinner with ease. The word strata means layers and the layers of
          Tomato Strata Florentine are simply cubed bread, torn spinach and
          seasoned chopped tomatoes. An egg-milk custard poured over the top
          binds the bright-colored layers together and causes the bread to puff
          up during baking.
        </p>
        <p>
          For single diners or families whose members eat at separate times,
          bake the ingredients in individual custard cups which you can
          refrigerate and reheat in the microwave. For a family meal, use a
          baking pan. Either way, you can make the strata the night before you
          want to serve it. Simply leave a note for the first one home to pop it
          into the oven.
        </p>
        <p>
          This budget-wise combination is nutrient dense. Along with cheese and
          milk, the eggs provide about 1/3 of your daily protein needs, while
          the bread and tomato supply carbohydrates. Together, the ingredients
          add up to an impressive array of needed vitamins and minerals, at less
          than 200 calories and only 8 grams of fat per serving. Other breakfast
          dishes make good dinners, too. Quick-cooking scrambled eggs are easy
          to dress up with pasta or rice and onions, peppers, mushrooms or other
          flavoring foods. Poached eggs combine well with breads, veggies and
          cheeses.
        </p>
        <Image src="/image/cook_mid.jpg" alt="" height="300" width="500" />
        <h2>Tomato Strata Florentine</h2>
        <div className={classes.material}>
        <p>
          4 servings
          <br />
          Cooking spray
          <br />
          2 cups torn fresh spinach (about 4 oz.)
          <br />
          2 slices whole wheat bread, cubed (about 1 1/2 cups)
          <br />
          1 cup chopped fresh tomato (about 1 medium)
          <br />
          1 teaspoon Italian seasoning, crushed
          <br />
          4 eggs
          <br />
          1 cup skim or low-fat (1%) milk
          <br />
          1/4 cup (1 oz.) shredded low-moisture, part-skim mozzarella cheese
        </p>
        </div>
        
        <p>
          For individual cups: Evenly coat 4 (10-ounce) custard cups with spray.
          Place 1/2 cup of the spinach in each cup. Sprinkle each with about 1/3
          cup of the bread cubes. In medium bowl, stir together tomato and
          seasoning until tomato is evenly coated with seasoning. Spoon 1/4 cup
          tomato mixture over bread cubes in each cup. In medium bowl, beat
          together eggs and milk. Slowly pour scant 1/2 cup egg mixture over
          tomato mixture in each cup. Sprinkle each with 1 tablespoon of the
          cheese.
          <br />
          <br />
          Bake in preheated 350 degree F oven until custards are puffed and
          begin to pull away from sides of cups and knife inserted near centers
          comes out clean, about 30 minutes. For baking pan: Layer entire
          amounts of all ingredients as above in sprayed 8 x 8 x 2-inch baking
          pan. Bake as above.
          <br />
          <br />
          Nutritional information for 1 serving of 1/4 recipe using skim milk:
          175 calories, 8 gm total fat, 218 mg cholesterol, 238 mg sodium, 469
          mg potassium, 14 gm total carbohydrate, 13 gm protein and 10% or more
          of the RDI for vitamins A, B12 and C, riboflavin, calcium, iron,
          phosphorus, zinc.
        </p>
      </ProDetails>
    </div>
  );
}

export default Cooking;
