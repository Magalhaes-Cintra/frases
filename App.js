import { Text, SafeAreaView, StyleSheet } from 'react-native';
import {useFonts, Bangers_400Regular, Inter_900Black, Manrope_400Regular, Allura_400Regular, Lusitana_700Bold, PlayfairDisplaySC_400Regular, RobotoCondensed_300Light_Italic, BalsamiqSans_400Regular, Oswald_400Regular, RubikIso_400Regular} from'@expo-google-fonts/dev';


export default function App() {

let [fontsLoaded, fontError] = useFonts({
  Bangers_400Regular, Inter_900Black, Manrope_400Regular,  Allura_400Regular, Lusitana_700Bold, PlayfairDisplaySC_400Regular, RobotoCondensed_300Light_Italic, BalsamiqSans_400Regular, Oswald_400Regular, RubikIso_400Regular
})
if(!fontsLoaded && !fontError){
  return null;
}

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
       "O sucesso é a soma de pequenos esforços repetidos dia após dia." - Robert Collier
      </Text>
      <Text style={styles.titulo2}>
       "Nossas maiores glórias não estão em nunca falhar, mas em nos levantarmos toda vez que caímos." - Ralph Waldo Emerson
      </Text>
      <Text style={styles.titulo3}>
      "A maior glória em viver não está em nunca cair, mas em nos levantarmos toda vez que caímos." - Nelson Mandela 
      </Text>
      <Text style={styles.titulo4}>
       "A força não vem da capacidade física. Vem de uma vontade indomável." - Mahatma Gandhi 
      </Text>
      <Text style={styles.titulo5}>
       "O sucesso é a capacidade de ir de um fracasso a outro sem perda de entusiasmo." - Winston Churchill 
      </Text>
      <Text style={styles.titulo6}>
       "A tecnologia move o mundo." - Steve Jobs 
      </Text>
      <Text style={styles.titulo7}>
       "A tecnologia tornou possível que qualquer pessoa em qualquer lugar possa ter uma voz." - Jack Dorsey 
      </Text>
      <Text style={styles.titulo8}>
       "Não é que estamos usando a tecnologia, é que estamos vivendo através dela." - Neil Postman 
      </Text>
      <Text style={styles.titulo9}>
       "As pessoas sempre serão mais inteligentes que as máquinas, porque são capazes de se adaptar e aprender." - Garry Kasparov 
      </Text>
      <Text style={styles.titulo10}>
       "A inovação distingue um líder de um seguidor." - Steve Jobs 
      </Text>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    margin: 24, 
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Bangers_400Regular',
  },
  titulo2: {
    margin: 24, 
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Inter_900Black',
  },
   titulo3: {
    margin: 24, 
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Manrope_400Regular',
  },
   titulo4: {
    margin: 24, 
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Allura_400Regular',
  },
   titulo5: {
    margin: 24, 
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Lusitana_700Bold',
  },
   titulo6: {
    margin: 24, 
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'PlayfairDisplaySC_400Regular',
  },
   titulo7: {
    margin: 24, 
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'RobotoCondensed_300Light_Italic',
  },
   titulo8: {
    margin: 24, 
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'BalsamiqSans_400Regular',
  },
   titulo9: {
    margin: 24, 
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Oswald_400Regular',
  },
   titulo10: {
    margin: 24, 
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'RubikIso_400Regular',
  },
});