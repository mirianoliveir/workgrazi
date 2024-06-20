import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F5E2FD', dark: '#F6D6FF' }}
      headerImage={
        <Image
          source={require('@/assets/images/me.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Seja bem-vindo(a)!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sobre: </ThemedText>
        <ThemedText>
        Olá! Me chamo Mirian Oliveira e sou estudante de informática. Estou em busca de conhecimento na área, especialmente interessada em programação e desenvolvimento de software. Acredito na importância da tecnologia como ferramenta para resolver problemas e facilitar o dia a dia das pessoas. Estou determinada a aprender e crescer profissionalmente nesse campo dinâmico.          
        </ThemedText>
      </ThemedView>
     
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    
  },
  reactLogo: {
    height: '135%',
    width: '100%',
    bottom: 0,
    left: 0,
    top: 10,
    position: 'absolute',
    
  },
});
