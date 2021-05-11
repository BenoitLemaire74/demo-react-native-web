/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  Share,
} from 'react-native';

const Section = ({children, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      <Text style={[styles.sectionDescription]}>{children}</Text>
    </View>
  );
};

const MonComposant = () => {
  const [score, setScore] = React.useState(42);

  console.log('Rafraichissement de moncomposant avant');
  React.useEffect(() => {
    console.log('Affichage du composant');
  }, []);
  console.log('Rafraichissement de moncomposant après');
  return (
    <Button
      onPress={() => setScore(score + 1)}
      title={score}
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  );
};

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <MonComposant />
        <View>
          <Button
            onPress={() => {
              Share.share({message: 'Hello world'});
            }}
            title="Partager"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">Hello world!</Section>
          <Section title="Debug">Hello world!</Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
