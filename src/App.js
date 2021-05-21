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

/*-----------------------------------------------------------------*/
function carré(nombre) {
  return nombre * nombre;
}

function nbAleatoire(mini, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 10
var entier = nbAleatoire(1, 200);

var MesPays = ["Afghanistan", "Afrique du Sud", "Albanie", "Algérie", "Allemagne", "Andorre", "Angola", "Antigua-et-Barbuda", "Arabie saoudite", "Argentine", "Arménie", "Australie", "Autriche", "Azerbaïdjan", "Bahamas", "Bahreïn", "Bangladesh", "Barbade", "Belgique", "Belize", "Bénin", "Bhoutan", "Biélorussie", "Birmanie", "Bolivie", "Bosnie-Herzégovine", "Botswana", "Brésil", "Brunei", "Bulgarie", "Burkina Faso", "Burundi", "Cambodge", "Cameroun", "Canada", "Cap-Vert", "République centrafricaine", "Chili", "Chine", "Chypre", "Colombie", "Comores", "République du Congo", "République démocratique du Congo", "Îles Cook", "Corée du Nord", "Corée du Sud", "Costa Rica", "Côte d'Ivoire", "Croatie", "Cuba", "Danemark", "Djibouti", "République dominicaine", "Dominique", "Égypte", "Émirats arabes unis", "Équateur", "Érythrée", "Espagne", "Estonie", "Eswatini", "États-Unis", "Éthiopie", "Fidji", "Finlande", "France", "Gabon", "Gambie", "Géorgie", "Ghana", "Grèce", "Grenade", "Guatemala", "Guinée", "Guinée-Bissau", "Guinée équatoriale", "Guyana", "Haïti", "Honduras", "Hongrie", "Inde", "Indonésie", "Irak", "Iran", "Irlande", "Islande", "Israël", "Italie", "Jamaïque", "Japon", "Jordanie", "Kazakhstan", "Kenya", "Kirghizistan", "Kiribati", "Koweït", "Laos", "Lesotho", "Lettonie", "Liban", "Liberia", "Libye", "Liechtenstein", "Lituanie", "Luxembourg", "Macédoine du Nord", "Madagascar", "Malaisie", "Malawi", "Maldives", "Mali", "Malte", "Maroc", "Îles Marshall", "Maurice", "Mauritanie", "Mexique", "États fédérés de Micronésie", "Moldavie", "Monaco", "Mongolie", "Monténégro", "Mozambique", "Namibie", "Nauru", "Népal", "Nicaragua", "Niger", "Nigeria", "Niue", "Norvège", "Nouvelle-Zélande", "Oman", "Ouganda", "Ouzbékistan", "Pakistan", "Palaos", "Palestine", "Panama", "Papouasie-Nouvelle-Guinée", "Paraguay", "Pays-Bas", "Pérou", "Philippines", "Pologne", "Portugal", "Qatar", "Roumanie", "Royaume-Uni", "Russie", "Rwanda", "Saint-Christophe-et-Niévès", "Saint-Marin", "Saint-Vincent-et-les-Grenadines", "Sainte-Lucie", "Salomon", "Salvador", "Samoa", "Sao Tomé-et-Principe", "Sénégal", "Serbie", "Seychelles", "Sierra Leone", "Singapour", "Slovaquie", "Slovénie", "Somalie", "Soudan", "Soudan du Sud", "Sri Lanka", "Suède", "Suisse", "Suriname", "Syrie", "Tadjikistan", "Tanzanie", "Tchad", "République tchèque", "Thaïlande", "Timor oriental", "Togo", "Tonga", "Trinité-et-Tobago", "Tunisie", "Turkménistan", "Turquie", "Tuvalu", "Ukraine", "Uruguay", "Vanuatu", "Vatican", "Venezuela", "Viêt Nam", "Yémen", "Zambie", "Zimbabwe"];


var MesCapitales = ["Kaboul", "Pretoria", "Tirana", "Alger", "Berlin", "Andorre-la-Vieille", "Luanda", "Saint John's", "Riyad", "Buenos Aires", "Erevan", "Canberra", "Vienne", "Bakou", "Nassau", "Manama", "Dacca", "Bridgetown", "Bruxelles", "Belmopan", "Porto-Novo", "Thimphou", "Minsk", "Naypyidaw", "La Paz", "Sarajevo", "Gaborone", "Brasilia", "Bandar Seri Begawan", "Sofia", "Ouagadougou", "Gitega", "Phnom Penh", "Yaoundé", "Ottawa", "Praia", "Bangui", "Santiago", "Pékin", "Nicosie", "Bogota", "Moroni", "Brazzaville", "Kinshasa", "Avarua", "Pyongyang", "Séoul", "San José", "Yamoussoukro", "Zagreb", "La Havane", "Copenhague", "Djibouti", "Saint-Domingue", "Roseau", "Le Caire", "Abou Dabi", "Quito", "Asmara", "Madrid", "Tallinn", "Mbabane", "Washington D.C.", "Addis-Abeba", "Suva", "Helsinki", "Paris", "Libreville", "Banjul", "Tbilissi", "Accra", "Athènes", "Saint-Georges", "Guatemala", "Conakry", "Bissau", "Malabo", "Georgetown", "Port-au-Prince", "Tegucigalpa", "Budapest", "New Delhi", "Jakarta", "Bagdad", "Téhéran", "Dublin", "Reykjavik", "Jérusalem", "Rome", "Kingston", "Tokyo", "Amman", "Noursoultan", "Nairobi", "Bichkek", "Tarawa-Sud", "Koweït", "Vientiane", "Maseru", "Riga", "Beyrouth", "Monrovia", "Tripoli", "Vaduz", "Vilnius", "Luxembourg", "Skopje", "Antananarivo", "Kuala Lumpur", "Lilongwe", "Malé", "Bamako", "La Valette", "Rabat", "Delap-Uliga-Darrit", "Port-Louis", "Nouakchott", "Mexico", "Palikir", "Chisinau", "Monaco", "Oulan-Bator", "Podgorica", "Maputo", "Windhoek", "Yaren", "Katmandou", "Managua", "Niamey", "Abuja", "Alofi", "Oslo", "Wellington", "Mascate", "Kampala", "Tachkent", "Islamabad", "Melekeok", "Ramallah", "Panama", "Port Moresby", "Asuncion", "Amsterdam", "Lima", "Manille", "Varsovie", "Lisbonne", "Doha", "Bucarest", "Londres", "Moscou", "Kigali", "Basseterre", "Saint-Marin", "Kingstown", "Castries", "Honiara", "San Salvador", "Apia", "São Tomé", "Dakar", "Belgrade", "Victoria", "Freetown", "Singapour", "Bratislava", "Ljubljana", "Mogadiscio", "Khartoum", "Djoubanote", "Sri Jayawardenapura Kotte", "Stockholm", "Berne", "Paramaribo", "Damas", "Douchanbé", "Dodoma", "N'Djaména", "Prague", "Bangkok", "Dili", "Lomé", "Nuku'alofa", "Port-d'Espagne", "Tunis", "Achgabat", "Ankara", "Funafuti", "Kiev", "Montevideo", "Port-Vila", "Cité du Vatican", "Caracas", "Hanoï", "Sanaa", "Lusaka", "Harare"];


var i = 0 

for (var i = 0; i < 10; i++) {

  var noQuestion = nbAleatoire(1, 197);
  print(MesPays[noQuestion]);
  ReadableStream(nomCapitale);

  if (nomCapitale == MesCapitales[noquestion]) {
    print("Bonne réponse");
  } else {
    print(MesCapitales[noquestion]);
  }

}

