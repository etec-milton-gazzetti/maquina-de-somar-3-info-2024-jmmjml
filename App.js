import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ETEC Professor Milton Gazzeti</Text>
      <Text  style={{fontStyle: 'italic',}}>Terceira série</Text>
      <Text  style={{textDecorationLine: 'line-through',}}>MTEC Informática para Internet</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
