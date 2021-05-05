import * as React from 'react';
import {useState} from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';





const recipesDefault = [
  {
    name: "Avocado Toast",
    details: <ol>
      <h1>Avocado Toast</h1>
      <li>"2 slices of Bread"</li>
      <li>"1 avocado-mashed"</li>
      <li>"3 smaill radishes-slices"</li>
      <li>"2 hardboiled eggs"</li>
      <li>"1 tbsp of cilantro-chopped"</li>
      <li>"cracked pepper to taste"</li>
    </ol> ,
    key: "1"
  },
  {
    name: "Mac and cheese",
    details: <ol>
      <h1>Mac and Cheese</h1>
      <li>"1 box of elbow macaroni"</li>
      <li>"1/4 cup all-purpose flour"</li>
      <li>"1/2 teaspoon salt"</li>
      <li>"ground black pepper to taste"</li>
      <li>"2 cups of milk"</li>
      <li>"3 cups shredded cheddar cheese"</li>
    </ol>,
    key: "2"
  },
  {
    name: "Mexican Beef Tacos",
    details: <ol>
      <h1>Mexican Beef Taco Toppings:</h1>
      <li>"Shredded cheese"</li>
      <li>"shredded lettuce"</li>
      <li>"chopped tomatoes"</li>
      <li>"diced onion"</li>
      <li>"sour cream"</li>
      <li>"sliced avocado"</li>
      <li>"guacamole"</li>

      <h1>Mexican Beef Taco ingredients</h1>
      <li>"1lb lean ground beef"</li>
      <li>"1 tablespoon chili powder"</li>
      <li>"1 teaspoon ground cumin"</li>
      <li>"3/4 teaspoon salt"</li>
      <li>"1/2 teaspoon dried oregano"</li>
      <li>"1/2 teaspoon garlic powder"</li>
      <li>"1/4 teaspoon ground black pepper"</li>
      <li>"1/2 cup tomato sauce"</li>
      <li>"1/4 cup water"</li>
      <li>"12 taco shells"</li>
      <li>"either hard shells or small 6-inch soft flour tortillas will work"</li>
    </ol> ,
    key: "3"
  },
   {
    name: "Homemade Sushi",
    details: <ol>
      <h1>Homemade Sushi</h1>
      <li>"6 sheets sushi seaweed aka nori"</li>
      <li>"1 batch prepared sushi rice"</li>
      <li>"1/2 lb sushi-grade raw salmon or desired raw fish of choice"</li>
      <li>"4 oz cream cheese sliced into strips"</li>
      <li>"1 avocado sliced"</li>
      <li>"soy sauce for serving"</li>
    </ol>,
    key: "4"
  },
   {
    name: "Homemade Pizza",
    details: <ol>
      <h1>Homemade Pizza</h1>
      <li>"1 package (1/4 ounce) active dry yeast"</li>
      <li>"1 teaspoon sugar"</li>
      <li>"1-1/4 cups warm water"</li>
      <li>"1/4 cup canola oil"</li>
      <li>"1/4 cup canola oil"</li>
      <li>"1 teaspoon salt"</li>
      <li>"3-1/2 to 4 cups all-purpose flour"</li>
      <li>"1/2 pound ground beef"</li>
      <li>"1 small onion, chopped"</li>
      <li>"1 can (15 ounces) tomato sauce"</li>
      <li>"3 teaspoons dried oregano"</li>
      <li>"1 teaspoon dried basil"</li>
      <li>"1 medium green pepper"</li>
      <li>"2 cups shredded part-skim mozzarella cheese"</li>
    </ol>,
    key: "5"
  }
]

function HomeScreen({navigation}) {
  let [recipes, setRecipe] = useState(recipesDefault)
  let renderButton = ({ item }) => (<Button title={item.name}
      onPress={() => navigation.push('Details', { item: item, items : recipes })}> 
      </Button>)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <FlatList data={recipes} renderItem={renderButton}></FlatList>
    
    </View>
  );
}

function DetailsScreen({navigation, route}) {
  const { item, items } = route.params;
  
  navigation.setOptions({title: item.name})
  let nextItemIndex= items.findIndex((curItem) => curItem == item)
  nextItemIndex = (nextItemIndex + 1) % items.length
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{item.details}</Text>
        <Button title="Home"
        onPress={() => navigation.navigate('Home')}>
        </Button>
        <Button title={`Suggested Recipe: ${items[nextItemIndex].name}`}
        onPress={() => navigation.push('Details', {item: items[nextItemIndex], items: items})}>
        </Button>

    
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;